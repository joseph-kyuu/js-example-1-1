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
!!!!! if 遊戲分數 !!!!!
==========================
*/

/* 
● 若遊戲分數高於(含)70，就顯示通過。
*/

let gameScore = 80;
let passGameScore = 70;

if (gameScore >= passGameScore) {
  console.log("通過遊戲");
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
===========================
!!!!! if...else 飽足感 !!!!!
===========================
*/

/* 
● 飽足感若介於6(包含) 到8(包含) 之間，就顯示不吃飯。
● 飽足感若低於 6，就顯示吃飯。
*/

let full = 7;
if (full >= 6 && full <= 8) {
  console.log("不吃飯");
} else if (full < 6) {
  console.log("吃飯");
}

/*
=======================================
!!!!! if...else if 計算成績 !!!!!
=======================================
*/

/* 
● 瑪麗成績若高於 80(含)，就顯示優秀。
● 瑪麗成績若高於 60-79，就顯示普通。
● 瑪麗成績若低於 低於59(含)，就顯示不及格。
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
● 麥克成績若高於 80(含)，就顯示優秀。
● 麥克成績若高於 60-79，就顯示普通。
● 麥克成績若低於 低於59(含)，就顯示不及格。
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
=======================================
!!!!! if...else if...else 計算成績 !!!!!
=======================================
*/

/* 
● 提納成績若高於 90(含)，就顯示A。
● 提納成績若高於 80(含)，就顯示B。
● 提納成績若低於 70(含)，就顯示C。
● 其他成績，就顯示F。
*/
let tinaScore = 60;

if (tinaScore >= 90) {
  console.log("A");
} else if (tinaScore >= 80) {
  console.log("B");
} else if (tinaScore >= 70) {
  console.log("C");
} else {
  console.log("F");
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
!!!!! 巢狀 if 握手會 !!!!!
==========================
*/

/* 
● 若有門票才可以入場，顯示前往審核DVD購買數量。
● 若DVD購買數項高於(含)3000，顯示可以握手。
*/

let hasTicket = true;
let dvdNum = 5000;
let hasDvdNum = 5000;

if (hasTicket) {
  console.log("前往審核DVD購買數量");
  if (hasDvdNum >= dvdNum) {
    console.log("可以握手");
  } else {
    console.log("請離開");
  }
} else {
  console.log("請離開");
}

/*
================================
!!!!! if...else if 心情分數 !!!!!
================================
*/

/* 
● 小美的心情分數。
● 若心情分數超過(含)8，顯示去唱歌。
● 若心情分數超過(含)5，顯示去血拼。
● 若心情分數低於5，顯示什麼都不做。
*/

let meiMoodScore = 4;
if (meiMoodScore >= 8) {
  console.log("去唱歌");
} else if (meiMoodScore >= 5) {
  console.log("去血拼");
} else if (meiMoodScore < 5) {
  console.log("什麼都不做");
}
