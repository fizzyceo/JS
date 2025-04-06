//Add two numbers
function add(a, b) {
  return a + b;
}

// example input: 3
// output: true/false
function isEven(number) {
  // return number % 2 == 0
  let res = false;
  if (number % 2 == 0) {
    res = true;
  }
  return res;
}
let result = isEven(10);
console.log(result);

//input: 3 => 3 || -3 => 3
// + un message saying if   was negative or positive
function absolute(num) {}

function concatenateStrings(str1, str2) {}

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("RiGell"));
