//1. 대입 연산자
let var1 = 1;

//2. 산술 연산자
let var2 = 3 + 2;
let var3 = 3 - 2;
let var4 = 3 * 2;
let var5 = 3 / 2;
let var6 = 3 % 2;

//3. 복합 대입 연산자(산술 + 대입)
let var7 = 10;
var7 += 20;
var7 -= 20;
var7 *= 20;
var7 /= 20;
var7 %= 20;

//4. 증감 연산자
let var8 = 10;
var8++;
++var8;

//5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);

//6. 비교 연산자
//=== : 자료형도 같은지, == : 값만 같은지
let comp1 = 1 === 2;
let comp2 = 1 == 2;
let comp3 = 1 !== 2;
let comp4 = 1 != 2;
let comp5 = 1 > 2;
let comp6 = 1 >= 2;
