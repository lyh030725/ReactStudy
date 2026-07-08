//1. 묵시적 형변환 -> 자바스크립트 엔진이 알아서 형변환

let num = 10;
let str = "20";

const result = num + str;

//1020 -> Number를 String으로 변환
console.log(num + str);

//2. 명시적 형변환 -> 프로그래머가 내장 함수를 이용해서 형변환

let strToNum = Number(str);
//30
console.log(num + strToNum);

let str1 = "10개";
console.log(parseInt(str1));

let num1 = 20;
let num1ToStr = String(num1);
console.log(num1ToStr);
