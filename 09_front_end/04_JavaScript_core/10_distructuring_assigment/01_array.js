/* Array distructuring assignment(배열 구조 분해 할당) */

// 1. 기본 문법
let nameArr = ['Rabbit', 'Yi'];

// let firstName = nameArr[0];
// let lastName = nameArr[1];

let [firstName, lastName] = nameArr;

console.log(`저는 ${lastName}가 ${firstName}입니다.`);

let [firstName2, lastName2] = "삼성 라이온즈".split(' ');

console.log(`저는 ${lastName2}가 ${firstName2}입니다.`);

lunchArr = ['더블비프치즈버거', '감자튀김', '치즈스틱', '코카콜라'];
let [buger, frenchFry, cheeseStick, drink] = lunchArr;
console.log(buger + "랑 " + drink + "만 먹으면 부족할거야. 나는 " + frenchFry + "와 " + cheeseStick + "을 추가로 먹을게");

// 2. 활용: 객체 프로퍼티 할당
let user = {};
[user.firstName, user.lastName] = 'juno hwang'.split(" ");
console.log(user);

// 3. 활용: Object.entries()와 조합
console.log(Object.entries(user));

// for (let [key, value] of Object.entries(user)) {
//     console.log(key, value);
// }
for (let item of Object.entries(user)) {
    console.log(item);
}

// 4. 활용: 변수 교환 
let cup1 = "오렌지주스";
let cup2 = "코카콜라";

[cup1, cup2] = [cup2, cup1];
console.log(cup1, cup2);


// 5. 활용: rest parameters와 조합
let [king, queen, jack, ace, ...cards] = ["KING", "QUEEN", "JACK", "ACE", 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(king, queen, jack, ace, cards);

// 6. 활용: 기본값 설정가능
let userArr = ['준호', 200, "서울시 금천구"]

let [name, height, address, job="1조원 자산가", skill="LLM" ] = userArr;

console.log(name, height, address, job, skill);
