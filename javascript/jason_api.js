/*
================================
!!!!! JSON.stringify 序列化 !!!!!
================================
*/

// 序列化前修改資料

// 物件
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,

  address: {
    city: "Taipei",
    district: "Xinyi",
    zipCode: 110,
  },

  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
};

console.log(`我是student：${student}`);

/*
===================================================
!!!!! 參數 value，帶入要轉換成 JSON 字串的原始資料 !!!!!
===================================================
*/

// JS 物件序列化為 JSON 字串
let json1 = JSON.stringify(student);

console.log(typeof json1); // string
console.log(console.log(`我是json1：${json1}`)); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null,"address":{"city":"Taipei","district":"Xinyi","zipCode":110}}

/*
=================================================
!!!!! 參數 replacer，使用陣列，選擇要轉換哪些屬性 !!!!!
=================================================
*/

let json2 = JSON.stringify(student, ["courses", "address", "city", "district"]);

console.log(`我是json2：${json2}`);

/*
=================================================
!!!!! 參數 replacer，使用函式，逐一檢查 key、value !!!!!
=================================================
*/

// 保留、移除
let json3 = JSON.stringify(student, function (key, value) {
  // 保留資料。使用 key 來判斷。
  if (key === "address") {
    return undefined;
  }

  // 移除資料
  return value;
});

console.log(`我是json3：${json3}`);

// 修改。使用 key 來判斷。
let json4 = JSON.stringify(student, function (key, value) {
  // 保留資料
  if (key === "address") {
    return "修改了原本的值";
  }

  // 移除資料
  return value;
});

console.log(`我是json4：${json4}`);

// 字串轉大寫。使用 value 來判斷。
let json5 = JSON.stringify(
  student,
  function (key, value) {
    // 保留資料
    if (typeof value === "string") {
      return value.toUpperCase();
    }

    // 移除資料
    return value;
  },
  2,
);

console.log(`我是json5：${json5}`);

/*
=================================================
!!!!! 參數 space，讓每層都縮排 !!!!!
=================================================
*/

// 參數space，增加縮排格式
let json6 = JSON.stringify(student, null, 2);

console.log(`我是json6：${json6}`);

/*
===================
!!!!! 循環參照 !!!!!
===================
*/

/*

"{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}"

*/

// 循環

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };

// meetup.place = room; // meetup references room room 參照（指向） meetup
// room.occupiedBy = meetup; // room references meetup meetup 參照（指向） room

// JSON.stringify(meetup); // Error: Converting circular structure to JSON
// // 錯誤：將循環結構轉換為 JSON 時發生錯誤

/*
=============================
!!!!! JSON.parse 反序列化!!!!!
=============================
*/
// 解析後恢復資料

/*
======================
!!!!! 基本反序列化 !!!!!
======================
*/

let json7 = JSON.stringify(student);

console.log(`我是json7：${json7}`);

let json8 = JSON.parse(json7);

console.log(`我是json8：${json8}`);

/*
===================
!!!!! 還原函式 !!!!!
===================
*/

let startTime = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meeting1 = JSON.parse(startTime);
console.log(`我是 JS 物件：${meeting1}`);
console.log(meeting1);

let meeting2 = JSON.parse(startTime, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});
console.log(`我是 JS 物件：${meeting2}`);
console.log(meeting2);
console.log(meeting2.date.getDate());
