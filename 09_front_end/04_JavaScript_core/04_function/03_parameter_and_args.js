/* 매개변수와 인자*/

function lunch(menu) {
    console.log(menu);
    console.log(arguments);
    return `오늘 점심은 ${menu}로 정했다!`;
}

console.log(lunch('구식'));
console.log(lunch());
console.log(lunch('간장 불고기', '깻잎 떡볶이', '삼색 계란말이')); // 파라미터보다 많은 인자는 무시 됨

function dance(dancename) {

    // 인자 검증
    // 1. 인자는 1개만 받아야 함
    // 2. 인자의 타입은 문자열이어야 함
    // 3. 빈 문자열이면 안됨
    // throw new TypeError('잘못된 인자로 인한 에러!')
    if (arguments.length > 1 || typeof dancename !== 'string' || dancename === '') {
        throw new TypeError('잘못된 인자로 인한 에러!');
    }
    return `${dancename} 춤추기 시작`;
}


console.log(dance('마카레나'));
console.log(dance(12));
console.log(dance());
