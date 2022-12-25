from urllib.request import urlopen
from bs4 import BeautifulSoup

# target url
url = "https://m.youtube.com/watch?v=wdP_UDSsuro"

# using the BeautifulSoup module
soup = BeautifulSoup(urlopen(url))

# displaying the title
print("Title of the website is : ")
print(soup.title.get_text())
