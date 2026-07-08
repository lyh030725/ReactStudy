function funA() {
  console.log("A");
}

let varA = funA;
console.log(varA);
varA();

//1. 함수 표현식 -> 함수를 값으로서 사용. 호이스팅 불가 (<-> 함수 선언식)

let varB = function funB() {
  console.log("B");
};

varB();
// funB();

//익명 함수
let varC = function () {
  console.log("C");
};

varC();

//2. 화살표 함수

let varD = () => {
  console.log("D");
};

varD();

let varE = () => "E";
console.log(varE());

let varF = (value) => value + 1;
console.log(varF(10));
