/*계산된 프로퍼티 이름*/

var prefix = 'Board';
var index = 1;

var boardobj = {};

boardobj[prefix + '-' + index] = 'Board 1';
boardobj[prefix + '-' + index] = 'Board 2';
boardobj[prefix + '-' + index] = 'Board 3';

console.log(boardobj);

/* ES6 */
var boardobj2 = {
    [`${prefix}-${index}`]: 'Board 4',
    [`${prefix}-${index}`]: 'Board 5',
    [`${prefix}-${index}`]: 'Board 6'
};

console.log(boardobj2);