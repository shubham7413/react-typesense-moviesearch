import scrapy
import json
import time


class QuotesSpider(scrapy.Spider):
    name = "quotes"

    def start_requests(self):

        f = open("saved_links.json")
        data = json.load(f)

        # Clear final_saved_links.json
        open("final_saved_links.json", "w").close()
        # open("final_saved_links.json", "w").close()
        # f1 = open("final_saved_links.json", "a", encoding="utf-8")
        # f1.write("[")

        idx = 1000
        for url in data:
            # f1.write("{")
            # f1.write('"id": "' + str(idx) + '",')
            # f1.write('"url": "' + url + '",')

            idx += 1

            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):

        f1 = open("final_saved_links.json", "a", encoding="utf-8")
        # f1.write("[")

        f1.write("{ \n")

        id = str(time.time())
        id = id.split(".")[1]

        f1.write('"id": "' + str(id) + '", \n')
        f1.write('"url": "' + response.request.url + '", \n')

        try:
            title = response.css("title::text")[0].get()
        except Exception as e:
            title = response.request.url

        title = title.strip()

        title = " ".join(line.strip() for line in title.splitlines())
        title = title.replace('"', '\\"')
        if len(title) == 0:
            f1.write('"title": "' + response.request.url + '" \n')
        else:
            f1.write('"title": "' + title + '" \n')

        f1.write("}, \n")

        print(title)
