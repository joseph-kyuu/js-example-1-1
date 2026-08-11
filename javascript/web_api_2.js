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

// console.log(
//   customerName

// );

/*
======================
!!!!! 渲染商品列表 !!!!!
======================
*/

/*
===========
1.取得全部商品資料。
2.宣告空字串。
3.使用 forEach() 組字串。
4.使用 innerHTML 渲染商品字串。
===========
*/
let productsData;
let productsStr = "";

function getProductsList() {
  axios
    .get(`${base}/api/livejs/v1/customer/${path}/products`)
    .then(function (res) {
      productsData = res.data.products;
      renderProductsList(productsData);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function renderProductsList(data) {
  productsStr = "";
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

let quantity = 0;
productWrap.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("addCardBtn")) {
    return;
  }
  let productId = e.target.dataset.productId;
  axios
    .post(`${base}/api/livejs/v1/customer/${path}/carts`, {
      data: {
        productId: `${productId}`,
        quantity: 1,
      },
    })
    .then(function (res) {
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

productSelect.addEventListener("change", function (e) {
  let productsArr = [];
  productsData.forEach(function (productData) {
    if (e.target.value === productData.category) {
      productsArr.push(productData);
      renderProductsList(productsArr);
      console.log(e.target.value);
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

function getCartsList() {
  let cartsListData;
  let cartsListStr = "";
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

function renderCartsList(data) {
  cartsListStr = "";
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

  cartsListBody.innerHTML = cartsListStr;
}

getCartsList();

/*
===========================
!!!!! 刪除購物車單一商品 !!!!!
===========================
*/

cartsListBody.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("deleteProductBtn")) {
    return;
  }
  axios
    .delete(
      `${base}/api/livejs/v1/customer/${path}/carts/${e.target.dataset.productId}`,
    )
    .then(function (res) {
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
      console.log("訂單送出成功");
    })
    .catch(function (err) {
      console.log("訂單送出失敗");
    });
});
