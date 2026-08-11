const base = `https://livejs-api.hexschool.io/`;
const path = `joseph7777`;
const token = `GdPbJQoYJWfH0pHRrfjWaoKW5KG2`;

/*
===================
!!!!! 取得商品 !!!!!
===================
*/

// axios
//   .get(`${base}/api/livejs/v1/customer/${path}/products`)
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

/*
====================
!!!!! 加入購物車 !!!!!
====================
*/

// axios
//   .post(`${base}/api/livejs/v1/customer/${path}/carts`, {
//     data: {
//       productId: "w0ZhUp9Ceo7Tl8Xw5pcI",
//       quantity: 5,
//     },
//   })
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

/*
========================
!!!!! 取得購物車列表 !!!!!
========================
*/
// axios
//   .get(`${base}/api/livejs/v1/customer/${path}/carts`)
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

/*
===========================
!!!!! 刪除購物車全部商品 !!!!!
===========================
*/
// axios
//   .delete(`${base}/api/livejs/v1/customer/${path}/carts`)
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

/*
===========================
!!!!! 刪除購物車單一商品 !!!!!
===========================
*/
// axios
//   .delete(`${base}/api/livejs/v1/customer/${path}/carts/yp7j2a2zUY9XiayiRdPu`)
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

/*
======================
!!!!! 送出購買訂單 !!!!!
======================
*/

// axios
//   .post(`${base}/api/livejs/v1/customer/${path}/orders`, {
//     data: {
//       user: {
//         name: "六角學院",
//         tel: "07-5313506",
//         email: "hexschool@hexschool.com",
//         address: "高雄市六角學院路",
//         payment: "Apple Pay",
//       },
//     },
//   })
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

/*
===================
!!!!! 取得訂單 !!!!!
===================
*/

axios
  .get(`${base}/api/livejs/v1/admin/${path}/orders`, {
    headers: {
      Authorization: token,
    },
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });

/*
===================
!!!!! 修改付款訂單 !!!!!
===================
*/

// axios
//   .put(
//     `${base}/api/livejs/v1/admin/${path}/orders`,
//     {
//       data: {
//         id: "IgJeOvjhdpIqrKECi5hy",
//         paid: true,
//       },
//     },
//     {
//       headers: {
//         Authorization: token,
//       },
//     },
//   )
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

/*
======================
!!!!! 刪除全部訂單 !!!!!
======================
*/
axios
  .delete(`${base}/api/livejs/v1/admin/${path}/orders`, {
    headers: {
      Authorization: token,
    },
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });

/*
======================
!!!!! 刪除單一訂單 !!!!!
======================
*/

// axios
//   .delete(`${base}/api/livejs/v1/admin/${path}/orders/j17gPE6Z55BHv64i3KqU`, {
//     headers: {
//       Authorization: token,
//     },
//   })
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
