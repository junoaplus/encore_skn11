import requests
from bs4 import BeautifulSoup
from datetime import datetime
from urllib.request import urlretrieve

# 스크랩한 뉴스 정보를 담은 NewsEntry Class
class NewsEntry:
    def __init__(self, title, href, img_path):
        self.title = title
        self.href = href
        self.img_path = img_path
        
    def __repr__(self):
        return f"NewsEntry<title={self.title}, href={self.href}. img_path={self.img_path}>"
        
# 1. request -> url 요청
keyworld = input("뉴스 검색 키우드 입력: ")
url = f"https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query={keyworld}"

response = requests.get(url)

# 2. html 응답
html = response.text

# 3. BeatifulSoup 객체 생성이
bs = BeautifulSoup(html, 'html.parser')

# 4. li.bx 반복순회 > .news_content > 두 번쨰 a 태그
news_contents = bs.select('div.news_contents')
print(len(news_contents))

# 5. herf속성: 링크, text: 뉴스 제목
news_list = []
for i, news_content in enumerate(news_contents) :
    a_tag = news_content.select_one('a.bynlPWBHumGsbotLYK9A.jT1DuARpwIlNAFMacxlu')
    title = a_tag.text
    href = a_tag['href']
    
    img_tag = news_content.select_one('img.thumb')
    img_lazysrc = img_tag['data-lazysrc']
    if img_lazysrc.startswith("http"):
        img_dir = "/Users/hwangjunho/Desktop/encore_skn11/web_crawling/02. static-web-page/images"
        today = datetime.now().strftime('%y%m%d')   # 파일명 생성을 위한 오늘 날짜
        filename = f'{img_dir}/{today}_{i}.jpg'     # 파일명 (저장할 파일 확장자까지)
        urlretrieve(img_lazysrc, filename)          # 파일 저장
        
    news_entry = NewsEntry(title, href, filename)
    news_list.append(news_entry)
    
# 경과 출력
for news in news_list:
    print(news['text'])