//
function countArea(a, b) {
  let i = a * b;
  return i;
}
let k = countArea(15, 17);
console.log(k);
//
function countArea(a, b) {
  let i = a * b;
  return i;
}
function countPerimetr(a, b) {
  let m = (a + b) * 2;
  return m;
}

function sumOneAndTwo() {
  let one = 1;
  let two = 2;
  let sum = one + two;
  return sum;
}
let result = sumOneAndTwo();
console.log(result);
function one() {
  return 1;
}
function two() {
  return 2;
}
let g = one + two;
console.log(g);
//
function string() {}
//1
function printNumbers() {
  for (let i = 3; i <= 13; i++) {
    console.log(i);
  }
}
//2
function printNumberTen() {
  for (let i = 0; i < 10; i++) {
    console.log(10);
  }
}
//3
function printLargerNumber(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  } else {
    console.log("Числа рівні.");
  }
}
