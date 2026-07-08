// 1. Number Type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 - num2);
console.log(num1 + num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 * num2);

let inf = Infinity;
let minf = -Infinity;

let nan = NaN;

console.log(1 * "hello");

// 2. String Type

let myName = "이용하";
let myLocation = "수원";

let profile = myName + myLocation;

console.log(profile);

//템플릿 리터럴 문법
let profile_text = `${myName}은 ${myLocation}에 거주합니다`;

console.log(profile_text);

// 3. Boolean Type
let isTrue = true;
let isFlase = false;

// 4. Null Type (아무것도 없다[명시적])
let isNull = null;

// 5. Undefined Type (초기화하지 않음)
let none;
console.log(none);
