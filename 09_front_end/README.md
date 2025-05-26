
## 문자열(String) 다루기

자바스크립트에서 문자열은 텍스트 데이터를 표현하는 기본 자료형이다.  
문자열은 작은따옴표('), 큰따옴표("), 백틱(`) 등 다양한 방법으로 선언할 수 있으며, 변수에 할당해서 다양한 연산을 할 수 있다.

```js
let greeting = "Hello, world!";
```

---

## undefined와 null의 차이

- **undefined**: 변수를 선언만 하고 값을 할당하지 않았을 때 자동 할당되는 값.
- **null**: 명시적으로 "값이 비어있다"를 표현할 때 사용하는 값.
둘 다 "없음"을 의미하지만, undefined는 시스템이, null은 개발자가 의도적으로 사용한다.

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

## 값과 타입을 비교하는 다양한 연산자

### 동등 연산자(==)
- 값만 비교, 타입 다르면 자동 형 변환 후 비교  
  - 예: `2 == '2' // true`

### 일치 연산자(===)
- 값과 타입 모두 비교  
  - 예: `2 === '2' // false`, `2 === 2 // true`

### 부등 연산자(!=)
- 값만 비교, 타입 다르면 변환 후 비교  
  - 예: `3 != '3' // false`

### 불일치 연산자(!==)
- 값 또는 타입 다르면 true  
  - 예: `3 !== '3' // true`

### 크기 비교 연산자(>, <, >=, <=)
- `>` : 왼쪽 값이 오른쪽보다 크면 true  
- `<` : 왼쪽 값이 오른쪽보다 작으면 true  
- `>=` : 크거나 같으면 true  
- `<=` : 작거나 같으면 true  
  - 예: `5 > 3 // true`, `2 < 1 // false`, `3 >= 3 // true`, `2 <= 2 // true`

**실무 Tip:**  
`==`, `!=`는 자동 형 변환 때문에 예기치 않은 결과가 나올 수 있으니, 대부분의 상황에서는 `===`, `!==`만 쓰는 것이 안전하다.

---

## 논리 연산과 단락 평가(Short-circuit Evaluation)

- **AND(&&):** 앞이 false면 뒤는 평가 안 하고 바로 false
  - 예: `false && something // false`
- **OR(||):** 앞이 true면 뒤는 평가 안 하고 바로 true
  - 예: `true || something // true`
- **활용 예시:**  
  ```js
  let name = input || '익명';
  ```

---

## 옵셔널 체이닝(Optional Chaining)

- `?.` 연산자를 사용해 객체의 중첩 프로퍼티를 안전하게 접근
- 중간 값이 undefined/null이면 에러 없이 undefined 반환
- 예시:
  ```js
  let city = user?.address?.city;
  ```

---

## Nullish 병합 연산자(??)

- null 또는 undefined만 기본값으로 대체  
- 0, '', false는 그대로 사용
- 예시:
  ```js
  let value = input ?? '기본값';
  ```

---

## 객체(Object) 선언과 프로퍼티 다루기

- 객체는 여러 데이터를 key:value 쌍으로 묶는 자료형
- 선언:  
  ```js
  let user = { name: '홍길동', age: 25 };
  ```
- 프로퍼티 읽기: `user.name` 또는 `user['name']`
- 프로퍼티 추가/수정: `user.job = '개발자'`
- 프로퍼티 삭제: `delete user.age`

---

## 객체에 함수(메서드) 추가하기

- 객체에 함수를 메서드로 추가 가능  
- this는 해당 객체 자신을 가리킴

```js
let user = {
  name: '철수',
  greet: function() { console.log('안녕, ' + this.name); }
};
user.greet(); // 안녕, 철수
```

---

## 계산된 프로퍼티 이름 사용하기

- 객체 선언 시 대괄호로 변수나 식을 키로 사용 가능

```js
let prop = 'score';
let obj = { [prop]: 100 };
```

---

## 객체의 프로퍼티 동적 추가/삭제/변경

- 런타임에 객체에 프로퍼티를 자유롭게 추가/삭제/수정할 수 있음

```js
user.age = 30;    // 추가/변경
delete user.age;  // 삭제
```

---

## 함수 선언, 호출, 매개변수

- function 키워드로 함수 선언, 다양한 인자 전달

```js
function add(a, b) { return a + b; }
add(2, 3); // 5
```

---

## 함수 호이스팅(Hoisting)

- 함수 선언문은 코드 실행 전 미리 메모리에 할당됨
- 선언보다 먼저 호출 가능

```js
hello();
function hello() { console.log('Hi'); }
```

---

## 함수의 매개변수와 arguments 객체

- 함수 내 arguments 객체로 전달된 모든 인자 접근 가능
- 오버로딩처럼 다양한 인자 처리 가능

---

## 화살표 함수(Arrow Function)와 특징

- 짧고 간결한 함수 선언 문법  
- this, arguments가 바깥 스코프와 동일  
- 생성자, prototype 불가

```js
const sum = (a, b) => a + b;
```

---

## 순수 함수와 비순수 함수

- **순수 함수:** 동일 입력 → 동일 결과, 외부 상태 변화 없음  
- **비순수 함수:** 외부 변수/상태를 사용하거나 변경

```js
function pure(a, b) { return a + b; }
let c = 10;
function impure(a) { c += a; return c; }
```

---

## 함수의 일급 객체 성질

- 함수는 변수에 할당, 인자로 전달, 반환값으로 사용 가능  
- 콜백, 고차함수 패턴 등 함수형 프로그래밍의 기초

---

## Rest 파라미터와 스프레드 문법

- **Rest 파라미터:**  
  - ...을 사용해 남은 인자를 배열로 수집

  ```js
  function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
  ```

- **스프레드 문법:**  
  - 배열/객체를 펼쳐서 복사, 병합 등 활용

  ```js
  let arr = [1, 2];
  let arr2 = [...arr, 3]; // [1, 2, 3]
  let obj1 = {a:1};
  let obj2 = {...obj1, b:2};
  ```

---

## 배열(Array) 선언, length, 메서드 활용

- 배열은 여러 값을 순서대로 저장  
- length로 길이 확인/수정  
- push, pop, shift, unshift, splice, slice, forEach 등 다양한 내장 메서드 활용  
- for...of로 순회, Array.from 등으로 유사 배열 → 배열 변환

---

## 배열과 객체 구조 분해 할당

- 배열:

  ```js
  let [a, b] = [1, 2]; // a=1, b=2
  ```

- 객체:

  ```js
  let {x, y} = {x: 10, y: 20};
  ```

- 기본값, 생략, 별칭, 중첩 구조 등 다양한 형태로 사용

---

## 변수의 스코프: var, let, const 차이

- **var:** 함수 레벨 스코프, 호이스팅, 재선언/재할당 가능  
- **let:** 블록 레벨 스코프, 재할당 가능, TDZ 존재  
- **const:** 블록 레벨, 재선언/재할당 불가, 선언시 할당 필수(객체/배열 내부 값은 변경 가능)

---

## 객체 생성 방식 비교

- 객체 리터럴, Object 생성자, 생성자 함수, Object.create 등  
- 각 방식의 장단점 비교 및 실전 사용법

---

## 엄격 모드(Strict mode)와 에러

- "use strict"로 엄격하게 문법 체크  
- 선언하지 않은 변수 사용, 읽기전용 프로퍼티 변경 등에서 에러 발생

---

## DOM(Document Object Model) 요소 제어

- getElementById 등으로 HTML 요소 선택, 내용/속성/스타일 조작  
- 웹페이지 동적 제어의 기초 원리

---
