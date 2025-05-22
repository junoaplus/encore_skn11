/* var */

//1. 변수 중복 선언 허용
var msg = "열심히 공부해 봅시다!";
console.log(msg);

var msg = '곧 최종 프로젝트니까요!';
console.log(msg);

var msg;
console.log(msg);
//2. 함수 레벨 스코프
var i = 0;
for(var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
//3. 변수 호이스팅
console.log(test);
test = "테스트 출력"
var test;