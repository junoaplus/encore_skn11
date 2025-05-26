/* Object distructuring assignment (객체 구조 분해 할당) */

// 1. 기본 문법
let toy = {
    productName: "티니핑 인형",
    color:"분홍",
    price: 300000
}

let {productName, color, price} = toy;

console.log(`${productName}은 ${color}색이고 ${price}원이다.`);

let {color: co, price: pr, productName: pn} = toy;

console.log(`${pn}은 ${co}색이고 ${pr}원이다.`);


// 2. 활용 : 기본값 설정
let {productName:name, subName:sub="오로라핑", color: col, price:prc} = toy;

console.log(name);
console.log(sub);
console.log(col);
console.log(prc);

// 3. 활용 : 일부 정보 추출
let {productName: name2} = toy;
console.log("일부 추출: ", name2);

// 4. 활용 : rest parameters 조합
let {productName: name3, ...rest} = toy;
console.log(name3);
console.log(rest);

// 5. let 없이 사용한다면?
let name4, color4, price4;

// {productName: name4, color: color4, price: price4} = toy
({productName: name4, color: color4, price: price4} = toy);
console.log(name4, color4, price4);