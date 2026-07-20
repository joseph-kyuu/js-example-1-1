/*
===================
!!!!! 字串相加 !!!!!
===================
*/

/*
input
talk("早安");
talk("晚安");

output
"hi，早安"
"hi，晚安"
*/

function talk(hello) {
  console.log(`hi，${hello}`);
  return `hi，${hello}`;
}

let morning = talk("早安");
let goodNight = talk("晚安");

console.log(morning);
console.log(goodNight);

/*
===================
!!!!! 數字處理 !!!!!
===================
*/

/*
let data = 0;

input
count(2);
count(3);
count(5);

output
2
5
10
*/

let addSum = 0;
function count(num) {
  return (addSum += num);
}

let addSum1 = count(2);
let addSum2 = count(3);
let addSum3 = count(5);

console.log(addSum1);
console.log(addSum2);
console.log(addSum3);

/*
===================
!!!!! 數字處理 !!!!!
===================
*/

/*
let data = 0;

input
count(2);
count(3);
count(5);

output
4
9
25
*/

function double(num) {
  console.log(num ** 2);
  return num ** 2;
}

let double1 = double(2);
let double2 = double(3);
let double3 = double(5);

console.log(double1);
console.log(double2);
console.log(double3);

/*
===================
!!!!! 四舍五入 !!!!!
===================
*/

/*
input
twoFixed(1.8888)
twoFixed(3.1234)

output
1.89
3.12
*/

function twoFixed(num) {
  console.log(num.toFixed(2));
  return num.toFixed(2);
}

let fix1 = +twoFixed(1.8888);
let fix2 = +twoFixed(3.1234);

console.log(fix1);
console.log(fix2);
console.log(typeof fix1);
console.log(typeof fix2);

/*
===============
!!!!! BMI !!!!!
===============
*/

/*
input
calcBmi(178,69)

output
21.78

BMI = 體重(公斤) / 身高*身高(公尺**2)

體重過輕：BMI < 18.5
正常範圍：18.5 ≤ BMI < 24
過重：24 ≤ BMI < 27
肥胖：BMI ≥ 27

*/
let bmiNum1;

function calcBmi(height, weight) {
  bmiNum1 = weight / (height / 100) ** 2;
  console.log(bmiNum1);
  bmiNum1 = bmiNum1.toFixed(2);
  console.log(bmiNum1);
  return bmiNum1;
}

let bmiNum2 = +calcBmi(178, 69);
console.log(bmiNum2);
console.log(typeof bmiNum2);
