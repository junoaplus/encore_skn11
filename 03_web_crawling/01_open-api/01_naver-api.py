import urllib.parse
import urllib.request

#API 호출을 위한 client_id, client_secret 변수 설정
client_id = 'pwEe8svWp00i1LSGKt43'
client_secret = 'ri2y5Ye5wy'

encText = urllib.parse.quote('오늘 점심')

#url = "https://openapi.naver.com/v1/search/news.json?query=" + encText
url = "https://openapi.naver.com/v1/search/news.xml?query=" + encText

request = urllib.request.Request(url)

request.add_header('X-Naver-Client-Id', client_id)
request.add_header('X-Naver-Client-Secret', client_secret)

response = urllib.request.urlopen(request)

print(response.getcode()) # getxode() : 응답 코드 반환

response_body = response.read() # read() : 응답 내용 반환
print(response_body.decode('utf-8'))