/*  Nested distructuring(중첩 구조 분해) */

let lunchSet = {
    bugger: {
        main: '소고기',
        sub: "치즈",
        vegetable: "양상추"
    },
    side: ['감자튀김', '코울슬로'],
    price: 180000
};

let {bugger:{main, sub, vegetable}, side:[side1, side2], price} = lunchSet;

// console.log(bugger);
// console.log(side);
// console.log(price);

console.log(`bugger: ${main}, ${sub}, ${vegetable}`);
console.log(`side: ${side1}, ${side2}`);
console.log(price + '원');

/* function parameters (함수 파라미터) */
// JS 파아미터는 키워드 인자가 없다
// 따라서 인수의 순서가 고정된며, 기본값을 설정하더라도 인수의 순서가 변경되면 기본값이 적용되지 않는다.
function displayProduct(producer, width, height, items) {
    console.log('========================');
    console.log(`producer: ${producer}`);
    console.log(`width: ${width}`);
    console.log(`height: ${height}`);
    console.log(`items: ${items}`);
    console.log('========================');
}

displayProduct('삼성', 100, 200, ['당근', '오이', '토마토'])


// 구조 분해 할당을 이용하면 파이썬의 키워드 인자처럼 사용할 수 있다.
// 순서도 무관하고 기본 값을 활용할 때에도 별도의 처리가 필요없다.
function displayProductObject({producer, width, height, items}) {
    console.log('========================');
    console.log(`producer: ${producer}`);
    console.log(`width: ${width}`);
    console.log(`height: ${height}`);
    console.log(`items: ${items}`);
    console.log('========================');
}

let examples = { 
    producer: '삼성',
    // width: 100,
    // height: 200,
    items: ['당근', '오이', '토마토']
};

displayProductObject(examples);