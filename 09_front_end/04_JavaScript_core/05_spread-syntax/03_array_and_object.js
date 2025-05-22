/* 스프레드 문법을 이용한 배열/ 객체 복사*/

let arr = [2025, 5, 22];
let arrCopy1 = arr;         // 얕은 복사
let arrCopy2 = [...arr];    // 깊은 복사

arrCopy1.push(500);
console.log(arr, arrCopy1);


arrCopy2.push(500);
console.log(arr, arrCopy2);

// 객체 복사 
let obj = {
    name: '손흥민', 
    job: '축구선수'};
let objCopy1 = obj;
let objCopy2 = {...obj};

console.log(objCopy2);
console.log(obj == objCopy1);
console.log(obj == objCopy2);