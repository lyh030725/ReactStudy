//1. if 조건문
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else {
  console.log("num은 10 미만입니다.");
}

//2. SWitch 조건문
let animal = "cat";

switch (animal) {
  case "cat":
    console.log("고양이");
    break;
  case "dog":
    console.log("개");
    break;
  case "bear":
    console.log("곰");
    break;
  case "tiger":
    console.log("호랑이");
    break;
  default:
    console.log("그런 동물은 모릅니다");
}
