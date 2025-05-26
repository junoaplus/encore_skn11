/* strict mode 활용 */

// 1. 암묵적 전역
(function(){
    'use strict';
    var x = 1;
    console.log(x);
})();

// 2. 변수, 함수, 매개변수의 삭제
(function(){
    // 'use strict';
    var x = 1;
    delete x;
})();

// 3. 매개변수 이름 중복
(function(){
    function test(x, x) {
        return x + x;
    }

    console.log(test(1, 2));
})();

// 4. with문 사용
(function(){
    with({x: 1}) {
        console.log(x);
    }
})();

// 5. 일반 함수에서의 this 사용 제한
// stric mode에서 일반 함수로서 호출한 함수는 this는 undefined에 반인딩된다.
(function(){
    function test() {
        console.log(this);
    }
    test();
    new test();
})();

// 6. arguments 객체
(function(arg) {
    
    arg = 1;

    console.log(arg);
    console.log(arguments);
})(100);