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
let ordersProductsData;
let ordersListStr = "";
let ordersProductsStr = "";

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
    })
    .catch(function (err) {
      console.log(err);
    });
}

function renderOrderList(data) {
  ordersListStr = "";
  ordersProductsStr = "";
  data.forEach(function (orderListData) {
    ordersProductsData = orderListData.products;
    ordersProductsData.forEach(function (orderProductsData) {
      ordersProductsStr += `<p>${orderProductsData.title}</p>`;
    });
    const time = handleDate(orderListData);
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
  orderPaidState = document.querySelector(".orderPaidState");
}

function handleDate(time) {
  const orderCreatedTime = new Date(time.createdAt * 1000);
  const year = orderCreatedTime.getFullYear();
  const month = orderCreatedTime.getMonth() + 1;
  const day = orderCreatedTime.getDate();
  const orderCreatedTimeStr = `${year}/${month}/${day}`;
  return orderCreatedTimeStr;
}

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
  console.dir(e.target);
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
