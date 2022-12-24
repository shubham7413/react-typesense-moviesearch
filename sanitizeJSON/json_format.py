# fields to include: id, url, title

import json

f = open("saved_links.json")

open("final_saved_links.json", "w").close()

f1 = open("final_saved_links.json", "a")


data = json.load(f)

f1.write("[")

idx = 1000
for i in data:
    f1.write("{")
    f1.write('"id": "' + str(idx) + '",')
    f1.write('"url": "' + i + '",')

    title_array = i.split("/")
    title = title_array[len(title_array) - 2]
    f1.write('"title": "' + title + '"')

    f1.write("},")
    idx += 1

f1.write("]")
"""
DON'T FORGET TO REMOVE "," FROM "final_saved_links.json"
"""
f1.close()
f.close()
