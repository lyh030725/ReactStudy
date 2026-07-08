//1. null 병합 연산자 -> 존재하는 값을 추려내는 기능, null/undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var2 ?? var1;
let var6 = var2 ?? var3;

console.log(var4, var5, var6);

//2. typeof 연산자 -> 값의 타입을 문자열로 반환하는 연산자

let var7 = "hello";
console.log(typeof var7);
console.log(typeof Number(var7));
console.log(typeof Boolean(var7));

//3. 삼항 연산자

let var8 = 10;

let var9 = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(var9);
