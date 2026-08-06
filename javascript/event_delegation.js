/*
=====================
!!!!! 事件委派 1 !!!!!
=====================
*/

const list1 = document.querySelector(".list1");

let clickLi;
let clickLiText;

list1.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    if (clickLi) {
      clickLi.textContent = clickLiText;
    }

    clickLiText = e.target.textContent;
    clickLi = e.target;

    e.target.textContent = "我被點擊了";
  }
});

/*
=====================
!!!!! 事件委派 2 !!!!!
=====================
*/
const list2 = document.querySelector(".list2");

let clickLi2;
let clickLiText2;

list2.addEventListener("click", function (e) {
  if (e.target.closest("li")) {
    if (clickLi2) {
      clickLi2.textContent = clickLiText2;
    }
    clickLiText2 = e.target.textContent;
    clickLi2 = e.target;
    console.log(clickLiText2, clickLi2);
  } else {
    return;
  }

  if (e.target.closest("li").tagName === "LI") {
    e.target.textContent = "我被點擊了";
  }
});

/*
===================
!!!!! 多個按鈕 !!!!!
===================
*/

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function (e) {
  if (!e.target.closest("button")) {
    console.log("關閉");
    return;
  }

  if (e.target.textContent === "Save") {
    save();
  }

  if (e.target.textContent === "Load") {
    Load();
  }

  if (e.target.textContent === "Search") {
    Search();
  }
});

function save() {
  console.log("點擊了 save 按鈕");
}

function Load() {
  console.log("點擊了 load 按鈕");
}

function Search() {
  console.log("點擊了 search 按鈕");
}

/*
====================
!!!!! 顯示、關閉 !!!!!
====================
*/
const button3 = document.querySelector(".button3");
button3.addEventListener("click", function (e) {
  if (!e.target.dataset.toggleId) {
    console.log("關閉");
    return;
  }
  let dataSet = e.target.dataset.toggleId;
  const div = document.querySelector(`#${dataSet}`);
  div.hidden = !div.hidden;
});

/*
=============================
!!!!! 多個按鈕的顯示、關閉 !!!!!
=============================
*/
const openCloseButtons = document.querySelector(".open-close-buttons");
console.log(openCloseButtons);
openCloseButtons.addEventListener("click", function (e) {
  if (!e.target.dataset.toggleId) {
    console.log("關閉");
    return;
  }
  console.log(123);
  let targetId = e.target.dataset.toggleId;
  const elem = document.querySelector(`#${targetId}`);
  elem.hidden = !elem.hidden;
});
