// const button = document.querySelector(".check");
// const input = document.querySelector(".input");
// const output = document.querySelector(".output");

// button.addEventListener("click", function () {
//   const sumOfAllDigits = [...input.value]
//     .filter((ele) => ele >= 0 && ele <= 9)
//     .reduce((a, b) => +a + +b);
//   output.innerHTML = sumOfAllDigits;
// });

const button = document.querySelector(".check");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const output = document.querySelector(".output");

button.addEventListener("click", function () {
  const string = input1.value.toLowerCase();
  const char = input2.value.toLowerCase();
  const charNumOnString = [...string].filter((ele) => ele === char).length;

  output.innerHTML = charNumOnString;
});
