/*
=================================
!!!!! 建立 Date 物件，不帶參數 !!!!!
=================================
*/

//
let now = new Date();
console.log(`現在的時間為 ${now}`);
// 建立一個代表現在的日期與時間物件。
// Thu Jul 16 2026 13:59:32 GMT+0800 (台北標準時間)

/*
=======================================
!!!!! 建立 Date 物件，帶入毫秒作為參數 !!!!!
=======================================
*/

// new Date(milliseconds) ，其時間為自 1970 年 1 月 1 日 UTC+0 起經過的毫秒數
// 毫秒，就是 1 秒 = 1000 毫秒。
// 從 1970 年起算的毫秒整數，被稱為時間戳記（timestamp）。

// 建立 Date 物件，帶入參數 0 毫秒
let Jan01_1970 = new Date(0);
console.log(`1970/01/01 的當天為 ${Jan01_1970}`);
// Thu Jan 01 1970 08:00:00 GMT+0800 (台北標準時間)

// 建立 Date 物件，帶入參數 一天的 毫秒
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(`1970/01/01 的後一天為 ${Jan02_1970}`);
// Fri Jan 02 1970 08:00:00 GMT+0800 (台北標準時間)

// 1970 年 1 月 1 日之前的日期會是負的時間戳
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(`1970/01/01 的前一天為 ${Dec31_1969}`);
// Wed Dec 31 1969 08:00:00 GMT+0800 (台北標準時間)

// Date 物件轉成時間戳記
const nowTimestamp = now.getTime();
console.log(`現在的時間戳記為 ${nowTimestamp}`);
console.log(new Date().getTime());

// 給一段時間字串
let Jan01_2026 = new Date("2026-01-01");
console.log(Jan01_2026);
// 先解析成 2026-01-01 00:00:00 UTC
// 依據台灣是 UTC+8，所以當它顯示成本地時間
// Thu Jan 01 2026 08:00:00 GMT+0800 (台北標準時間)

/*
================================================
!!!!! 建立 Date 物件，帶入詳細日期、時間作為參數 !!!!!
================================================
*/
// 年、月必填。
// 月份從 0 開始（1 月），到 11（12 月）。
// date 參數其實是月份中的第幾天，如果沒填預設為 1。
// 沒有提供時／分／秒／毫秒，預設都會是 0。
let Feb01_2026 = new Date(2026, 1, 1, 0, 0, 0, 0);
console.log(Feb01_2026);
let feb01_2026 = new Date(2026, 1, 1);
console.log(feb01_2026);
let Mar01_2026 = new Date(2026, 2, 1, 2, 3, 4, 567);
console.log(Mar01_2026);

/*
================================================
!!!!! 從 Date 物件的取得日期、時間的 API !!!!!
================================================
*/

/*
========================
取得 Date 物件的本地時區的年
========================
*/

let nowFullYear = now.getFullYear();
console.log(`現在本地時區的年份為 ${nowFullYear}`);
// 現在本地時區的年份為

/*
========================
取得 Date 物件的UTC時區的年
========================
*/
let nowUTCFullYear = now.getUTCFullYear();
console.log(`現在UTC時區的年份為 ${nowUTCFullYear}`);

/*
========================
取得 Date 物件的本地時區的月
========================
*/

let nowMonth = now.getMonth();
console.log(`現在本地時區的月份為 ${nowMonth}`);
// 現在本地時區的月份為

/*
========================
取得 Date 物件的UTC時區的月
========================
*/

let nowUTCMonth = now.getUTCMonth();
console.log(`現在UTC時區的月份為 ${nowUTCMonth}`);
// 現在UTC時區的月份為

/*
==========================
取得 Date 物件的本地時區的日期
==========================
*/

let nowDate = now.getDate();
console.log(`現在本地時區的日期為 ${nowDate}`);
// 現在本地時區的日期為

/*
=========================
取得 Date 物件的UTC時區的日期
=========================
*/
let nowUTCDate = now.getUTCDate();
console.log(`現在UTC時區的日期為 ${nowUTCDate}`);
// 現在UTC時區的日期為

/*
==========================
取得 Date 物件的本地時區的星期
==========================
*/

let nowDay = now.getDay();
console.log(`現在本地時區的星期為 ${nowDay}`);
// 現在本地時區的星期為

/*
=========================
取得 Date 物件的UTC時區的星期
=========================
*/
let nowUTCDay = now.getUTCDay();
console.log(`現在UTC時區的星期為 ${nowUTCDay}`);
// 現在UTC時區的星期為

/*
==========================
取得 Date 物件的本地時區的小時
==========================
*/

let nowHours = now.getHours();
console.log(`現在本地時區的小時為 ${nowHours}`);
// 現在本地時區的小時為

/*
=========================
取得 Date 物件的UTC時區的小時
=========================
*/

// 取得 Date 物件UTC時區的小時
let nowUTCHours = now.getUTCHours();
console.log(`現在UTC時區的小時為 ${nowUTCHours}`);
// 現在UTC時區的小時為

/*
==========================
取得 Date 物件的本地時區的分鐘
==========================
*/

let nowMinutes = now.getMinutes();
console.log(`現在本地時區的分鐘為 ${nowMinutes}`);
// 現在本地時區的分鐘為

/*
=========================
取得 Date 物件的UTC時區的分鐘
=========================
*/
let nowUTCMinutes = now.getUTCMinutes();
console.log(`現在UTC時區的分鐘為 ${nowUTCMinutes}`);
// 現在UTC時區的分鐘為

/*
==========================
取得 Date 物件的本地時區的秒數
==========================
*/

let nowSeconds = now.getSeconds();
console.log(`現在本地時區的秒數為 ${nowSeconds}`);
// 現在本地時區的秒數為

/*
=========================
取得 Date 物件的UTC時區的秒
=========================
*/
let nowUTCSeconds = now.getUTCSeconds();
console.log(`現在UTC時區的秒數為 ${nowUTCSeconds}`);
// 現在UTC時區的秒數為

/*
==========================
取得 Date 物件的本地時區的毫秒
==========================
*/

let nowMilliseconds = now.getMilliseconds();
console.log(`現在本地時區的毫秒為 ${nowMilliseconds}`);
// 現在本地時區的毫秒為

/*
=========================
取得 Date 物件的UTC時區的毫秒
=========================
*/

let nowUTCMilliseconds = now.getUTCMilliseconds();
console.log(`現在UTC時區的毫秒為 ${nowUTCMilliseconds}`);
// 現在UTC時區的毫秒為

/*
======================================
取得 Date 物件的從 UTC 起點到現在經過的毫秒
======================================
*/

// 從1970 年 1 月 1 日 UTC+0 到現在的時間搓 ( 毫秒數 )
let nowTimestampFromUTC = now.getTime();
console.log(`現在的毫秒為 ${nowTimestampFromUTC}`);
// 經過的毫秒為

/*
========================================
 取得 Date 物件的從 UTC 起點到現在經過的分鐘差
========================================
*/

let nowMinutesFromUTC = now.getTimezoneOffset();
console.log(`現在的分鐘為 ${nowMinutesFromUTC}`);
// 經過的分鐘差為

/*
================================================
!!!!! 修改 Date 物件的日期、時間的 API !!!!!
================================================
*/

let now2 = new Date();

/*
==================================
setFullYear(year, [month], [date])
==================================
*/

/*
========================
修改 Date 物件的本地時區的年
========================
*/

let now2SetFullYear = now2.setFullYear(2027);
console.log(`修改後的本地時區的年份為 ${now2SetFullYear}`);
console.log(`修改後的本地時區的現在年份為 ${now2}`);
// 修改後的本地時區的年份為

/*
========================
修改 Date 物件的UTC時區的年
========================
*/
let now2SetUTCFullYear = now2.setUTCFullYear(2027);
console.log(`修改後的UTC時區的年份為 ${now2SetUTCFullYear}`);
console.log(`修改後的UTC時區的現在年份為 ${now2}`);
// 修改後的UTC時區的年份為

/*
=====================
setMonth(month, date)
=====================
*/

/*
========================
修改 Date 物件的本地時區的月
========================
*/

let now2SetMonth = now2.setMonth(0);
console.log(`修改後的本地時區的年份為 ${now2SetMonth}`);
console.log(`修改後的本地時區的現在年份為 ${now2}`);
// 修改後的本地時區的年份為

/*
========================
修改 Date 物件的UTC時區的月
========================
*/
let now2SetUTCMonth = now2.setUTCMonth(0);
console.log(`修改後的UTC時區的年份為 ${now2SetUTCMonth}`);
console.log(`修改後的UTC時區的現在年份為 ${now2}`);
// 修改後的UTC時區的年份為

// 其他更多set
