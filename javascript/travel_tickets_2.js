/*
===============
!!!!! LV1 !!!!!
===============
*/

/*
=======
陣列資料
=======
*/
let travelCards = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];

/*
=======
取得節點
=======
*/

// 取得卡片清單區塊節點
const ticketCardArea = document.querySelector(".ticketCard-area");

// 取得新增套票表單區塊
const addTicketForm = document.querySelector(".addTicket-form");

// 取得新增套票所有欄位節點
const ticketName = document.querySelector("#ticketName");
const ticketImg = document.querySelector("#ticketImgUrl");
const ticketArea = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketGroup = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addTicketBtn = document.querySelector(".addTicket-btn");

// 取得搜尋區節點
const searchArea = document.querySelector(".regionSearch");
const searchNum = document.querySelector("#searchResult-text");

/*
==============================
str、innerHTML、forEach 渲染卡片
==============================
*/
function travelTicketsRender(travalTicketsData) {
  let travelTicketsStr = "";
  travalTicketsData.forEach(function (travelCard) {
    travelTicketsStr += `
        <li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img
                src="${travelCard.imgUrl}"
                alt=""
              />
            </a>
            <div class="ticketCard-region">${travelCard.area}</div>
            <div class="ticketCard-rank">${travelCard.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${travelCard.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${travelCard.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num">${travelCard.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">${travelCard.price}</span>
              </p>
            </div>
          </div>
        </li>`;
  });

  ticketCardArea.innerHTML = travelTicketsStr;
  searchNum.textContent = `本次搜尋共 ${travalTicketsData.length} 筆資料`;
}
travelTicketsRender(travelCards);

/*
===============
!!!!! LV3 !!!!!
===============
*/

/*
==========
新增旅遊套票
==========
*/

/*
!!!!! 
1.取得所有節點。
2.建立按鈕的事件監聽器。
3.建立物件。
4.取得所有節點的輸入值。
5.將物件新增至陣列。
6.建立函式，讓點擊新增按鈕，也會重新渲染卡片清單。
!!!!!
*/

addTicketBtn.addEventListener("click", function () {
  let travelTicketObj = {
    name: ticketName.value, // 加入 trim()
    imgUrl: ticketImg.value,
    area: ticketArea.value,
    description: ticketDescription.value,
    group: ticketGroup.value,
    price: ticketPrice.value,
    rate: ticketRate.value, // 加入 number()
  };
  travelCards.push(travelTicketObj);
  travelTicketsRender(travelCards);
  searchArea.value = "全部地區";
});

/*
===============
依地區搜尋旅遊套票
===============
*/

/*
!!!!! 
1.取得所有節點。
2.建立按鈕的事件監聽器。
3.依據選擇的地區顯示相對應的旅遊卡片。
4.依據卡片數量顯示資料筆數。
!!!!!
*/

searchArea.addEventListener("change", function (e) {
  let areaTravelCards = [];
  travelCards.forEach(function (travelCard) {
    if (travelCard.area === e.target.value) {
      areaTravelCards.push(travelCard);
    } else if ("全部地區" === e.target.value) {
      areaTravelCards.push(travelCard);
    }
  });
  travelTicketsRender(areaTravelCards);
});
