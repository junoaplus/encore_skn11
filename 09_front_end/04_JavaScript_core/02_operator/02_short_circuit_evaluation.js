/* 단축 평가*/
/* v표현식을 평가하는 도중 평가 결과가 확정된 걍우 나머지 평가 과정을 생략하는 것 */

/*
논리 연산자
and &&
or ||
not !

1 -> t
'abc' -> t
'' -> f
f*/

//OR
console.log('apple' || 'banana');
console.log(false || 'banana');
console.log('apple' || false);

//AND
console.log('apple' && 'banana');
console.log(false && 'banana');
console.log('apple' && false);

var num = 101;

if (num %2 == 0){
    console.log('num은 짝수입니다.');
} else {
    console.log('num은 홀수입니다.');
}

num % 2 == 0 && console.log('num은 짝수입니다.');
num % 2 == 0 || console.log('num은 홀수입니다.');


// 객체로 기대되는 변수가 null 또는 undefined가 아닌지 확인하고 
// 프로퍼티를 참조할 떄 단축 평가를 유용하게 활용할 수 있음
var obj = null;
var val = obj && obj.value;
console.log(val);
