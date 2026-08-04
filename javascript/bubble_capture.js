/*
====================
!!!!! example1 !!!!!
====================
*/
const example1 = document.querySelector(".example-1");
example1.addEventListener("click", function () {
  console.log("我是外層");
});

/*
====================
!!!!! example2 !!!!!
====================
*/
const example2 = document.querySelector(".example-2");
const p2 = document.querySelector(".p-2");
const em1 = document.querySelector(".em-1");
example2.addEventListener("click", function () {
  console.log("我是第一層");
});
p2.addEventListener("click", function () {
  console.log("我是第二層");
});
em1.addEventListener("click", function () {
  console.log("我是第三層");
});

/*
====================
!!!!! example3 !!!!!
====================
*/
const example3 = document.querySelector(".example-3");
const p3 = document.querySelector(".p-3");
const em2 = document.querySelector(".em-2");
example3.addEventListener("click", function (e) {
  console.log("我是第一層");
  console.log(`我是e物件`);
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.type);
});

/*
====================
!!!!! example4 !!!!!
====================
*/
const example4 = document.querySelector(".example-4");
const p4 = document.querySelector(".p-4");
const em3 = document.querySelector(".em-3");
// example4.addEventListener("click", function (e) {
//   console.log("我是第一層");
//   console.log(`我是e物件`);
//   console.log(e);
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(e.type);
// });
// em3.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("我是第三層");
//   console.log(`我是e物件`);
//   console.log(e);
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(e.type);
// });

/*
====================
!!!!! example5 !!!!!
====================
*/
example4.addEventListener("click", function (e) {
  console.log("我是第一層");
  console.log(`我是e物件`);
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.type);
});
em3.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("我是第三層的第一個事件處理器");
  console.log(`我是e物件`);
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.type);
});
em3.addEventListener("click", function (e) {
  // e.stopImmediatePropagation();
  // e.stopPropagation();
  console.log("我是第三層的第二個事件處理器");
});
em3.addEventListener("click", function (e) {
  console.log("我是第三層的第三個事件處理器");
});

/*
====================
!!!!! example6 !!!!!
====================
*/
const example5 = document.querySelector(".example-5");
const p5 = document.querySelector(".p-5");
const em4 = document.querySelector(".em-4");

example5.addEventListener("click", function (e) {
  console.log("我是第一層，我在補獲階段觸發。", true);
  console.log(`我是e物件`);
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.type);
});

example5.addEventListener("click", function (e) {
  console.log("我是第一層，我在發泡階段觸發。");
  console.log(`我是e物件`);
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.type);
});
