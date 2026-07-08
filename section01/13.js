//1. 콜백 함수 (sub가 콜백 함수)

function main(value) {
  value();
}

function sub() {
  console.log("sub");
}

main(sub);

main(function () {
  console.log("sub");
});

main(() => {
  console.log("sub");
});

//2. 콜백 함수 활용
function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

// function repeatDouble(count) {
//   for (let i = 1; i <= count; i++) {
//     console.log(i * 2);
//   }
// }

repeat(5, (i) => {
  console.log(i);
});

repeat(5, (i) => {
  console.log(i * 2);
});
