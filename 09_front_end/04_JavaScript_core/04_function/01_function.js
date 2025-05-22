/* function */

// 함수 선언문
function returnHello(name) {
    return `${name}님, 안녕하세요.`;
};

console.log(returnHello('홍길동'));

// 함수 표현식
var returnHello = function returnHello(name) {
    return `${name}님, 안녕하세요.`;
}
    
// 함수 표현식에서 함수명은 써도 되고, 생략해도 되고 , 같아도 되고, 