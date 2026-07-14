/*
========================
!!!!! 四種宣告與賦值 !!!!!
========================
*/

/*
宣告 → console.log
console.log → 宣告
console.log → 宣告 → 初始化(賦值) → console.log
console.log → 宣告並初始化(宣告並賦值) → console.log
*/

/*
===============
!!!!! var !!!!!
===============
*/

// ===== 宣告 → console.log =====
var a;
console.log(`這是屬於 a 的值${a}`);

// ===== console.log → 宣告 =====
console.log(`這是屬於 b 的值${b}`);
var b;

// ===== console.log → 宣告 → 賦值 → console.log =====
console.log(`這是屬於 c 的第一個值${c}`);
var c;
c = 1;
console.log(`這是屬於 c 的第二個值${c}`);

// ===== console.log → 宣告並賦值 → console.log =====
console.log(`這是屬於 d 的第一個${d}`);
var d = 1;
console.log(`這是屬於 d 的第二個值${d}`);

/*
===============
!!!!! let !!!!!
===============
*/

// ===== 宣告 → console.log =====
let e;
console.log(`這是屬於 e 的值${e}`);

// ===== console.log → 宣告 =====
// console.log(f);
// let f;
/*
ReferenceError: Cannot access 'f' before initialization
*/

// ===== console.log → 宣告 → 初始化 → console.log =====
// console.log(g);
/*
ReferenceError: Cannot access 'g' before initialization
*/
let g;
g = 1;
console.log(`這是屬於 g 的值${g}`);

// ===== console.log → 宣告並初始化 → console.log =====
// console.log(`這是屬於 h 的第一個${h}`);
/*
ReferenceError: Cannot access 'g' before initialization
*/
let h = 1;
console.log(`這是屬於 h 的第二個值${h}`);

/*
=================
!!!!! const !!!!!
=================
*/

// ===== 宣告 → console.log =====
// const i;
/*
Uncaught SyntaxError: Missing initializer in const declaration 
*/
// console.log(`這是屬於 i 的第二個值${i}`);

/*
學習疑問

不是應該在 const i; 之前的都會正常運作嗎？為何全部都直接壞掉不運作？

*/

// ===== 宣告並初始化 → console.log =====
const j = 1;
console.log(`這是屬於 j 的值${j}`);
