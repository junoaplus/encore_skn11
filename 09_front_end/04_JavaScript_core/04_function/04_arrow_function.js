/* arrow function */

let message;

message = function() {
    return 'hello';
};

console.log(message());

message = () => {
    return 'hello';
};

console.log(message());

message = () => 'hello';
console.log(message());

message = (str1, str2) => str1 + 'Hello' + str2;
console.log(message('[Arrow Function]', 'world'));

message = str2 => 'Hello' + str2;
console.log(message('world'));

const createUser = (id, name) => {id, name};
console.log(createUser(1, 'Hong'));

// 화살표 함수는 코드 수행 내용이 한 줄인 함수에 유용하며,
// 고차 함수의 인자 (콜백 함수)로 많이 활용 된다.
console.log(
    [1, 2, 3, 4, 5].map(function(val) {return val * 10})
);

console.log(
    [1, 2, 3, 4, 5].map(val => val * 10)
);