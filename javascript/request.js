/*
===================
!!!!! 簡易取值 !!!!!
===================
*/

/*
===========
1.axios 物件。
2.http 方法。
3.網址。
4.promise方法 .then()。
===========
*/

axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    // console.log(response);
    // console.log(response.data);
    // console.log(response.data[0]);
    // console.log(response.data[0].name);
  });

/*
===========================
!!!!! 將資料顯示在網頁上 !!!!!
===========================
*/

const name = document.querySelector(".name");

axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    name.textContent = response.data[0].name;
  });

/*
===================
!!!!! 註冊帳號 !!!!!
===================
*/

const account = document.querySelector(".account");
const password = document.querySelector(".password");
const submmit = document.querySelector(".submmit");
// console.log(account, password, submmit);

function register(email, password) {
  let objData = {
    email,
    password,
  };

  axios
    .post("https://escape-room.hexschool.io/api/user/signup", objData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

submmit.addEventListener("click", function (e) {
  register(account.value, password.value);
});

/*
===================
!!!!! 登入帳號 !!!!!
===================
*/

const account2 = document.querySelector(".account2");
const password2 = document.querySelector(".password2");
const submmit2 = document.querySelector(".submmit2");

submmit2.addEventListener("click", function () {
  let objLogin = {
    email: account2.value,
    password: password2.value,
  };

  axios
    .post("https://escape-room.hexschool.io/api/user/signin", objLogin)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
