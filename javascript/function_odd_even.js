let count = 0;

// function countNum() {
//   return count++;
// }

function even(num) {
  // countNum();
  count++;
  if (num % 2 === 0) {
    return "偶數";
  } else {
    return "基數";
  }
}

function odd(num) {
  if (num % 2 === 1) {
    return "基數";
  } else {
    return "偶數";
  }
}

let num1 = even(8);
console.log(num1);
let num2 = even(7);
console.log(num2);

let num3 = odd(10);
console.log(num3);
let num4 = odd(11);
console.log(num4);

console.log(count);
