/*
====================================
!!!!! 1.console.log 會顯示什麼值 !!!!!
====================================
*/

let a = 4;
let b = 5;
console.log(a > 0);
console.log(b > a);
console.log(a + b > 1);
// true、true、true

let c = 5;
let d = 6;
console.log(c == d);
console.log(c !== d);
// false、true

let e = 8;
let f = 5;
console.log(f >= e);
console.log(f != e);
console.log(f == e);
// false、true、false

/*
====================================
!!!!! 2.console.log 會顯示什麼值 !!!!!
====================================
*/

let g = 8;
let h = "8";
console.log(g * h == 88);
console.log(g * h == 64);
console.log(g * h === 64);
// false、true、true

let i = "9";
let j = "9";
console.log(i + j == 99);
console.log(i + j === "99");
console.log(i + j === 99);
// true、true、false

var k = 2;
var l = "5";
// 請文字解釋為什麼
console.log(k * l >= 5);
//  true

/*
==========================
!!!!! 3.最後 m、n 的值 !!!!!
==========================
*/

let m = 1;

if (2 > 1) {
  m = 3;
}
console.log(m);
// 3

let n = 5;

if (true) {
  n += 10;
}

console.log(n);
// 15

/*
=====================
!!!!! 4.計算金額 !!!!!
=====================
*/

// 媽媽帶小明去火鍋吃到飽吃飯
// 他們看了金額，成人 600 元、小孩 300 元
// 未滿 120(含) 公分就免費
// 於是我小明寫了些程式碼，但就做不下去了一起幫小明補程式碼，計算最後他們要付多少錢

let childHeight = 133;
let restaurantChildHeight = 120;
let childPrice = 300;
let bill = 600;

if (childHeight >= restaurantChildHeight) {
  bill += childPrice;
}

console.log(`他們總共支付了${bill}元`);

/*
======================
!!!!! 5.好寶寶徽章 !!!!!
======================
*/

// 小華目前有三個好寶寶徽章
// 父親請他跑腿買五個蘋果，
// 並和他說，如果買的數量一樣，就再給他三個徽章
// 如果買錯的話，就只給一個徽章
// 但最後他買錯了，只買了四個蘋果
// 請用 if、else 語法，來幫小華看看他得了多少徽章

let badge = 3;
let mustBuy = 5;
let onlyBuy = 4;

if (onlyBuy === mustBuy) {
  badge += 3;
} else {
  badge += 1;
}

console.log(`小華一共得了 ${badge} 個徽章`);
