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
  let bmi = (weight / (height / 100) ** 2).toFixed(1);
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
  } else if (bmi > 35) {
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

function printBmi2(height, weight) {
  let bmi = (weight / (height / 100) ** 2).toFixed(1);
  console.log(bmi);
  // return bmi;
  if (bmi < 18.5) {
    console.log(
      `您的體重${bmiStatesData.overThin.state}，健康指數為${bmiStatesData.overThin.color}`,
    );
  } else if (bmi < 24) {
    console.log(
      `您的體重正常${bmiStatesData.normal.state}，健康指數為${bmiStatesData.normal.color}`,
    );
  } else if (bmi < 27) {
    console.log(
      `您的體重過重${bmiStatesData.overWeight.state}，健康指數為${bmiStatesData.overWeight.color}`,
    );
  } else if (bmi < 30) {
    console.log(
      `您的體重輕度肥胖${bmiStatesData.mildFat.state}，健康指數為${bmiStatesData.mildFat.color}`,
    );
  } else if (bmi < 35) {
    console.log(
      `您的體重中度肥胖${bmiStatesData.moderateFat.state}，健康指數為${bmiStatesData.moderateFat.color}`,
    );
  } else if (bmi > 35) {
    console.log(
      `您的體重重度肥胖${bmiStatesData.severeFat.state}，健康指數為${bmiStatesData.severeFat.color}`,
    );
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

let bmiHistoryData = [];

function printBmi3(height, weight) {
  let obj = {
    height,
    weight,
  };
  bmiHistoryData.push(obj);
  let bmi = (weight / (height / 100) ** 2).toFixed(1);
  console.log(bmi);
  // return bmi;
  if (bmi < 18.5) {
    console.log(
      `您的體重${bmiStatesData.overThin.state}，健康指數為${bmiStatesData.overThin.color}`,
    );
  } else if (bmi < 24) {
    console.log(
      `您的體重正常${bmiStatesData.normal.state}，健康指數為${bmiStatesData.normal.color}`,
    );
  } else if (bmi < 27) {
    console.log(
      `您的體重過重${bmiStatesData.overWeight.state}，健康指數為${bmiStatesData.overWeight.color}`,
    );
  } else if (bmi < 30) {
    console.log(
      `您的體重輕度肥胖${bmiStatesData.mildFat.state}，健康指數為${bmiStatesData.mildFat.color}`,
    );
  } else if (bmi < 35) {
    console.log(
      `您的體重中度肥胖${bmiStatesData.moderateFat.state}，健康指數為${bmiStatesData.moderateFat.color}`,
    );
  } else if (bmi > 35) {
    console.log(
      `您的體重重度肥胖${bmiStatesData.severeFat.state}，健康指數為${bmiStatesData.severeFat.color}`,
    );
  } else {
    console.log("您的數值輸入錯誤，請重新輸入");
  }
}

printBmi3(178, 20);
printBmi3(178, 70);
printBmi3(178, 85);
printBmi3(178, 90);
printBmi3(178, 110);
printBmi3(178, 130);
printBmi3(178);

function showHistoryData() {
  console.log(
    `您總共計算${bmiHistoryData.length}次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！`,
  );
}

console.log(bmiHistoryData);
showHistoryData();
