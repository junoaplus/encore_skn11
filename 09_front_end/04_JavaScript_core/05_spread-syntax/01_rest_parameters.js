/* 나머지 매개변수 (Rest Parameter) */

function merge(...args) {
    let msg = '';
    
    for(let arg of args) {
        msg += arg;
    }
    
    return msg;
}

console.log(mergeAll('안녕하세요!'));
console.log(mergeAll('안녕하세요!', '반갑습니다~'));
console.log(mergeAll('안녕하세요!', '반갑습니다~', '즐거운 목요일'));


// 나머지 매개변수 항상 마지막에 있어야 한다
// function func(arg1, arg2, ...args, arg3) {

// }