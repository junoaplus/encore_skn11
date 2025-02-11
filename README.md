# encore_skn11

## **sk 네트웍스 famliy ai camp를 진행하면서 배우고 실습한 코드를 기록하고 정리하는 공간**

- 2월 10일 월요일 - python의 변수와 자료형(python-basic-01,02번)
    - 숫자형
    - 문자형
    - 논리형
        - boolean
        - and(모두 True), or(하나라도 True), not(Flase) 면 True
        - True, Flase는 첫 글자 대문자로
    - 형 변환
        - 암시작 형 변환
        - 명시적 형 변환
    - 리스트
        - [] 대괄호 사용
        - 어떤 자료형이든 들어갈 수 있다.
        - 리스트 = -가 들어가 문자열.split('-') -를 기준으로 리스트를 만듬
        - 리스트.append(), 리스트,insert(,)의 차이는 append는 맨뒤에 insert는 원하는 위치를 지정해서 추가
        - 리스트.sort(), 리스트.reverse() 순서대로, 역순으로
        - 리스트[시작:끝+1:몇개씩 or 뒤에서 부터는 -1]
    - 튜플
        - **불변**
        - () 소괄호 사용
    - 셋
        - 중복 허용 X
        - {} 중괄호 사용
        - 합집합 |
        - 교집합 &
        - 차집합 -
        - 대칭집합 ^ (합집합-교집합)

- 2월 11일 화요일  - python의 변수와 자료형(python-basic-02번)
    - 딕셔너리
        - key, value 쌍으로 저장 
        - {} 중괄호안에 쌍으로 집어 넣어야 됨
        - 딕셔너리.keys() key값만 보기
        - 딕셔너리.values() value값만 보기 
        - 딕셔너리.items() 아이템 모두 보기 
        - 딕셔너리['key'] = 'new_value' 내용 바꾸기 
        - del 딕셔너리['key']
        - 딕셔너리.pop('key') key가 제거 되고 value가 출력 됨, 딕셔너리에서 삭제 됨

---

- 2월 11일 화요일 - python의 제어문(python-basic-03번)
    - if문
        - if 조건 :
            맞으면 실행
        - if 조건 :
            맞으면 실행 맞지 않으면 else 실행
           else(조건적지 않음):
            if가 맞지 않았으면 실행
        - if 조건 :
            맞으면 실행 안맞으면 elif로
           elif 조건 :
            맞으면 실행 안맞으면 아래꺼 실행
    - match case
        - 조건이 많을 때 if문 보다 가독성이 높고 간결하다
        - match 변수 or 값
            case 값1:
                실행문1
            case 값2:
                실행문2
            case _:
                실행문3 #다른 조건들을 모두 제외한 값
