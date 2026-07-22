/*
======================================
!!!!! querySelector、textContent !!!!! 
======================================
*/

let el1 = document.querySelector("h1");
console.log(el1);
el1.textContent = "哈囉你好喔";

let el2 = document.querySelector(".pick2");
console.log(el2);

/*
====================================
!!!!! querySelector、innerHTML !!!!! 
====================================
*/

let el3 = document.querySelector("ul");
console.log(el3);
el3.innerHTML = `<li>好久不見</li>`;
console.log(el3);
let myName = "Joseph";

el3.innerHTML = `<li>好久不見</li><li>${myName}</li>`;

let el4 = document.querySelector(".order-list-1");
console.log(el4);
el4.textContent = 123;
// el4.innerHTML = 456;

/*
=======================================
!!!!! setAttribute、classList.add !!!!! 
=======================================
*/
let el5 = document.querySelector(".test1");
console.log(el5);
console.dir(el5);
// el5.setAttribute("class", "red");
el5.classList.add("red");

/*
==============================
!!!!! querySelectorAll() !!!!! 
==============================
*/

let el6 = document.querySelectorAll(".order-list-2 > li");
console.log(el6);
console.dir(el6);

el6[0].setAttribute("class", "text-red");
el6[1].setAttribute("class", "text-orange");
el6[2].setAttribute("class", "text-green");
el6[3].setAttribute("class", "text-blue");

/*
========================
!!!!! getAttribute !!!!! 
========================
*/

console.log(el6[0].getAttribute("class"));
console.log(el6[1].getAttribute("class"));
console.log(el6[2].getAttribute("class"));
console.log(el6[3].getAttribute("class"));

console.log(el6[0].textContent);
console.log(el6[1].textContent);
console.log(el6[2].textContent);
console.log(el6[3].textContent);

console.log(el6[0].innerHTML);
console.log(el6[1].innerHTML);
console.log(el6[2].innerHTML);
console.log(el6[3].innerHTML);

/*
===================
!!!!! 表單欄位 !!!!! 
===================
*/

let input1 = document.querySelector(".input1");
let select1 = document.querySelector(".select1");
console.log(input1);
console.log(select1);
console.log(input1.value);
