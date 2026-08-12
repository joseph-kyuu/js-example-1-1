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

// console.log(orderPaidState);

/*
===================
!!!!! 取得訂單 !!!!!
===================
*/
let ordersListData;
let ordersProductsStr;
let ordersListStr = "";

function getOrdersList() {
  axios
    .get(`${base}/api/livejs/v1/admin/${path}/orders`, {
      headers: {
        Authorization: token,
      },
    })
    .then(function (res) {
      ordersListData = res.data.orders;
      renderOrderList(ordersListData);
      renderCategoryProportion(ordersListData);
      renderProductsProportion(ordersListData);
      // console.log(ordersListData);
      // console.log(ordersListData[0].products[0].title);
      // console.log(ordersListData[0].products[0].price);
      let obj = {};
      let arr;
      ordersListData.forEach(function (item) {
        let data = item.products;

        data.forEach(function (item) {
          // console.log(item.title);
          // console.log(item.price);
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
      console.log(earnArr);

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
    })
    .catch(function (err) {
      console.log(err);
    });
}

function renderOrderList(data) {
  ordersListStr = "";
  let ordersProductArr = [];

  data.forEach(function (orderListData) {
    // console.log(orderListData.products);
    // 處理商品內容
    handleProductItems(orderListData);
    // 處理日期
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
                ${ordersProductsStr}
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
  ordersProductsStr = "";
  let ordersProductsData = data.products;
  // console.log(ordersProductsData);

  ordersProductsData.forEach(function (orderProductsData) {
    ordersProductsStr += `<p>${orderProductsData.title}*${orderProductsData.quantity}</p>`;
  });
}

// 處理日期
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

// 類別比重
function renderCategoryProportion(data) {
  let categoryProportionObj = {};
  data.forEach(function (orderProductsData) {
    // console.log(orderProductsData.products);
    orderProductsData.products.forEach(function (item) {
      // console.log(item.category);
      if (categoryProportionObj[item.category] === undefined) {
        categoryProportionObj[item.category] = 1;
      } else {
        categoryProportionObj[item.category]++;
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

// 商品比重
function renderProductsProportion(data) {
  let productsProportionObj = {};
  data.forEach(function (orderProductsData) {
    orderProductsData.products.forEach(function (orderProductData) {
      // console.log(orderProductData);
      if (productsProportionObj[orderProductData.title] === undefined) {
        productsProportionObj[orderProductData.title] = 1;
      } else {
        productsProportionObj[orderProductData.title]++;
      }
    });
  });
  let productsProportionObjToArr = Object.entries(productsProportionObj);
  let productsProportionArr = [];
  let others = 0;
  productsProportionObjToArr.forEach(function (item) {
    if (
      item[0] === "Louvre 雙人床架／雙人加大" ||
      item[0] === "Antony 雙人床架／雙人加大" ||
      item[0] === "Charles 雙人床架" ||
      item[0] === "Jordan 雙人床架／雙人加大"
    ) {
      productsProportionArr.push(item);
    } else {
      others++;
    }
  });
  productsProportionArr.push(["其他", others]);

  // categoryProportionArr = Object.entries(productsProportionObj);

  var chart = c3.generate({
    bindto: "#chart2",
    data: {
      // iris data from R
      columns: productsProportionArr,
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

// 商品比重

getOrdersList();

/*
======================
!!!!! 刪除單一訂單 !!!!!
======================
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
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
});

/*
======================
!!!!! 刪除全部訂單 !!!!!
======================
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
===================
!!!!! 修改付款訂單 !!!!!
===================
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
