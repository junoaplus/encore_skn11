# encore_skn11

### **sk 네트웍스 famliy ai camp를 진행하면서 배우고 실습한 코드를 기록하고 정리하는 공간(Data analysis 부분)**

---

- 2월 27일 목요알 - 데이버 분석 개요
    - 데이터 분석이란?
        - 데이터를 실행 가능한 인사이트로 변환한다. 
    - 데이터 분석 프로세스
        - 비지니스 이해 
        - 데이터 이해 
        - 데이터 준비
        - 모델링
        - 평가
        - 배포

---

- 2월 27일 목요일 - 데이터 분석 - numpy
    - numpy(numerical python)
        - 대규모 다차원 배열과 행렬 연산을 빠르고 효울적으로 수행 할 수 있는 라이브러리
        - pip install numpy
        - import numpy as np
    - ndarray 
        - n차원 배열
        - np.array
    - 브로드캐스팅 
        - 작은 배열을 큰 배열에 맞춘다
    - slicing
        - 차원 유지
    - index 접근
        - 차원 제거

---

- 2월 28일 금요일 - 데이터 분석 - numpy
    - 모집단
        - 연구 대상 전체
    - 포본
        - 모집단에서 뽑은 것
    - 정렬
        - np.sort
        - np.argsort

---

- 3월 4일 화요일 - 데이터 분석 - pandas
    - iloc
        - .iloc[ 시작 : 끝-1 ]
        - iloc는 끝-1로 출력 된다.
    - loc
        - loc[ 시작라벨 : 끝라벨]
        - loc는 마지막에 적은 라벨도 출력 된다. 
    - slicing
        - 다처원에서 [:] 행열 모두 슬라이싱을 하면 Series, 하나만 슬라이싱 하면 DataFrame
    - inplace = True
        - df.drop('BMI type', axis=1, inplace=True)
        - 이렇게 사용하면 다시 df에 재정의 해주거나 다른 곳에 저장 하지 않고 바로 df에 저장 된다.
    - 역순 정령 
        - df.sort_values('Net worth', ascending=False)
        - ascending=False
        - 여러개를 줄 때
            - []로 묶어서 전달
            - df.sort_values(['Net Worth','Years with Bank'], ascending=[False, False])