/*
=============================
!!!!! splice()，修改原陣列!!!!!
=============================
*/

/*
=======
刪除一個
=======
*/
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = arr1.splice(0, 1);
console.log(arr1); // 原本的陣列會被修改。
console.log(arr2); // 回傳被刪除的元素，所組成的陣列。

/*
=======
刪除三個
=======
*/
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr4 = arr3.splice(3, 5);
console.log(arr3); // 原本的陣列會被修改。
console.log(arr4); // 回傳被刪除的元素，所組成的陣列。

/*
=======================
刪除元素，並起始位置加入元素
=======================
*/

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr6 = arr5.splice(3, 5, 11, 12, 13);
console.log(arr5); // 原本的陣列會被修改。
console.log(arr6); // 回傳被刪除的元素，所組成的陣列。

let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr8 = arr7.splice(5, 5, "加", "入", "文", "字");
console.log(arr7); // 原本的陣列會被修改。
console.log(arr8); // 回傳被刪除的元素，所組成的陣列。

/*
===========================
不刪除元素，但在起始位置加入元素
===========================
*/
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr10 = arr9.splice(5, 0, "加", "入", "文", "字");
console.log(arr9); // 原本的陣列會被修改。
console.log(arr10); // 回傳被刪除的元素，所組成的陣列。

/*
=======
負數索引
=======
*/

/*
!!!!! 刪除一個 !!!!!
*/
let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr12 = arr11.splice(-1, 1);
console.log(arr11); // 原本的陣列會被修改。
console.log(arr12); // 回傳被刪除的元素，所組成的陣列。

/*
!!!!! 刪除兩個 !!!!!
*/
let arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr14 = arr13.splice(-2, 2);
console.log(arr13); // 原本的陣列會被修改。
console.log(arr14); // 回傳被刪除的元素，所組成的陣列。

/*
!!!!! 刪除兩個 !!!!!
*/
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr16 = arr15.splice(-2, 0, 11, 12, 13);
console.log(arr15); // 原本的陣列會被修改。
console.log(arr16); // 回傳被刪除的元素，所組成的陣列。

/*
!!!!! 不刪除元素，但新增元素 !!!!!
*/
let arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr18 = arr17.splice(-2, 0, 11, 12, 13);
console.log(arr17); // 原本的陣列會被修改。
console.log(arr18); // 回傳被刪除的元素，所組成的陣列。

/*
!!!!! 刪除元素，並新增元素 !!!!!
*/
let arr19 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr20 = arr19.splice(-2, 1, 11, 12, 13);
console.log(arr19); // 原本的陣列會被修改。
console.log(arr20); // 回傳被刪除的元素，所組成的陣列。

/*
=======================================
!!!!! slice()，擷取一段，不修改原陣列 !!!!!
=======================================
*/

/*
=======
複製一個
=======
*/

let arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr22 = arr21.slice(0, 1);
console.log(arr21); // 原本的陣列不會被修改。
console.log(arr22); // 回傳被複製的元素，所組成的陣列，不包含最後一個位置的元素。

/*
=======
複製三個
=======
*/

let arr23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr24 = arr23.slice(2, 5);
console.log(arr23); // 原本的陣列不會被修改。
console.log(arr24); // 回傳被複製的元素，所組成的陣列，不包含最後一個位置的元素。

/*
=======
負數索引
=======
*/
let arr25 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr26 = arr25.slice(-4);
console.log(arr25); // 原本的陣列不會被修改。
console.log(arr26); // 回傳被複製的元素，所組成的陣列，不包含最後一個位置的元素。

let arr27 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr28 = arr27.slice(-4, -1);
console.log(arr27); // 原本的陣列不會被修改。
console.log(arr28); // 回傳被複製的元素，所組成的陣列，不包含最後一個位置的元素。

/*
===================================
!!!!! concat()，組合陣列或其他值 !!!!!
===================================
*/

let arr29 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr30 = arr29.concat("A", false, [11, "新文字", true]);
console.log(arr30);

/*
==================================
!!!!! indexOf()，尋找陣中的元素 !!!!!
==================================
*/

let arr31 = [1, [2, 3], false, "A", { test: 1 }];

let index1 = arr31.indexOf(1);
console.log(index1); // 回傳元素所在的索引值
let index2 = arr31.indexOf("A");
console.log(index2); // 回傳元素所在的索引值
let index3 = arr31.indexOf(false);
console.log(index3); // 回傳元素所在的索引值
let index4 = arr31.indexOf([2, 3]);
console.log(index4); // 找不到元素回傳 -1

/*
=============================================
找物件時，是比是不是同一個物件，不是比物件內容是否相同
=============================================
*/

let obj1 = { test: 1 };
let arr33 = [2, 3]; // 將物件儲存在變數中
let arr32 = [1, arr33, false, "A", obj1]; // 將物件儲存在變數中
let index5 = arr32.indexOf(obj1);
console.log(index5); // 回傳元素所在的索引值
let index6 = arr32.indexOf(arr33);
console.log(index6); // 回傳元素所在的索引值

/*
===========================
指定尋找的起始位置，正負值都可以
===========================
*/

let obj2 = { test: 1 };
let arr34 = [2, 3]; // 將物件儲存在變數中
let arr35 = [1, arr34, false, "A", obj2]; // 將物件儲存在變數中
let index7 = arr35.indexOf(1, 1);
let index8 = arr35.indexOf(false, 1);
let index9 = arr35.indexOf(false, -3);
console.log(index7); // 回傳元素所在的索引值
console.log(index8); // 回傳元素所在的索引值
console.log(index9); // 回傳元素所在的索引值

/*
==================================
!!!!! includes()，尋找陣中的元素 !!!!!
==================================
*/
let obj3 = { test: 1 };
let arr36 = [2, 3]; // 將物件儲存在變數中
let arr37 = [1, arr36, false, "A", obj3]; // 將物件儲存在變數中
let boolean1 = arr37.includes("A");
let boolean2 = arr37.includes(obj3, 1);
let boolean3 = arr37.includes(1, 1);
let boolean4 = arr37.includes(false, 1);
let boolean5 = arr37.includes(false, -3);
console.log(boolean1); // 回傳元素所在的索引值
console.log(boolean2); // 回傳元素所在的索引值
console.log(boolean3); // 回傳元素所在的索引值
console.log(boolean4); // 回傳元素所在的索引值
console.log(boolean5); // 回傳元素所在的索引值

/*
======================================
!!!!! lastIndexOf()，尋找陣中的元素 !!!!!
======================================
*/

let obj4 = { test: 1 };
let arr38 = [2, 3]; // 將物件儲存在變數中
let arr39 = [1, arr38, false, "A", obj4]; // 將物件儲存在變數中
let index10 = arr39.lastIndexOf(1, 1);
let index11 = arr39.lastIndexOf(false, 1);
let index12 = arr39.lastIndexOf(false, -3);
console.log(index10); // 回傳元素所在的索引值
console.log(index11); // 回傳元素所在的索引值
console.log(index12); // 回傳元素所在的索引值

/*
=============================================
!!!!! find(fn)，尋找陣中符合條件的第一個元素 !!!!!
=============================================
*/

/*
===========
基礎語法結構

let result = arr.find(function (item) {
  return 條件;
});

===========
*/

let arr40 = [
  {
    name: "Mike",
    height: 175,
    weight: 65,
    married: true,
  },
  {
    name: "Mary",
    height: 165,
    weight: 45,
    married: false,
  },
  {
    name: "Tina",
    height: 156,
    weight: 40,
    married: true,
  },
];

let result1 = arr40.find(function (item) {
  return item.height >= 165;
});

let result2 = arr40.find(function (item) {
  return item.married === false;
});

console.log(result1);
console.log(result2);

/*
================================================
!!!!! findIndex(fn)，尋找陣中符合條件的物件元素 !!!!!
================================================
*/

let arr41 = [
  {
    name: "Mike",
    height: 175,
    weight: 65,
    married: true,
  },
  {
    name: "Mary",
    height: 165,
    weight: 45,
    married: false,
  },
  {
    name: "Tina",
    height: 156,
    weight: 40,
    married: true,
  },
];

let result3 = arr41.findIndex(function (item) {
  return item.weight < 45;
});

let result4 = arr41.findIndex(function (item) {
  return item.married === true;
});

console.log("我是result3");
console.log(result3);
console.log("我是result4");
console.log(result4);

/*
====================================================
!!!!! findLastIndex(fn)，尋找陣中符合條件的物件元素 !!!!!
====================================================
*/

let arr42 = [
  {
    name: "Mike",
    height: 175,
    weight: 65,
    married: true,
  },
  {
    name: "Mary",
    height: 165,
    weight: 45,
    married: false,
  },
  {
    name: "Tina",
    height: 156,
    weight: 40,
    married: true,
  },
];

let result5 = arr42.findLastIndex(function (item) {
  return item.weight < 45;
});

let result6 = arr42.findLastIndex(function (item) {
  return item.married === true;
});

console.log(result5);
console.log(result6);

/*
===========================================
!!!!! filter(fn)，尋找陣中符合條件的全部元素 !!!!!
===========================================
*/

/*
===========

基礎語法結構

let result = arr.filter(function (item) {
  return 條件;
});

===========
*/

let arr43 = [
  {
    name: "Mike",
    height: 175,
    weight: 65,
    married: true,
  },
  {
    name: "Mary",
    height: 165,
    weight: 45,
    married: false,
  },
  {
    name: "Tina",
    height: 156,
    weight: 40,
    married: true,
  },
];

let result7 = arr43.filter(function (item) {
  return item.married === true;
});

let result8 = arr43.filter(function (item) {
  return item.weight <= 45;
});

console.log(result7);
console.log(result8);

/*
===========================================
!!!!! map(fn)，尋找陣中符合條件的全部元素 !!!!!
===========================================
*/

/*
===========

基礎語法結構

let result = arr.map(function (item) {
  return 條件;
});

===========
*/

let arr44 = [
  {
    name: "Mike",
    height: 175,
    weight: 65,
    married: true,
  },
  {
    name: "Mary",
    height: 165,
    weight: 45,
    married: false,
  },
  {
    name: "Tina",
    height: 156,
    weight: 40,
    married: true,
  },
];

let result9 = arr44.map(function (item) {
  return item.height;
});

let result10 = arr44.map(function (item) {
  return item.weight;
});

console.log(result9);
console.log(result10);
console.log(arr44);

/*
===========================================
!!!!! sort(fn)，尋找陣中符合條件的全部元素 !!!!!
===========================================
*/

/*
===========

基礎語法結構

let result = arr.sort(function (item) {
  return a-b、b-a; ( 稱為比較函式 )
});


sort 判斷規則
return < 0，就 a 排在 b 前面。
return > 0，就 b 排在 a 前面。
return === 0，就a 和 b 的排序優先級相同。

a-b 小到大
b-a 大到小

===========
*/

/*
!!!!! a-b 小到大 !!!!!
*/

let arr45 = [1, 0, -4, 100, 1673, 20497, 11, -9823];

arr45.sort(function (a, b) {
  return a - b;
});

console.log(arr45);

/*
!!!!! b-a 大到小 !!!!!
*/

let arr46 = [1, 0, -4, 100, 1673, 20497, 11, -9823];

arr46.sort(function (a, b) {
  return b - a;
});

console.log(arr46);

/*
====================================
!!!!! reverse()，反轉所有元素順序 !!!!!
====================================
*/

let arr47 = [1, 2, 3, 4, 5, 6];

let arr48 = arr47.reverse();

console.log(arr47);
console.log(arr48);

/*
===================================================
!!!!! split(符號)，依照指定的分隔符號，將字串切割成陣列 !!!!!
===================================================
*/

/*
===========
split() 的符號是「切割依據」，不是「替換符號」。
===========
*/

let string1 = "one,two,three";
let arr49 = string1.split(",");
console.log(arr49);

let string2 = "one,two,three,four,five,six";
let arr50 = string1.split(",", 3);
console.log(arr50);

let string3 = "joseph";
let arr51 = string3.split("");
console.log(arr51);

/*
===================================================
!!!!! join(符號)，依照指定的分隔符號，將陣列中的元素組合成字串 !!!!!
===================================================
*/

/*
===========
關鍵在於 join() 會把元素轉成字串來組合，但 undefined 和 null 在 join() 中會變成空字串。

"one"      → "one"
"two"      → "two"
3          → "3"
4          → "4"
true       → "true"
undefined  → ""
null       → ""
===========
*/

let string4 = "one,two,three";
let arr52 = string4.split(",");
console.log(arr52);
let string5 = arr52.join("-");
console.log(string5);

let arr53 = ["one", "two", 3, 4, true, undefined, null];
let string6 = arr53.join("@");
console.log(string6);

/*
===================================================
!!!!! reduce()，根據陣列計算出單一結果值 !!!!!
===================================================
*/

/*
===========
let result = reduce(fn(accumulator,item,index,arr){},init)
accumulator 是目前累積的結果。第一次迴圈時，會等於 init。
===========
*/

let arr54 = [
  { price: 100, quantity: 2 },
  { price: 50, quantity: 3 },
  { price: 30, quantity: 1 },
];

let total = arr54.reduce(function (sum, item) {
  return sum + item.price * item.quantity;
}, 0);
console.log(total);

/*
===================================================
!!!!! Array.isArray(value)，確認值是否為陣列 !!!!!
===================================================
*/

console.log(Array.isArray(arr52));
console.log(Array.isArray(arr53));
console.log(Array.isArray(arr54));
console.log(Array.isArray(123));
console.log(Array.isArray("123"));
