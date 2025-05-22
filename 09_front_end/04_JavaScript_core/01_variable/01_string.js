// string
// 홑따옴표'', 쌍따옴표"" 사용가능
var str1 = "사자"
var str2 = "lion"
var str3 = "삼성 사자";

// 문자열 합치기(다은 자료형 간에서는 암묵적 형변환 일어남)
console.log(str1 + (1 + 2));

// 백틱에서는 ${}를 이용한 변수 사용가능
var str = `${str1} SKN 11기!`;
console.log(str);