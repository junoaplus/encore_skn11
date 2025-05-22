/* 화살표 함수의 특징 */

// 1. 화살표 함수는 this를 가지지 않는다
let theater = {
    store: "광화문점",
    titles: ["미션 임파서블", "주차금지", "걸어도 걸어도", "플립"],
    showMovieList() {
        this.titles.forEach(
            // titles => console.log(`${this.store} ${titles}`)
            function(titles) {
                console.log(`${this.store} ${title}`);
            }
        );
    }
}
// 2. 화살표 함수는 new와 함께 호출할 수 없다
// 3. 화살표 함수는 super를 가지지 않는다
// 4. 화살표 함수는 arguments를 가지지 않는다
(function() {
    const arrowFunc = () => console.log(arguments);
    // const arrowFunc = function() {
    //     console.log(arguments);
    // }
    arrowFunc(3, 4)
}(1, 2));
