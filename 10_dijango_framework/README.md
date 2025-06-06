## 1. Django의 구조와 프로젝트 구성 방식 이해

- Django는 MTV(Model-Template-View) 아키텍처를 따른다.
- 각각의 역할:
  - **Model**: 데이터베이스 처리
  - **Template**: 사용자에게 보여지는 화면 처리
  - **View**: 로직을 처리하고 결과를 반환
- 하나의 프로젝트 안에 여러 앱을 생성하고, 역할을 분리해 관리하는 구조를 학습했다.
- 앱 생성 후 프로젝트 설정 파일에 등록하여 Django가 인식하도록 구성했다.

---

## 2. URL 라우팅과 뷰 처리

- 사용자의 요청 경로에 따라 특정 뷰 함수가 실행되도록 URL 패턴을 설정했다.
- `path()`를 사용해 URL과 view를 매핑하고, `include()`를 활용하여 앱별로 URL을 위임하는 구조를 구성했다.
- 뷰 함수에서는 문자열 응답 또는 템플릿을 렌더링하여 HTML을 반환하는 방식을 실습했다.

---

## 3. 템플릿 렌더링과 템플릿 상속

- Django 템플릿 언어(DTL)를 이용해 동적인 페이지를 구현했다.
- `{{ 변수 }}`, `{% if %}`, `{% for %}` 등의 템플릿 문법을 익혔다.
- `extends`, `block`을 활용한 템플릿 상속 구조로 공통 레이아웃을 구성했다.
- 레이아웃을 기준으로 다른 화면들을 유연하게 확장하는 방식으로 구성했다.

---

## 4. 정적 파일 사용 (CSS, JS, 이미지)

- 정적 파일(CSS, JS, 이미지)을 프로젝트에 적용하는 방법을 익혔다.
- `{% load static %}`을 통해 템플릿 내에서 정적 경로를 지정했다.
- 실제로 CSS와 이미지를 연결하여 페이지 디자인을 직접 적용해보는 경험을 했다.

---

## 5. 모델 정의 및 ORM 활용

- 모델 클래스를 정의하여 데이터베이스 테이블을 생성하는 방법을 익혔다.
- `makemigrations`와 `migrate` 명령어로 모델을 DB에 반영하는 흐름을 학습했다.
- Django 관리자 페이지에 모델을 등록하고 데이터를 추가, 수정, 삭제하는 과정을 실습했다.
- SQL문 없이도 데이터베이스를 조작할 수 있는 ORM의 장점을 체감했다.

---

## 6. MySQL로 데이터베이스 연동

- 기본 SQLite 대신 MySQL을 Django와 연동하는 방법을 실습했다.
- MySQL에서 사용자 및 데이터베이스를 생성하고, 권한 설정까지 진행했다.
- Django 설정 파일에서 MySQL 접속 정보를 등록하고 연동했다.
- `pymysql` 모듈을 설치하고, Django가 MySQL을 인식하도록 초기화 코드를 작성했다.
- 실제로 MySQL에 마이그레이션된 테이블을 확인하고 ORM으로 조작해보았다.


