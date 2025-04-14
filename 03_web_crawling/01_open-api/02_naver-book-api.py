import urllib.parse
import urllib.request
import json

#API 호출을 위한 client_id, client_secret 변수 설정
client_id = 'pwEe8svWp00i1LSGKt43'
client_secret = 'ri2y5Ye5wy'

searchText = urllib.parse.quote('소나기')

url = "https://openapi.naver.com/v1/search/book.json?query=" + searchText
request = urllib.request.Request(url)
request.add_header('X-Naver-Client-Id', client_id)
request.add_header('X-Naver-Client-Secret', client_secret)

response = urllib.request.urlopen(request)
response_body = response.read()
response_body = json.loads(response_body)


book_list = response_body['items']

print(book_list)

