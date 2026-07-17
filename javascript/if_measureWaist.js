/*
==========================
!!!!! if 測量溫度 !!!!!
==========================
*/

/* 
● 測驗者溫度若高於 37.5，就顯示不得進入。
*/

let temprature = 38;

if (temprature > 37.5) {
  console.log("不得進入");
}

/*
==========================
!!!!! if...else 測量溫度 !!!!!
==========================
*/

/* 
● 測驗者溫度若高於 37.5，就顯示不得進入。
● 測驗者溫度若低於 37.5(含)，就顯示請進入。
*/

let tempratureMeasure = 37.5;

if (tempratureMeasure > 37.5) {
  console.log("不得進入");
} else {
  console.log("請進入");
}

/*
==========================
!!!!! if...else 計算成績 !!!!!
==========================
*/

/* 
● 小明成績若高於 60(含)，就顯示小明成績及格。
● 小明成績若低於 60，就顯示小明成績不及格。
*/

let mingScore = 59;

if (mingScore >= 60) {
  console.log("小明的成績及格");
} else {
  console.log("小明的成績不及格");
}

/*
=======================================
!!!!! if...else if 計算成績 !!!!!
=======================================
*/

/* 
● 小明成績若高於 80(含)，就顯示優秀。
● 小明成績若高於 60-79，就顯示普通。
● 小明成績若低於 低於59(含)，就顯示不及格。
*/

let maryScore = 59;

if (maryScore >= 80) {
  console.log("優秀");
} else if (maryScore >= 60) {
  console.log("普通");
} else if (maryScore <= 59) {
  console.log("不及格");
}

/*
=======================================
!!!!! if...else if...else 計算成績 !!!!!
=======================================
*/

/* 
● 小明成績若高於 80(含)，就顯示優秀。
● 小明成績若高於 60-79，就顯示普通。
● 小明成績若低於 低於59(含)，就顯示不及格。
● 輸入錯誤，就顯示無法判定。
*/

let mikeScore = "成績尚未出來";

if (mikeScore >= 80) {
  console.log("優秀");
} else if (mikeScore >= 60) {
  console.log("普通");
} else if (mikeScore <= 59) {
  console.log("不及格");
} else {
  console.log("無法判定");
}

/*
==========================
!!!!! 巢狀 if 測量腰圍 !!!!!
==========================
*/

/* 
● 測驗者性別是男生還是女生。
● 如果是男生，腰圍超過(含)100，顯示這位男生體型過胖，低於100顯示這位男生體型正常。
● 如果是女生，腰圍超過(含)80，顯示這位女生體型過胖，低於80顯示這位女生體型正常。
*/

let gender = "man";
let waist = 85;

if (gender === "man") {
  if (waist >= 90) {
    console.log("這位男生體型過胖");
  } else {
    console.log("這位男生體型正常");
  }
} else {
  if (waist >= 80) {
    console.log("這位女生體型過胖");
  } else {
    console.log("這位女生體型正常");
  }
}

/*
==========================
!!!!! 巢狀 if 測量腰圍 !!!!!
==========================
*/

/* 
● 國、英、數成績分數。
● 若考試成績總分超過(含)240，顯示去遊樂園。
● 若考試成績總分低於240，顯示不去遊樂園。
*/

let chineseScore = 80;
let englishScore = 90;
let mathScore = 0;
let passScore = 240;
let totalScore = chineseScore + englishScore + mathScore;
console.log(`考試成績總分為 ${totalScore}`);

if (totalScore >= passScore) {
  console.log("去遊樂園");
} else if (totalScore < 240) {
  console.log("不去遊樂園");
}

/*
==========================
!!!!! 巢狀 if 測量腰圍 !!!!!
==========================
*/

/* 
● 小美的心情分數。
● 若心情分數超過(含)8，顯示去唱歌。
● 若心情分數超過(含)5，顯示去血拼。
● 若心情分數低於5，顯示什麼都不做。
*/

let meiMoodScore = -1;
if (meiMoodScore >= 8) {
  console.log("去唱歌");
} else if (meiMoodScore >= 5) {
  console.log("去血拼");
} else if (meiMoodScore < 5) {
  console.log("什麼都不做");
}
