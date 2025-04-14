# 동적 페이지 웹 스크래칭 < - selenium
# 동적 페이지 : 요청한 URL에서 응답받은 HTML안의 JS를 실행해 HTML을 새로 만든 경우 (Client Side Rendering)

# Selenium
# - 인증을 요구하는 특정 웹 페이지의 데이터 스크랩
# - 무한 댓글 스크랩
# - 브라우저용 매크로로써 사용 가능

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

# 1. chorme 실행
driver = webdriver.Chrome()

# 2. 특정 url 접근
# driver.get('https://search.naver.com/search.naver?ssc=tab.news.all&where=news&sm=tab_jum&query=chat+gtp')
driver.get('https://naver.com')
time.sleep(1)

# 3. 검색 처리
search_box = driver.find_element(By.ID, "query") 
search_box.send_keys('llm')
search_box.send_keys(Keys.RETURN)
time.sleep(1)

# - 뉴스 탭 이동
news_btn = driver.find_element(By.XPATH, '//*[@id="lnb"]/div[1]/div/div[1]/div/div[1]/div[1]/a')
news_btn.click()
time.sleep(3)

# 4. 스코를 처리
for _ in range(1):
    body = driver.find_element(By.TAG_NAME, "body")
    body.send_keys(Keys.END)
    time.sleep(1)
    
# 5. 특정 요소에 접근
news_area_elems = driver.find_elements(By.CSS_SELECTOR, ".news_area")
#news_info_elem = driver.find_elements(By.CSS_SELECTOR, ".news_info")
#news_contents_elems = driver.find_elements(By.CSS_SELECTOR, ".news_contents")
news_data = []
print(len(news_area_elems))

for news_area_elem in news_area_elems:
    #print(news_contents_elem)
    #print(type(news_contents_elem))
    news_info_elem = news_area_elem.find_element(By.CSS_SELECTOR, ".news_info")
    news_contents_elem = news_area_elem.find_element(By.CSS_SELECTOR, ".news_contents")
    
    info_elem = news_info_elem.find_elements(By.CSS_SELECTOR, "a.info")
    
    if len(info_elem) > 1 and '네이버뉴스' in info_elem[1].text:
        
        a_tag = news_contents_elem.find_element(By.CSS_SELECTOR, ".news_tit")
        title = a_tag.text 
        href = a_tag.get_attribute('href')
        print(title, '|', href)
        
        driver.execute_script('window.open("");')
        driver.switch_to.window(driver.window_handles[1])
        driver.get(href)
        time.sleep(1)
        
        content = driver.find_element(By.TAG_NAME, "div").text
        
        news_data.append({
            "title" : title,
            "link" : href,
            "content" : content
        })
        
        # driver.back()
        driver.close()
        
        driver.switch_to.window(driver.window_handles[0])
        time.sleep(1)
        
with  open('news_data.txt', 'w', encoding='utf8') as file:
    for news in news_data:
        file.write(f'제목: {news['title']}\n')
        file.write(f'링크: {news['link']}\n')
        file.write(f'내용: {news['content']}\n')
        file.write("="*100)
        file.write('\n')
    
driver.quit()