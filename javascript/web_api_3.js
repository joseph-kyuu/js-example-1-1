/*
===============
!!!!! API !!!!!
===============
*/

const base = `https://livejs-api.hexschool.io/`;
const path = `joseph7777`;
const token = `GdPbJQoYJWfH0pHRrfjWaoKW5KG2`;

/*
========================
!!!!! 取得 DOM 節點 !!!!!
========================
*/

const orderList = document.querySelector(".orderList");
const deleteAllOrders = document.querySelector(".deleteAllOrders");

/*
===================
!!!!! 取得訂單 !!!!!
===================
*/

/*
===========
1.使用 api get，取得訂單列表。
2.宣告空字串。
3.使用 forEach() 組字串。
4.使用 innerHTML 渲染商品字串。
5.處理商品內容。
6.處理時間內容。
7.渲染圓餅圖。
===========
*/

// 取得訂單
function getOrdersList() {
  axios
    .get(`${base}/api/livejs/v1/admin/${path}/orders`, {
      headers: {
        Authorization: token,
      },
    })
    .then(function (res) {
      let ordersListData = res.data.orders;
      renderOrderList(ordersListData);
      renderCategoryProportion(ordersListData);
      renderProductsProportion(ordersListData);
    })
    .catch(function (err) {
      console.log(err);
    });
}

// 處理訂單內容
function renderOrderList(data) {
  let ordersListStr = "";
  let ordersProductArr = [];

  data.forEach(function (orderListData) {
    // 處理商品內容
    let ordersProducts = handleProductItems(orderListData);
    // 處理日期內容
    const time = handleDate(orderListData);
    // 處理訂單內容
    ordersListStr += `
      <tr>
              <td>${orderListData.createdAt}</td>
              <td>
                <p>${orderListData.user.name}</p>
                <p>${orderListData.user.tel}</p>
              </td>
              <td>${orderListData.user.address}</td>
              <td>${orderListData.user.email}</td>
              <td>
                ${ordersProducts}
              <td>${time}</td>
              <td class="orderStatus">
                <a class="orderPaidState" data-order-paid-id="${orderListData.id}" href="#">${orderListData.paid ? "已付款" : "未付款"}</a>
              </td>
              <td>
                <input type="button" class="delSingleOrder-Btn deleteOrderBtn" value="刪除" data-order-delete-id="${orderListData.id}"/>
              </td>
            </tr>`;
  });

  orderList.innerHTML = ordersListStr;
  // orderPaidState = document.querySelector(".orderPaidState");
}

// 處理商品內容
function handleProductItems(data) {
  let ordersProductsStr = "";
  let ordersProductsData = data.products;
  ordersProductsData.forEach(function (orderProductsData) {
    ordersProductsStr += `<p>${orderProductsData.title}*${orderProductsData.quantity}</p>`;
  });
  return ordersProductsStr;
}

// 處理日期內容
function handleDate(time) {
  const orderCreatedTime = new Date(time.createdAt * 1000);
  const year = orderCreatedTime.getFullYear();
  const month = orderCreatedTime.getMonth() + 1;
  const day = orderCreatedTime.getDate();
  const orderCreatedTimeStr = `${year}/${month}/${day}`;
  return orderCreatedTimeStr;
}

/*
=================
!!!!! 圓餅圖 !!!!!
=================
*/

/*
===========
// 類別比重
===========
*/

/*
!!!!!
1.使用巢狀 forEach、 if 判斷式、undefined。
2.統計分類數量。
3.建立統計物件。
4.C3.js
!!!!!
*/

function renderCategoryProportion(data) {
  let categoryProportionObj = {};
  data.forEach(function (orderProductsData) {
    let orderProducts = orderProductsData.products;
    orderProducts.forEach(function (orderProduct) {
      if (categoryProportionObj[orderProduct.category] === undefined) {
        categoryProportionObj[orderProduct.category] = 1;
      } else {
        categoryProportionObj[orderProduct.category]++;
      }
    });
  });

  categoryProportionArr = Object.entries(categoryProportionObj);
  var chart = c3.generate({
    bindto: "#chart1",
    data: {
      // iris data from R
      columns: categoryProportionArr,
      type: "pie",
    },
    color: {
      pattern: ["#DACBFF", "#9D7FEA", "#5434A7"],
    },
  });
}

/*
===========
商品比重
===========
*/

/*
!!!!!
1.使用巢狀 forEach、 if 判斷式、undefined。
2.統計分類數量。
3.建立統計物件。
4.使用 sort()，排序大小。
5.C3.js

--- HTML ---
6.要新增插入圖表的位置。

!!!!!
*/

function renderProductsProportion(data) {
  let obj = {};
  let arr;
  data.forEach(function (item) {
    let data = item.products;
    data.forEach(function (item) {
      if (obj[item.title] === undefined) {
        obj[item.title] = item.price;
      } else {
        obj[item.title] += item.price;
      }
    });
  });

  arr = Object.entries(obj);
  let sortArr = arr.sort(function (a, b) {
    return b[1] - a[1];
  });

  let earnArr = [];
  let othersTotal = 0;
  sortArr.forEach(function (item, index) {
    if (index < 3) {
      earnArr.push(item);
    } else {
      othersTotal += item[1];
    }
  });

  earnArr.push(["其他", othersTotal]);

  var chart = c3.generate({
    bindto: "#chart3",
    data: {
      // iris data from R
      columns: earnArr,
      type: "pie",
    },
    color: {
      pattern: ["#DACBFF", "#9D7FEA", "#5434A7", "#301E5F"],
    },
    pie: {
      label: {
        show: false,
      },
    },
  });
}

// 商品比重2
// function renderFixedProductsProportion(data) {
//   let productsProportionObj = {};
//   data.forEach(function (orderProductsData) {
//     orderProductsData.products.forEach(function (orderProductData) {
//       // console.log(orderProductData);
//       if (productsProportionObj[orderProductData.title] === undefined) {
//         productsProportionObj[orderProductData.title] = 1;
//       } else {
//         productsProportionObj[orderProductData.title]++;
//       }
//     });
//   });
//   let productsProportionObjToArr = Object.entries(productsProportionObj);
//   let productsProportionArr = [];
//   let others = 0;
//   productsProportionObjToArr.forEach(function (item) {
//     if (
//       item[0] === "Louvre 雙人床架／雙人加大" ||
//       item[0] === "Antony 雙人床架／雙人加大" ||
//       item[0] === "Charles 雙人床架" ||
//       item[0] === "Jordan 雙人床架／雙人加大"
//     ) {
//       productsProportionArr.push(item);
//     } else {
//       others++;
//     }
//   });
//   productsProportionArr.push(["其他", others]);

//   // categoryProportionArr = Object.entries(productsProportionObj);

//   var chart = c3.generate({
//     bindto: "#chart2",
//     data: {
//       // iris data from R
//       columns: productsProportionArr,
//       type: "pie",
//     },
//     color: {
//       pattern: ["#DACBFF", "#9D7FEA", "#5434A7", "#301E5F"],
//     },
//     pie: {
//       label: {
//         show: false,
//       },
//     },
//   });
// }

getOrdersList();

/*
======================
!!!!! 刪除單一訂單 !!!!!
======================
*/

/*
===========
1.刪除單一訂單按鈕，註冊事件監聽器。
2.阻止<a>預設行為。
3.確認點擊到正確的按鈕。
4.取得訂單資料。
5.使用 api delete，取得刪除購物車內單一商品功能。
6.渲染購物車列表。
===========
*/

orderList.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("deleteOrderBtn")) {
    return;
  }
  axios
    .delete(
      `${base}/api/livejs/v1/admin/${path}/orders/${e.target.dataset.orderDeleteId}`,
      {
        headers: {
          Authorization: token,
        },
      },
    )
    .then(function (res) {
      getOrdersList();
      console.log(e.target.dataset.orderDeleteId);
      console.log("訂單刪除成功");
    })
    .catch(function (err) {
      console.log("訂單刪除失敗");
      console.log(err);
    });
});

/*
======================
!!!!! 刪除全部訂單 !!!!!
======================
*/

/*
===========
1.刪除全部訂單按鈕，註冊事件監聽器。
2.阻止<a>預設行為。
3.取得訂單資料。
4.使用 api delete，取得刪除購物車內單一商品功能。
5.渲染購物車列表。
===========
*/

deleteAllOrders.addEventListener("click", function (e) {
  e.preventDefault();
  axios
    .delete(`${base}/api/livejs/v1/admin/${path}/orders`, {
      headers: {
        Authorization: token,
      },
    })
    .then(function (res) {
      getOrdersList();
      console.log("刪除全部訂單成功");
    })
    .catch(function (err) {
      console.log(err);
    });
});

/*
======================
!!!!! 修改付款訂單 !!!!!
======================
*/

/*
===========
1.修改付款訂單按鈕，註冊事件監聽器。
2.阻止<a>預設行為。
3.確認點擊到正確的按鈕。
4.使用 api put，取得修改訂單狀態功能。
5.重新渲染購物車列表。

--- HTML ---
6.使用布林值、三元運算子，決定要顯示的文字。
===========
*/

orderList.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("orderPaidState")) {
    return;
  }
  axios
    .put(
      `${base}/api/livejs/v1/admin/${path}/orders`,
      {
        data: {
          id: `${e.target.dataset.orderPaidId}`,
          paid: true,
        },
      },
      {
        headers: {
          Authorization: token,
        },
      },
    )
    .then(function (res) {
      getOrdersList();
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
});
