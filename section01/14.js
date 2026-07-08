//스코프
//-> 전역 스코프 (전체 영역)
//-> 지역 스코프 (특정 영역)

let a = 10; //전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
  function funcB() {
    // 지역 스코프
  }
}

funcA();
// console.log(b);

if (true) {
  let c = 2; // 지역 스코프
}

for (let i = 0; i < 10; i++) {
  let d = 2; // 지역 스코프
}
