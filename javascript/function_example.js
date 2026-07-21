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

/*
==================
!!!!! 雨具+if !!!!!
==================
*/

/*
input
checkWeather("雨天");
checkWeather("晴天");

output
要帶雨具
不用帶雨具
*/

function checkWeather(weather) {
  if (weather === "雨天") {
    console.log("要帶雨具");
    return "要帶雨具";
  } else if (weather === "晴天") {
    console.log("不用帶雨具");
    return "不用帶雨具";
  }
}

let weather1 = checkWeather("雨天");
let weather2 = checkWeather("晴天");

console.log(weather1);
console.log(weather2);

/*
======================
!!!!! 增加陣列資料 !!!!!
======================
*/

/*
let data = [];

input
add("hello");
add("你好嗎？");

output
["hello","你好嗎？"]
*/

let addArr = [];

function add(str) {
  addArr.push(str);
  console.log(addArr);
}

add("hello");
add("你好嗎？");

/*
=========================
!!!!! 增加陣列物件資料 !!!!!
=========================
*/

/*
let data = [];

//input
add("洧杰","男生");
add("葉子","女生");

// output
//[
// {name:"洧杰",gender:"男生"},
// {name:"葉子",gender:"女生"}
//]
*/

let addObjToArr = [];

function addObj(str1, str2) {
  let obj = {};
  obj.name = str1;
  obj.gender = str2;
  addObjToArr.push(obj);
  console.log(addObjToArr);
}

addObj("洧杰", "男生");
addObj("葉子", "女生");

/*
=====================
!!!!! 取物件資料 !!!!!
=====================
*/

/*
const bmiStatesData = {
  overThin: {
    state: "過輕",
    color: "藍色"
  },
  normal: {
    state: "正常",
    color: "紅色"
  }
}
input
checkBmiStates("overThin");
checkBmiStates("normal");

output
你的體重過輕，指數為藍色
你的體重正常，指數為紅色
*/

const bmiStatesData = {
  overThin: {
    state: "過輕",
    color: "藍色",
  },
  normal: {
    state: "正常",
    color: "紅色",
  },
};

function checkBmiStates(status) {
  if (status === "overThin") {
    console.log(
      `你的體重${bmiStatesData.overThin.state}，指數為${bmiStatesData.overThin.color}`,
    );
    return `你的體重${bmiStatesData.overThin.state}，指數為${bmiStatesData.overThin.color}`;
  } else if (status === "normal") {
    console.log(
      `你的體重${bmiStatesData.normal.state}，指數為${bmiStatesData.normal.color}`,
    );
    return `你的體重${bmiStatesData.normal.state}，指數為${bmiStatesData.normal.color}`;
  }
}

let status1 = checkBmiStates("overThin");
let status2 = checkBmiStates("normal");

console.log(status1);
console.log(status2);

// 寫法2
function checkBmiStatus(status) {
  console.log(
    `你的體重${bmiStatesData[status].state}，指數為${bmiStatesData[status].color}`,
  );
  return `你的體重${bmiStatesData[status].state}，指數為${bmiStatesData[status].color}`;
}

let status3 = checkBmiStatus("overThin");
let status4 = checkBmiStatus("normal");

console.log(status3);
console.log(status4);
