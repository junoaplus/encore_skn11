/* method */
// JS의 함수는 개채이다. (=값으로 취급할 수 있다)

var puppy = {
    name: '초코',
    eat: function(food){
        console.log(`${this.name}가 ${food}를 먹었습니다.`);
    }
};

puppy.eat('먹다 남은 치킨 뼈다귀');

/*메소드 단축*/
var puppy2 = {
    name: "뽀삐",
    eat(food){
        console.log(`${this.name}가 ${food}를 먹었습니다.`);
    }
}