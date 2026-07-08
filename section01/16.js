//1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

//객체 자체를 수정 불가
// animal = {};
//프로퍼티 추가, 수정, 삭제는 가능
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

//2. 매서드
//-> 값이 함수인 프로퍼티

const person = {
  name: "이용하",
  //매서드
  sayHi: function () {
    console.log("Hi1");
  },

  sayHi2: () => {
    console.log("Hi2");
  },

  //메서드 선언
  sayHi3() {
    console.log("Hi3");
  },
};

person.sayHi();
person.sayHi2();
person.sayHi3();
