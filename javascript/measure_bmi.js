/*
====================
!!!!! BMI 公式 !!!!!
====================
*/

/*
================================
BMI = 體重(公斤) / 身高 ** 2 (公尺)
================================
*/

/*
===================
!!!!! 第一階段 !!!!!
===================
*/

/*
=========================
printBmi 函式，並印出對應狀態

1.將計算出來的 BMI 結果，四捨五入至小數點第二位。
==========================
*/

/*
BMI < 18.5
18.5 <= BMI < 24
24 <= BMI < 27
27 <= BMI < 30
30 <= BMI < 35
BMI >= 35
*/

function printBmi1(height, weight) {
  let bmi = (weight / (height / 100) ** 2).toFixed(2);
  console.log(bmi);
  // return bmi;
  if (bmi < 18.5) {
    console.log("您的體重過輕");
  } else if (bmi < 24) {
    console.log("您的體重正常");
  } else if (bmi < 27) {
    console.log("您的體重過重");
  } else if (bmi < 30) {
    console.log("您的體重輕度肥胖");
  } else if (bmi < 35) {
    console.log("您的體重中度肥胖");
  } else if (bmi >= 35) {
    console.log("您的體重重度肥胖");
  } else {
    console.log("您的數值輸入錯誤，請重新輸入");
  }
}

// printBmi1(178, 20);
// printBmi1(178, 70);
// printBmi1(178, 85);
// printBmi1(178, 90);
// printBmi1(178, 110);
// printBmi1(178, 130);
// printBmi1(178);

/*
===================
!!!!! 第二階段 !!!!!
===================
*/

/*
==================================================
1.使用 bmiStatesData ，進行物件資料取值，取出狀態、顏色。
==================================================
*/

const bmiStatesData = {
  overThin: {
    state: "過輕",
    color: "藍色",
  },
  normal: {
    state: "正常",
    color: "紅色",
  },
  overWeight: {
    state: "過重",
    color: "澄色",
  },
  mildFat: {
    state: "輕度肥胖",
    color: "黃色",
  },
  moderateFat: {
    state: "中度肥胖",
    color: "黑色",
  },
  severeFat: {
    state: "重度肥胖",
    color: "綠色",
  },
};

// 第一種寫法，直接將要印出的內容寫在同一個函式內。
// function printBmi2(height, weight) {
//   let bmi = (weight / (height / 100) ** 2).toFixed(1);
//   console.log(bmi);
//   // return bmi;
//   if (bmi < 18.5) {
//     console.log(
//       `您的體重${bmiStatesData.overThin.state}，健康指數為${bmiStatesData.overThin.color}`,
//     );
//   } else if (bmi < 24) {
//     console.log(
//       `您的體重正常${bmiStatesData.normal.state}，健康指數為${bmiStatesData.normal.color}`,
//     );
//   } else if (bmi < 27) {
//     console.log(
//       `您的體重過重${bmiStatesData.overWeight.state}，健康指數為${bmiStatesData.overWeight.color}`,
//     );
//   } else if (bmi < 30) {
//     console.log(
//       `您的體重輕度肥胖${bmiStatesData.mildFat.state}，健康指數為${bmiStatesData.mildFat.color}`,
//     );
//   } else if (bmi < 35) {
//     console.log(
//       `您的體重中度肥胖${bmiStatesData.moderateFat.state}，健康指數為${bmiStatesData.moderateFat.color}`,
//     );
//   } else if (bmi > 35) {
//     console.log(
//       `您的體重重度肥胖${bmiStatesData.severeFat.state}，健康指數為${bmiStatesData.severeFat.color}`,
//     );
//   } else {
//     console.log("您的數值輸入錯誤，請重新輸入");
//   }
// }

// 第二種寫法，將要印出的內容分離出來另外寫一個新的函式，然後在原本函式呼叫印出內容。
function printBmiState(state) {
  console.log(
    `您的體重重度肥胖${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`,
  );
}

function printBmi2(height, weight) {
  let bmi = (weight / (height / 100) ** 2).toFixed(1);
  console.log(bmi);
  // return bmi;
  if (bmi < 18.5) {
    printBmiState("overThin");
  } else if (bmi < 24) {
    printBmiState("normal");
  } else if (bmi < 27) {
    printBmiState("overWeight");
  } else if (bmi < 30) {
    printBmiState("mildFat");
  } else if (bmi < 35) {
    printBmiState("moderateFat");
  } else if (bmi > 35) {
    printBmiState("severeFat");
  } else {
    console.log("您的數值輸入錯誤，請重新輸入");
  }
}

// printBmi2(178, 20);
// printBmi2(178, 70);
// printBmi2(178, 85);
// printBmi2(178, 90);
// printBmi2(178, 110);
// printBmi2(178, 130);
// printBmi2(178);

/*
===================
!!!!! 第三階段 !!!!!
===================
*/

/*
自己重新整理題目需求。
1.請宣告一個空陣列 bmiHistoryData，把每一次計算出來的 BMI 結果(數值、狀態、顏色)，統整成一個物件，並推到空陣列。
2.如果計算錯誤，則不推入空陣列中。
*/

let bmiHistoryData = [];
let last;

// 第一種寫法，直接也把宣告物件、新增物件內容、推入陣列，都放在同一個函式內。
function printBmi3(height, weight) {
  let state;
  let color;

  let bmi = (weight / (height / 100) ** 2).toFixed(1);
  if (bmi < 18.5) {
    state = bmiStatesData.overThin.state;
    color = bmiStatesData.overThin.color;
    console.log(
      `您的體重${bmiStatesData.overThin.state}，健康指數為${bmiStatesData.overThin.color}`,
    );
  } else if (bmi < 24) {
    state = bmiStatesData.normal.state;
    color = bmiStatesData.normal.color;
    console.log(
      `您的體重正常${bmiStatesData.normal.state}，健康指數為${bmiStatesData.normal.color}`,
    );
  } else if (bmi < 27) {
    state = bmiStatesData.overWeight.state;
    color = bmiStatesData.overWeight.color;
    console.log(
      `您的體重過重${bmiStatesData.overWeight.state}，健康指數為${bmiStatesData.overWeight.color}`,
    );
  } else if (bmi < 30) {
    state = bmiStatesData.mildFat.state;
    color = bmiStatesData.mildFat.color;
    console.log(
      `您的體重輕度肥胖${bmiStatesData.mildFat.state}，健康指數為${bmiStatesData.mildFat.color}`,
    );
  } else if (bmi < 35) {
    state = bmiStatesData.moderateFat.state;
    color = bmiStatesData.moderateFat.color;
    console.log(
      `您的體重中度肥胖${bmiStatesData.moderateFat.state}，健康指數為${bmiStatesData.moderateFat.color}`,
    );
  } else if (bmi > 35) {
    state = bmiStatesData.severeFat.state;
    color = bmiStatesData.severeFat.color;
    console.log(
      `您的體重重度肥胖${bmiStatesData.severeFat.state}，健康指數為${bmiStatesData.severeFat.color}`,
    );
  } else {
    console.log("您的數值輸入錯誤，請重新輸入");
  }

  let objBmi = {
    bmi,
    state,
    color,
  };

  if (bmi !== "NaN") {
    bmiHistoryData.push(objBmi);
  }
}

// printBmi3(178, 20);
// printBmi3(178, 70);
// printBmi3(178, 85);
// printBmi3(178, 90);
// printBmi3(178, 110);
// printBmi3(178, 130);
// printBmi3(178);

// last = bmiHistoryData[bmiHistoryData.length - 1];
// console.log(bmiHistoryData.length);
// console.log(last);
// console.log(
//   `您總共計算${bmiHistoryData.length}次 BMI 紀錄，最後一次 BMI 指數為 ${last.bmi}，${last.state}！健康指數為${last.color}！`,
// );

// 寫法二，把宣告物件、新增物件內容、推入陣列，另外新增一個函式來處理。
let bmiHistoryData4 = [];
let last4;

// 搭配寫法二

// 建立物件，推入陣列
function addObj(bmi, state, color) {
  if (bmi !== "NaN") {
    bmiHistoryData4.push({
      bmi,
      state,
      color,
    });
  }
}

// 列印每一次計算 BMI 的資訊
function showEveryData(state) {
  console.log(
    `您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`,
  );
}

// 計算 BMI
function printBmi4(height, weight) {
  let state;
  let color;

  let bmi = (weight / (height / 100) ** 2).toFixed(1);

  if (bmi < 18.5) {
    state = bmiStatesData.overThin.state;
    color = bmiStatesData.overThin.color;
    addObj(bmi, state, color);
    showEveryData("overThin");
  } else if (bmi < 24) {
    state = bmiStatesData.normal.state;
    color = bmiStatesData.normal.color;
    addObj(bmi, state, color);
    showEveryData("normal");
  } else if (bmi < 27) {
    state = bmiStatesData.overWeight.state;
    color = bmiStatesData.overWeight.color;
    addObj(bmi, state, color);
    showEveryData("overWeight");
  } else if (bmi < 30) {
    state = bmiStatesData.mildFat.state;
    color = bmiStatesData.mildFat.color;
    addObj(bmi, state, color);
    showEveryData("mildFat");
  } else if (bmi < 35) {
    state = bmiStatesData.moderateFat.state;
    color = bmiStatesData.moderateFat.color;
    addObj(bmi, state, color);
    showEveryData("moderateFat");
  } else if (bmi > 35) {
    state = bmiStatesData.severeFat.state;
    color = bmiStatesData.severeFat.color;
    addObj(bmi, state, color);
    showEveryData("severeFat");
  } else {
    console.log("您的數值輸入錯誤，請重新輸入");
  }
}

// 列印出總共計算了幾次、最後一次 BMI 資訊
function showHistoryData() {
  let last4 = bmiHistoryData4[bmiHistoryData4.length - 1];
  console.log(last4);
  console.log(
    `您總共計算${bmiHistoryData4.length}次 BMI 紀錄，最後一次 BMI 指數為 ${last4.bmi}，${last4.state}！健康指數為${last4.color}！`,
  );
}

printBmi4(178, 20);
printBmi4(178, 70);
printBmi4(178, 85);
printBmi4(178, 90);
printBmi4(178, 110);
printBmi4(178, 130);
printBmi4(178);
showHistoryData();
