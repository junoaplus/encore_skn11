var kitty = {
    name: '고양이',
};
console.log(kitty);

// 동적 프로퍼티 추가 
kitty['like'] = '츄르'
kitty.age = 3;
console.log('added kitty:', kitty); 

//프로티 수정
kitty['age'] = 4
kitty.name = '무관 탈출 손흥민';
console.log('changed kitty:', kitty); 


// 프로퍼티 삭제
delete kitty.age;
delete kitty['like'];
console.log('deleted kitty:', kitty);

// 프로퍼티 존재 유무
var kitty2 = {
    name: '손흥민',
    age: 3,
    like: undefined
};

console.log(kitty2.name === undefined);
console.log(kitty2.age === undefined);
console.log(kitty2.like === undefined);
console.log(kitty2.zipsa === undefined);

console.log('name' in kitty2);
console.log('age' in kitty2);
console.log('like' in kitty2);
console.log('zipsa' in kitty2);

// for-in 을 이용한 객체 프로퍼티 순회
for (var key in kitty2) {
    console.log(`key: ${key}`);
    console.log(`kitty2[key]: ${kitty2[key]}`)
}

// JS 일반적인 반복문
for (var i =1; i < 10; i++) {
    console.log(i);
}