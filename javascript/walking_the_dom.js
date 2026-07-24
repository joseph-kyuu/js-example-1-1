/*
=========================
!!!!! 一般節點導覽屬性 !!!!!
=========================
*/

let nodeList = document.body.childNodes;
console.log(nodeList);

let firstChildNode = document.body.firstChild;
console.log(firstChildNode);

let lastChildNode = document.body.lastChild;
console.log(lastChildNode);

let hasNodes = document.body.hasChildNodes();
console.log(hasNodes);

let theParentNode1 = document.body.parentNode;
console.log(theParentNode1);

let theParentNode2 = document.head.parentNode;
console.log(theParentNode2);

let thePreviousSibling = document.body.previousSibling;
console.log(thePreviousSibling);

let theNextSibling = document.head.nextSibling;
console.log(theNextSibling);

/*
=========================
!!!!! 元素節點導覽屬性 !!!!!
=========================
*/

let htmlCollection = document.body.children;
console.log(htmlCollection);

let firstElementChildNode = document.body.firstElementChild;
console.log(firstElementChildNode);

let lastElementChildNode = document.body.lastElementChild;
console.log(lastElementChildNode);

let theparentElement1 = document.body.parentElement;
console.log(theparentElement1);

let theparentElement2 = document.head.parentElement;
console.log(theparentElement2);

let thepreviousElementSibling = document.body.previousElementSibling;
console.log(thepreviousElementSibling);

let thenextElementSibling = document.head.nextElementSibling;
console.log(thenextElementSibling);
