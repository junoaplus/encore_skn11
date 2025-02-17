# encore_skn11

### **sk 네트웍스 famliy ai camp를 진행하면서 배우고 실습한 코드를 기록하고 정리하는 공간(python 부분)**

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

- 2월 11일 화요일 - python의 제어문(python-basic-03, 04번)
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
    - for문
        - 코드의 반복 최소화, 유지보수 용이 
        - for 변수 in 객체 ro range(이상, 미만):
            (실행구문)
    - while문
        - while 조건식:
            (실행 구문)
        - break, continue(분기문) break를 하면 for or while문을 빠져나감

---

- 2월 12일 수요일 -python의 함수(python-basic-05번)
    - 함수
        - 함수를 만들어서 필요할때마다 호출해서 사용 가능해서 재사용과 유지 할떄 편리하다 
        - def 함수(매개변수, 매개변수):
            함수가 실행하는 코드
           함수(인자, 인자)
        - 위치인자 , 키워드인자 (위치인자와 키워드인자를 동시에 사용할 경우에는 **무조건 위치인자를 우선으로 사용해야 하다.**)
        - 반환값
            def 함수():
                return 내용
            result = 함수()
            print(result)    #result내용(return돤 내용) 출력
        - 패키징, 언패키징

            - 패키징
            def add_many(*args): 
                result = 0
                for i in args: 
                result = result + i
                return result 
            add_many(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)    # 55
            
            - 언패키징
            def sum(a, b, c):
                return a + b + c
            numbers = [1, 2, 3] # sum(numbers)    # 배열로 하나만 넘겨주면 에러 발생
            print(sum(*numbers))    # 6
    - 람다
        - 일회성으로 사용할 간단한 함수를 만드는 것
        - 변수명 = lambda (매개변수) : (함수 실행 내용)
        - map 패키징과 비슷한 느낌, 람다에서 리스트를 실행 할때 하나씩 넣어서 실행해 주는 것.
            리스트 = []
            squared_numbers = map(lambda x : x**2, 리스트)
            print(list(squared_numbers))   
        - filter 조건을 주어서 조건에 맞는 요소를 리스트로 변환하여 출력 
            리스트 = []
            squared_numbers = filter(lambda x : x > 100, 리스트)
            print(list(squared_numbers))  # 100보다 큰 수만 리스트로 출력 됨  

---

- 2월 13일 목요일 - python의 cladd(python-basic-06번)
    - class
        - 객체지향 프로그래밍을 지원하는 중요한 개념, 함수를 하나로 묶어 클래스를 만들어 여러개의 객체를 만들 수 있음
        - 대문자로 선어 해야 된다
        - 메서드 : self로 접근하기 위한 객체를 의미한다.
        - 생성자 : __init__ 매개변수를 전달받아 변수를 생성한다
        class Person:    
            national = 'korea'
            language = 'korean'
            tools = []
    
            def __init__(self, name, age):  #성장자 __init__과 메서드 self를 사용 
                self.name = name
                self.age = age
    
            def greeting(self): # self를 사용하여 접근 
                 return '안녕하세요'
    
            def information(self):
                return "I'm from " + self.national + " and I use " + self.language + ". My name is " + self.name + ". I'm " + str(self.age)
    
            def favorite(self, color):
                return "I love " + color

            def add_tool (self, tool):
                __class__.tools.append(tool)     #tools 이라는 list에 tool 추가하는 방법

        junho = Person("준호", 23) #class를 사용 하여 national = korea, language = korean, name = 준호, age = 23 이라는 객체를 만듬

        - 상속
        class Student(Person):

            def __init__(self, name, age, hobby):
                # 1. 부모클래스명.__intit__(self, ...)
                # Person.__init__(self, name)
        
                # 2. super().__init__(...)
                # Person.__init__(self, name, phone)

                self.hobby = hobby

        juno = Student("주노", 23, "야구보기) #Person을 상속받은 Student class를 사용 하여 national = korea, language = korean, name = 준호, age = 23, hobby =  야구보기 라는 객체를 만듬

    - global, local
        - global - 전역변수, local - 로컬변수
            전역변수는 어디서든 사용 가능 로컬변수는 함수나 클래스 안에서만 사용가능하다.

---

- 2월 14일 금요일 - python의 모듈&패키지 (python-basic-07번)
    - 모듈 
        import 모듈
        improt 모듈 as 별칭  # 모듈 이름이 길면 별칭을 사용하면 좋음 (ex)import numpy as np)
        form 모률 import 쓰고싶은 함수나 변수
    - 내장모듈
        모듈.py 라는 파일을 만들고 다른 파일에서 모듈.py에 있는 것들을 불러와서 쓰고 샆을 때
        import 경로.모듈


