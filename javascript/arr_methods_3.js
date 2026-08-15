const people = [
  {
    name: "卡斯伯",
    order: "鍋燒意麵",
    price: 80,
  },
  {
    name: "小明",
    order: "牛肉麵",
    price: 120,
  },
  {
    name: "漂亮阿姨",
    order: "滷味切盤",
    price: 40,
  },
  {
    name: "Ray",
    order: "大麻醬乾麵",
    price: 60,
  },
];

/*
===========
!!!!! 取出所有值（要一一列出每個人的訂單）!!!!!
===========
*/
people.forEach(function (item, index) {
  console.log("使用 forEach", item);
});

/*
===========
!!!!! 請將所有訂單新增一個新價格，金額是 80% !!!!!
===========
*/

let newOrders = people.map(function (item) {
  let newObj = {
    ...item,
    newPrice: item.price * 0.8,
  };
  return newObj;
});

console.log("使用 map", newOrders);

/*
===========
!!!!! 老闆說，今天疫情沒有八折啦，不過 80 元的可以給滷蛋 !!!!!
===========
*/

let addEggOrders = people.filter(function (item) {
  return item.price >= 80;
});
console.log("使用 filter", addEggOrders);

/*
===========
!!!!! 過一段時間後，老闆發現牛肉沒了，把點牛肉麵的換成牛肉湯麵 !!!!!
===========
*/
let changeBeafSoup = people.findIndex(function (item) {
  return item.order === "牛肉麵";
});
console.log("使用findIndex", changeBeafSoup);
people[1].order = "牛肉湯麵";
console.log("修改後的", people);

/*
===========
!!!!! 老闆說 POS 機壞了，麻煩幫忙出一下 LI 結構，方便列印發票 !!!!!
===========
*/

let HtmlStr = people.map(function (item) {
  return `<li>品項為${item.order},價格為${item.price}元</li>`;
});
console.log("使用 map", HtmlStr);
let newHtmlStr = HtmlStr.join("");
console.log("使用 join", newHtmlStr);
const list = document.querySelector(".list");
list.innerHTML = newHtmlStr;

/*
===========
!!!!! 老闆要收錢了，請問老闆應該收多少錢 !!!!!
===========
*/
let total = people.reduce(function (sum, item) {
  return (sum += item.price);
}, 0);

console.log("使用 reduce", total);

/*
===========
!!!!! 今天誰吃最貴！請排序所有的金額!!!!!
===========
*/

/*
===========
類似語法 toSorted
===========
*/

let max1 = people.sort(function (a, b) {
  return b.price - a.price;
});
console.log("使用 sort", max1);
console.log(max1[0]);

/*
===========
!!!!! 今天誰吃最貴！請排序所有的金額!!!!!
===========
*/
