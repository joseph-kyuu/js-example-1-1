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
const productWrap = document.querySelector(".productWrap");
const productSelect = document.querySelector(".productSelect");
const cartsListBody = document.querySelector(".cartsListBody");
const finalPrice = document.querySelector(".finalPrice");
const discardAllBtn = document.querySelector(".discardAllBtn");
const customerName = document.querySelector("#customerName");
const customerPhone = document.querySelector("#customerPhone");
const customerEmail = document.querySelector("#customerEmail");
const customerAddress = document.querySelector("#customerAddress");
const tradeWay = document.querySelector("#tradeWay");
const orderInfoBtn = document.querySelector(".orderInfo-btn");
const customerDataForm = document.querySelector(".customerDataForm");
const cartsListHead = document.querySelector(".cartsListHead");
const cartsListFoot = document.querySelector(".cartsListFoot");

// console.log(customerDataForm);

/*
======================
!!!!! 渲染商品列表 !!!!!
======================
*/

/*
===========
1.使用 api get，取得全部商品資料。
2.宣告空字串。
3.使用 forEach() 組字串。
4.使用 innerHTML 渲染商品字串。
===========
*/
let productsData;

/*
!!!!!
1.使用 api get，取得全部商品資料
!!!!
*/
function getProductsList() {
  axios
    .get(`${base}/api/livejs/v1/customer/${path}/products`)
    .then(function (res) {
      console.log(res);
      productsData = res.data.products;
      renderProductsList(productsData);
    })
    .catch(function (err) {
      console.log(err);
    });
}

/*
!!!!! 
2.宣告空字串。
3.使用 forEach() 組字串。
4.使用 innerHTML 渲染商品字串。
!!!!!
*/
function renderProductsList(data) {
  let productsStr = "";
  data.forEach(function (productData) {
    productsStr += `
      <li class="productCard">
        <h4 class="productType">新品</h4>
        <img
        src="${productData.images}"
        alt="">
        <a href="#" class="addCardBtn" data-product-id="${productData.id}">加入購物車</a>
        <h3>${productData.title}</h3>
        <del class="originPrice">NT$${productData.origin_price}</del>
        <p class="nowPrice">NT$${productData.price}</p>
      </li>`;
  });

  productWrap.innerHTML = productsStr;
}

getProductsList();

/*
====================
!!!!! 加入購物車 !!!!!
====================
*/

/*
===========
1.加入購物車按鈕，註冊事件監聽器。
2.阻止<a>預設行為。
3.確認點擊到正確的按鈕。
4.取得購物車 id。
5.使用 api post，取得新增購物車功能。
===========
*/

// 1.加入購物車按鈕，註冊事件監聽器。
productWrap.addEventListener("click", function (e) {
  // 2.阻止<a>預設行為。
  e.preventDefault();

  // 3.確認點擊到正確的按鈕。
  if (!e.target.classList.contains("addCardBtn")) {
    return;
  }

  // 4.取得購物車 id。
  let productId = e.target.dataset.productId;

  // 5.使用 api post，取得新增購物車功能。
  axios
    .post(`${base}/api/livejs/v1/customer/${path}/carts`, {
      data: {
        productId: `${productId}`,
        quantity: 1,
      },
    })
    .then(function (res) {
      // 渲染商品列表
      getCartsList();
      console.log("商品加入購物車成功");
    })
    .catch(function (err) {
      console.log("商品加入購物車失敗");
    });
});

/*
===================
!!!!! 篩選商品 !!!!!
===================
*/

/*
===========
1.篩選按鈕，註冊事件監聽器。
2.if 判斷式，篩選出正確的商品資料，以利渲染商品列表。
3.宣告一個空陣列，儲存篩選後的資料。
===========
*/

productSelect.addEventListener("change", function (e) {
  let productsArr = [];

  productsData.forEach(function (productData) {
    if (e.target.value === productData.category) {
      productsArr.push(productData);
      renderProductsList(productsArr);
    } else if (e.target.value === "全部") {
      renderProductsList(productsData);
    }
  });
});

/*
========================
!!!!! 取得購物車列表 !!!!!
========================
*/

/*
===========
1.使用 api get，取得購物車列表。
2.宣告空字串。
3.使用 forEach() 組字串。
4.使用 innerHTML 渲染商品字串。
5.使用 if 判斷式，確認購物車內是否有商品，以利確認要渲染的購物車畫面。
===========
*/

/*
!!!!!
1.使用 api get，取得購物車列表。
!!!!!
*/
function getCartsList() {
  let cartsListData;

  // 1.使用 api get，取得購物車列表。
  axios
    .get(`${base}/api/livejs/v1/customer/${path}/carts`)
    .then(function (res) {
      cartsListData = res.data.carts;
      renderCartsList(cartsListData);
      finalPrice.textContent = `NT$${res.data.finalTotal}`;
    })
    .catch(function (err) {
      console.log(err);
    });
}

/*
!!!!!
2.宣告空字串。
3.使用 forEach() 組字串。
4.使用 innerHTML 渲染商品字串。
5.使用 if 判斷式，確認購物車內是否有商品，以利確認要渲染的購物車畫面。
!!!!!
*/

function renderCartsList(data) {
  // 5.使用 if 判斷式，確認購物車內是否有商品，以利確認要渲染的購物車畫面。
  if (data.length === 0) {
    cartsListHead.style.display = "none";
    cartsListFoot.style.display = "none";
    cartsListBody.innerHTML = `
      <tr>
        <td colspan="5">目前購物車沒有商品</td>
      </tr>
    `;
    return;
  }
  cartsListHead.style.display = "";
  cartsListFoot.style.display = "";

  // 2.宣告空字串。
  let cartsListStr = "";

  // 3.使用 forEach() 組字串。
  data.forEach(function (cartListData) {
    cartsListStr += `
            <tr>
              <td>
                <div class="cardItem-title">
                  <img src="${cartListData.product.images}" alt="" />
                  <p>${cartListData.product.title}</p>
                </div>
              </td>
              <td>NT$${cartListData.product.price}</td>
              <td>${cartListData.quantity}</td>
              <td>NT$${cartListData.product.price * cartListData.quantity}</td>
              <td class="discardBtn">
                <a href="#" class="material-icons deleteProductBtn" data-product-id="${cartListData.id}"> clear </a>
              </td>
            </tr>`;
  });

  // 4.使用 innerHTML 渲染商品字串。
  cartsListBody.innerHTML = cartsListStr;
}

getCartsList();

/*
===========================
!!!!! 刪除購物車單一商品 !!!!!
===========================
*/

/*
===========
1.刪除單一商品按鈕，註冊事件監聽器。
2.阻止<a>預設行為。
3.確認點擊到正確的按鈕。
4.取得購物車 id。
5.使用 api delete，取得刪除購物車內單一商品功能。
6.重新渲染購物車列表。
===========
*/

// 1.刪除單一商品按鈕，註冊事件監聽器。
cartsListBody.addEventListener("click", function (e) {
  // 2.阻止<a>預設行為。
  e.preventDefault();

  // 3.確認點擊到正確的按鈕。
  if (!e.target.classList.contains("deleteProductBtn")) {
    return;
  }

  // 4.取得購物車 id。
  // 5.使用 api delete，取得刪除購物車內單一商品功能。
  axios
    .delete(
      `${base}/api/livejs/v1/customer/${path}/carts/${e.target.dataset.productId}`,
    )
    .then(function (res) {
      // 6.重新渲染購物車列表。
      getCartsList();
      console.log("商品刪除成功");
    })
    .catch(function (err) {
      console.log("商品刪除失敗");
    });
});

/*
===========================
!!!!! 刪除購物車全部商品 !!!!!
===========================
*/

/*
===========
1.刪除全部商品按鈕，註冊事件監聽器。
2.阻止<a>預設行為。
4.使用 api delete，取得刪除購物車內單一商品功能。
5.重新渲染購物車列表。
===========
*/

discardAllBtn.addEventListener("click", function (e) {
  e.preventDefault();
  axios
    .delete(`${base}/api/livejs/v1/customer/${path}/carts`)
    .then(function (res) {
      getCartsList();
      console.log("刪除購物車內全部商品成功");
    })
    .catch(function (err) {
      console.log("刪除購物車內全部商品失敗");
    });
});

/*
======================
!!!!! 送出購買訂單 !!!!!
======================
*/

/*
===========
1.送出預定資料按鈕，註冊事件監聽器。
2.阻止<a>預設行為。
3.取得訂單資料。
4.使用 api post，取得刪除購物車內單一商品功能。
5.清空表單欄位資料。
6.重新渲染購物車列表。
===========
*/

orderInfoBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let customerOrderData = {
    data: {
      user: {
        name: `${customerName.value}`,
        tel: `${customerPhone.value}`,
        email: `${customerEmail.value}`,
        address: `${customerAddress.value}`,
        payment: `${tradeWay.value}`,
      },
    },
  };

  axios
    .post(`${base}/api/livejs/v1/customer/${path}/orders`, customerOrderData)
    .then(function (res) {
      customerDataForm.reset();
      getCartsList();
      console.log("訂單送出成功");
    })
    .catch(function (err) {
      console.log("訂單送出失敗");
    });
});
