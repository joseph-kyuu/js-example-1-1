/*
=======================================
!!!!! document.getElementById(id) !!!!!
=======================================
*/

let el1 = document.getElementById("el1");
console.log(el1);

el1.textContent = "我是 el1";

/*
=======================================
!!!!! document.getElementById(id) !!!!!
=======================================
*/

let list1 = document.querySelectorAll("#el2 li");

console.log(list1);

/*
=======================================
!!!!! document.querySelector() !!!!!
=======================================
*/

let el3 = document.querySelector(".el3");
console.log(el3);

el3.textContent = "我是 el3";

/*
=====================================
!!!!! elem.matches(cssSelector) !!!!!
=====================================
*/

let el4 = document.querySelector(".el5");
console.log(el4);
console.log(el4.matches("#el4"));

/*
=====================================
!!!!! elem.closest(cssSelector) !!!!!
=====================================
*/

let paretn1 = el3.closest("#el2");
let paretn2 = el3.closest(".el6");
let paretn3 = el3.closest(".nothing");
console.log(paretn1);
console.log(paretn2);
console.log(paretn3);

/*
=============================================
!!!!! document.getElementsByClassName() !!!!!
=============================================

===========================================
!!!!! document.getElementsByTagName() !!!!!
===========================================
*/

let el7 = document.getElementsByClassName("el7");
console.log(el7);
let list2 = el7[0].getElementsByTagName("li");
console.log(list2);

/*
============================================
!!!!! document.getElementsByName(name) !!!!!
============================================
*/

let list3 = document.getElementsByName("username");
console.log(list3);
let list4 = document.getElementsByName("email");
console.log(list4);
