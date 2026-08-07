/*
========================
!!!!! 瀏覽器預設行為 !!!!!
========================
*/

const menu2 = document.querySelector(".menu2");

menu2.onclick = function (event) {
  if (event.target.nodeName != "A") return;

  let href = event.target.getAttribute("href");
  alert(href); // ...can be loading from the server, UI generation etc
};

/*
==================================
!!!!! 客製化行為、瀏覽器預設行為 !!!!!
==================================
*/

const menu3 = document.querySelector(".menu3");

menu3.onclick = function (event) {
  if (event.target.nodeName != "A") return;

  let href = event.target.getAttribute("href");
  alert(href); // ...can be loading from the server, UI generation etc

  return false; // prevent browser action (don't go to the URL)
};

/*
===================
!!!!! passive !!!!!
===================
*/

// let box = document.querySelector("#box");

// box.addEventListener("touchmove", function (event) {
//   console.log("moving");
// });

// box.addEventListener(
//   "touchmove",
//   function (event) {
//     // 很多計算
//     for (let i = 0; i < 100000; i++) {
//       console.log(i);
//     }
//     event.preventDefault();
//   },
//   {
//     passive: true,
//   },
// );

/*
===========================================
!!!!! 阻止瀏覽器預設行為、 預設行為已被阻止 !!!!!
===========================================
*/

const menu4 = document.querySelector(".menu4");
const outer = document.querySelector(".outer");
const innerLink = document.querySelector(".inner-link");

menu4.addEventListener("click", function (e) {
  console.log(789);
});

outer.addEventListener("click", function (e) {
  console.log("阻止執行");
  if (event.defaultPrevented) {
    return;
  }
  console.log(456);
});

innerLink.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(123);
});
