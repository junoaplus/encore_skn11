/* 엄격 모드  (strict mode) */

function test() {
    x = 10;
}

// console.log(x);

test();

console.log(x);

(function() {
    'use strict';
    // 함수 내용
})();