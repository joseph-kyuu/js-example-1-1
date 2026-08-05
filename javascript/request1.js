/*
1.取 DOM
2.取資料
3.render 畫面
*/

const list = document.querySelector(".list");
let str = "";
axios
  .get(
    "https://data.moenv.gov.tw/api/v2/gp_p_01?api_key=4c89a32a-a214-461b-bf29-30ff32a61a8a&limit=1000&sort=ImportDate%20desc&format=JSON",
  )
  .then(function (response) {
    let allData = response.data;
    allData.forEach(function (item) {
      str += `<li>${item.storename}</li>`;
    });
    console.log(str);
    list.innerHTML = str;
  });
