// 함수선언
function greeting() {
  console.log("안녕하세요!");
}

//함수호출
greeting();

let area1 = getArea(10, 20);
console.log(area1);

//함수
//호이스팅 (끌어올리다) -> 함수 정의 아래 있어도 호출 가능
function getArea(width, height) {
  function another() {
    //중첩 함수
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}
