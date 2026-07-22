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

/*
=============================
!!!!! 6.console.log 的值 !!!!!
=============================
*/
let o = 200;
let p = 300;

console.log(o == 200 || p == 300);
console.log(o !== 200 || p !== 300);
console.log(o == 200 && p == 300);
// true
// false
// true

// 以下為觀察是否有達折扣條件
let hamPrice = 50;
let hamNum = 20;
let isSale = 3000 <= hamPrice * hamNum || hamNum > 10;

console.log(isSale);
// 並說明原因為什麼
// true
// ham 數量有大於 10

/*
======================
!!!!! 7.if 的判斷 !!!!!
======================
*/

// 任務一：當 weight 在 40 以上，小於 60 時，console.log 顯示過輕
// 任務二：當 weight 在 60 以上，小於 80 時，console.log 顯示正常
// 任務三：當 weight 在 80 以上時，console.log 顯示過重

let weight = 40;
if (weight >= 80) {
  console.log("過重");
} else if (weight >= 60) {
  console.log("正常");
} else if (weight >= 40) {
  console.log("過輕");
}

/*
=============================
!!!!! 8.情境：百貨公司贈品 !!!!!
=============================
*/

// 百貨公司有 200 個贈品，只要有達以下條件之一，就送客戶一個贈品
// 1. 消費滿 399 元
// 2. 是百貨公司的 VIP 會員

// Bob 今天來消費了 500 元，但並非 VIP 會員
// 請問 Bob 是否有獲得贈品，以及贈品剩下多少？請完成以下修改處程式碼

let giftNum = 200; /* 贈品數量 */
let giftPriceRule = 399; /* 贈品消費門檻 */
let BobPrice = 500; /* Bob 消費金額 */
let BobIsVip = false; /* Bob 是否為Vip */

if (BobIsVip || BobPrice >= giftPriceRule) {
  giftNum--;
  console.log("客戶您好，您有符合贈品資格");
} else {
  console.log("客戶您好，您沒有符合贈品資格");
}

console.log(`贈品還剩下${giftNum}個`);

/*
===================================
!!!!! 9.貪心國的個人所得稅收非常重 !!!!!
===================================
*/

// 會計官想寫一個程式，來去計算民眾的稅收，以下為條件值
// 條件一：不管有無工作，基本費先收 5,000 元
// 條件二：全年所得在 54 萬以下者，收 30% 稅收
// 條件三：全年所得超過 54 萬~100 萬以下者，收 50% 稅收
// 條件四：全年所得超過 100 萬者，收 80% 稅收

// 例如小華的全年所得為 10 萬，100,000*0.3+5,000，總計要支付 35,000 元稅收。
// 請透過 if、else if、else 方式，來去計算小明該繳多少稅收

let mingMoney = 870000; /* 小明全年個人所得 */
let mingBill = 5000; /* 小明稅收帳單，並已加入條件一基本費 5,000 元 */

if (mingMoney >= 1000000) {
  mingBill += mingMoney * 0.8;
} else if (mingMoney >= 540000) {
  mingBill += mingMoney * 0.5;
} else if (mingMoney > 0) {
  mingBill += mingMoney * 0.3;
}

console.log(`小明總共需支付${mingBill}帳單`);

/*
=============================
!!!!! 10.斷剪刀石頭布的輸贏 !!!!!
=============================
*/

// 宣告兩個變數，一個是 playerA 另一個是 playerB
// 請透過 if, if 包 if, else if, else 等方法思考每個玩家出拳的情境
// 以下為其中一個情境範例

let playerA = "剪刀";
let playerB = "剪刀";

if (playerA === playerB) {
  console.log("平手");
} else {
  if (playerA === "剪刀" && playerB === "布") {
    console.log("A贏");
  } else if (playerA === "剪刀" && playerB === "石頭") {
    console.log("B贏");
  } else if (playerA === "石頭" && playerB === "布") {
    console.log("B贏");
  } else if (playerA === "石頭" && playerB === "剪刀") {
    console.log("A贏");
  } else if (playerA === "布" && playerB === "石頭") {
    console.log("A贏");
  } else if (playerA === "布" && playerB === "剪刀") {
    console.log("B贏");
  }
}
