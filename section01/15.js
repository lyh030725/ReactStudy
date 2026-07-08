//1. 객체 생성

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

//2. 객체 프로퍼티 (객체 속성)
let person = {
  // key : value
  name: "이용하",
  age: 27,
  hobby: "게임",
  extra: {},
  extraFunc: () => {},
  10: 20,
  "like cat": true,
};

//3. 객체 프로퍼티를 다루는 방법
//3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)

let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
console.log(person[property]);

//3.2 프로퍼티 추가
person.job = "AI Engineer";
person["favoritefood"] = "떡볶이";

console.log(person);

//3.3 프로퍼티 수정
person.job = "Reseacher";
person["favoritefood"] = "사탕";

console.log(person);

//3.4 프로퍼티 삭제
delete person.job;
delete person["favoritefood"];

console.log(person);

//3.5 in 연산자(프로퍼티 존재 유무 파악)
console.log("name" in person);
console.log("job" in person);
