/*
1.建立 HTML 結構。
2.取得 DOM 節點。
3.新增按鈕綁定事件監聽器。
4.確認可取得輸入欄位的值。
5.處理資料。
6.清單渲染
  7.使用 forEach() 組字串，使用參數item、index。
  8.使用 innerHTML 解析 HTML 結構。
----- 以下為新知識點
  9.HTML 自訂屬性 data-*
10.事件委派綁定事件監聽器，以利刪除按鈕使用。
11.確認點擊到的是刪除按鈕。
  12.使用 contins()，確認點擊的是刪除按鈕，不是就 return。
  13.使用 getAttribute()，確認點擊到的是哪一個刪除按鈕。
  14.使用 splice()，刪除點擊到的清單項目。
*/

const button = document.querySelector(".button");
const todo = document.querySelector(".todo");
const list = document.querySelector(".list");
const cancel = document.querySelector(".cancel");

// 全域資料
let toDoArr = [];

// 處理資料
button.addEventListener("click", function (e) {
  let toDoObj = {
    content: todo.value,
  };
  toDoArr.push(toDoObj);
  listRender();
});

// 刪除按鈕
list.addEventListener("click", function (e) {
  // 確認點擊的是刪除按鈕
  if (!e.target.classList.contains("cancel")) {
    return;
  }
  // 確認點擊到的是哪一個刪除按鈕
  let toDoNumn = e.target.getAttribute("data-num");
  // 刪除點擊到的清單項目。
  toDoArr.splice(toDoNumn, 1);
  // 渲染清單
  listRender();
});

// 渲染清單
function listRender() {
  let str = "";
  toDoArr.forEach(function (item, index) {
    str += `<li style="display:flex; margin-bottom:1rem;"><p style="margin-top:0; margin-bottom:0; margin-right:1rem;">${item.content} </p><input class='cancel' type='button' value='刪除' data-num='${index}'></li>`;
  });
  list.innerHTML = str;
}
