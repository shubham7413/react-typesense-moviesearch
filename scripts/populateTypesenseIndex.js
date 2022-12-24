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

  console.log("Config: ", TYPESENSE_CONFIG);

  const typesense = new Typesense.Client(TYPESENSE_CONFIG);

  const schema = {
    name: "links",
    num_documents: 0,
    fields: [
      {
        name: "url",
        type: "string",
        facet: false,
      },
      {
        name: "title",
        type: "string",
        facet: false,
      },
    ],
  };

  const links = require("./data/saved_links.json");

  try {
    const collection = await typesense.collections("links").retrieve();
    console.log("Found existing collection of links");
    console.log(JSON.stringify(collection, null, 2));

    if (collection.num_documents !== links.length) {
      console.log("Collection has different number of documents than data");
      console.log("Deleting collection");
      await typesense.collections("links").delete();
    }
  } catch (err) {
    console.error(err);
  }

  console.log("Creating schema...");
  console.log(JSON.stringify(schema, null, 2));

  await typesense.collections().create(schema);

  console.log("Populating collection...");

  try {
    const returnData = await typesense
      .collections("links")
      .documents()
      .import(links);
  } catch (err) {
    console.error(err);
  }
})();
