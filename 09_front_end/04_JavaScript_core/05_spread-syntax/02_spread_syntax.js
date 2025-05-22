/* 스프레드 문법 (전개 문법/ spread syntax) */

console.log(Math.max(10, 20, 30));

let arr = [10, 20, 30];
console.log(Math.max(arr));
console.log(Math.max(...arr));

// 배열 객체 여러 개로 사용 가능
let arr1 = [1, 2, 3];
let arr2 = [-10, -20, -30];
console.log(Math.min(...arr1, ...arr2));

// 일반 값과 혼합해서 사용 가능
console.log(Math.min(...arr1, 100, 200));

// 배열 병합에도 사용 가능
let mergedArr = [...arr1, ...arr2];
let concatArr = arr1.concat(arr2);
console.log(mergedArr);
console.log(concatArr);

let str = 'JavaScript';
console.log(Array.from(str));
console.log([...str]);
