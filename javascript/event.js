let elBtn = document.querySelector(".btn");
let elP1 = document.querySelector(".p1");

elBtn.addEventListener("click", function (e) {
  console.log(e);
  console.dir(e);
});

elP1.addEventListener("click", function (e) {
  elP1.textContent = "這是新的文字內容";
});

/*
===================
!!!!! 加減法器 !!!!!
===================
*/

let elAddBtn = document.querySelector(".add-btn");
let elMinusBtn = document.querySelector(".minus-btn");
let elP2 = document.querySelector(".p2");
let countNum = 0;
console.log(elAddBtn);
console.log(elMinusBtn);
console.log(elP2);
console.log(elP2.textContent);

elAddBtn.addEventListener("click", function () {
  // console.log(elP2.textContent);
  elP2.textContent = ++countNum;
  console.log(elP2.textContent);
  console.dir(elP2);
});

elMinusBtn.addEventListener("click", function () {
  // console.log(elP2.textContent);
  elP2.textContent = --countNum;
  console.log(elP2.textContent);
  console.dir(elP2);
});

/*
======================================
!!!!! e.target、nodeName、事件委派 !!!!!
======================================
*/

let elList1 = document.querySelector(".list-1");
console.log(elList1.nodeName);
elList1.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.target.nodeName);
  // console.dir(e.target);
  console.dir(e);
  if (e.target.nodeName === "P") {
    console.log("點擊到了段落");
  }
});

/*
===============================
!!!!! 取消 HTML 標籤默認行為 !!!!!
===============================
*/

let elA1 = document.querySelector(".a-1");
console.dir(elA1);
elA1.addEventListener("click", function (e) {
  e.preventDefault();
  console.dir(e);
  console.dir(e.target);
  console.log(e.target === elA1);
  elA1.textContent = "已阻止跳轉 ！！！";
});
