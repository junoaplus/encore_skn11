/* 배열 */

// 1. 배열 리터럴을 통해 생성
const arr = ['토끼', '다람쥐', '고릴라'];

// 2.배열 생성자 함수
const arr2 = new Array();       // 빈 배열
console.log(arr2);

const arr3 = new Array(10);     // 10칸짜리 빈 배열 (length 프로퍼티 지정)
console.log(arr3);

const arr4 = new Array('hello');    // 인자를 요소로 가지는 배열
const arr5 = new Array(1, 2);       // 인자를 요솔 가지는 배열
console.log(arr4);
console.log(arr5);

// 3. Array.of() 메소드
console.log(Array.of(10));                              // 인자를 요소로 가지는 배열
console.log(Array.of(1, 2, 3));                         // 인자를 요소로 가지는 배열
console.log(Array.of('hello', 'JS', 'JavaScript'));     // 인자를 요소로 가지는 배열

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log(typeof arr);

/*
    <프로퍼티 플래그>
    객체 프로퍼티는 값(value)과 함께 플래그(flag)라는 특별한 속성 세 가지를 가진다.
    writable : true이면 값 수정 가능, 그렇지 않다면 읽기만 가능
    enumerable : true이면 반복문 사용해 나열 가능, 그렇지 않다면 반복문 사용 불가
    configurable : true이면 프로퍼티 삭제 및 플래그 수정 가능, 그렇지 않다면 불가
*/

console.log(Object.getOwnPropertyDescriptors(arr));
