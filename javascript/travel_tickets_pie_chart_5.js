let data;
let arr = [];

axios
  .get(
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json",
  )
  .then(function (res) {
    // 取得資料
    data = res.data;

    // 計算地區數量，物件資料
    let obj = {};
    data.forEach(function (item) {
      if (obj[item.area] === undefined) {
        obj[item.area] = 1;
      } else {
        obj[item.area] += 1;
      }
    }); //  {台北:1,台中:1,高雄:1,}

    // 物件資料轉陣列資料
    let areaNum = Object.entries(obj);
    areaNum.forEach(function (item) {
      arr.push(item);
    }); //  [[台北:1],[台中:1],[高雄:1]]

    // 帶入資料，建立圖表
    renderC3(arr);
  });

// 帶入資料，建立圖表
function renderC3(arr) {
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: arr,
      type: "donut",
    },
    donut: {
      title: "地區",
    },
  });
}
