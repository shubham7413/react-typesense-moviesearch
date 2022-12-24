require("dotenv").config();

const Typesense = require("typesense");

const BASE_IMAGE_PATH = "https://image.tmdb.org/t/p/w300";

module.exports = (async () => {
  const TYPESENSE_CONFIG = {
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: process.env.TYPESENSE_PORT,
        protocol: process.env.TYPESENSE_PROTOCOL,
      },
    ],
    apiKey: process.env.TYPESENSE_ADMIN_API_KEY,
  };

  const typesense = new Typesense.Client(TYPESENSE_CONFIG);

  const schema = {
    name: "SavedLinks",
    num_documents: 0,
    fields: [
      {
        name: "url",
        type: "string",
      },
      {
        name: "title",
        type: "string",
      },
    ],
    // default_sorting_field: "popularity",
  };

  const SavedLinks = require("./data/saved_links.json");

  try {
    const collection = await typesense.collections("SavedLinks").retrieve();
    console.log("Found existing collection of SavedLinks");
    console.log(JSON.stringify(collection, null, 2));

    if (collection.num_documents !== SavedLinks.length) {
      console.log("Collection has different number of documents than data");
      console.log("Deleting collection");
      await typesense.collections("SavedLinks").delete();
    }
  } catch (err) {
    console.log(err);
  }

  console.log("Creating schema...");
  console.log(JSON.stringify(schema, null, 2));

  await typesense.collections().create(schema);
  console.log("Populating collection...");

  // movies.forEach(async (movie) => {
  //   movies.image = BASE_IMAGE_PATH + movie.poster_path;

  //   delete movie.poster_path;
  //   delete movie.original_language;
  //   delete movie.original_title;
  //   delete movie.video;
  //   delete movie.backdrop_path;
  //   delete movie.vote_count;
  //   delete movie.id;
  //   delete movie.adult;
  //   delete movie.genre_ids;

  //   movie.genres.forEach((genre, idx) => {
  //     movie[`genres.lvl${idx}`] = [movie.genres.slice(0, idx + 1).join(">")];
  //   });
  // });

  try {
    await typesense.collections("SavedLinks").documents().import(SavedLinks);

    // console.log("Return data:", returnData);
  } catch (err) {
    console.error(err);
  }
})();
