# fields to include: id, url, title

import json
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import ssl


f = open("saved_links.json")

open("final_saved_links.json", "w").close()

f1 = open("final_saved_links.json", "a", encoding="utf-8")


data = json.load(f)

f1.write("[")

idx = 1000
for i in data:
    f1.write("{")
    f1.write('"id": "' + str(idx) + '",')
    f1.write('"url": "' + i + '",')

    # Extracting Title from URL
    url = i

    req = Request(
        url=i,
        headers={
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        },
    )
    context = ssl._create_unverified_context()
    webpage = urlopen(req, context=context).read()

    soup = BeautifulSoup(webpage, "html.parser")

    try:
        title = soup.title.get_text()
    except:
        title = i

    f1.write('"title": "' + title + '"')

    f1.write("},")
    idx += 1

f1.write("]")
"""
DON'T FORGET TO REMOVE "," FROM "final_saved_links.json"
"""
f1.close()
f.close()
