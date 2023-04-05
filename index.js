const button = document.querySelector(".check");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

button.addEventListener("click", function () {
  const sumOfAllDigits = [...input.value]
    .filter((ele) => ele >= 0 && ele <= 9)
    .reduce((a, b) => +a + +b);
  output.innerHTML = sumOfAllDigits;
});
