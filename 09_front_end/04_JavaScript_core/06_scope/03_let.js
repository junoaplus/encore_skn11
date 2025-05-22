/*let*/

// 1. 변수 중복 선언 금지
let msg = "열심히 공부를 시작해 볼까요~"
msg = '이건 됩니다?!';
// 2. 블략 레벨 스코프
let i = 0;
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// 3. 변수 호이스팅
// let 키워드로 선언한 변수는 벼수 호이스팅이 발생하지 않은 것처럼 동작한다
// 선언은 되었지만 초기화가 되지 않아 참조 시 오류가 발생하는 것이다.
console.log(test);
let test = "테스트 출력"