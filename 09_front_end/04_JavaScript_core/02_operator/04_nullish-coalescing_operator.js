/* null 병합 연산자 */

/* 
    ?? 
    - ES11에서 도입된 연산자 
    - 좌항의 피 연산자가 null 또는 undefined인 경우 우항의 피연자 변환
    - 그렇지 않으면 촤하으이 피연산자 반환 (변수 기본값 설정에 유용)
*/

var test = null ?? 'default';
console.log(test);

var value = '' || 'default';
console.log(value);

var value = '' ?? 'default';
console.log("value:" + value);