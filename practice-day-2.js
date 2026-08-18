"use strict";
// 001
let val = "Hello TypeScript";
// console.log((val as string).length);
// console.log((<string>val).length);
// 002
let value = "100";
// console.log(Number(value) + 10); // 110
let risky = value;
const product1 = {
    title: "BMW",
    price: 50000000,
    inStock: false
};
const product2 = {
    title: "Audi",
    price: 15000000
};
function productPrice(product) {
    // console.log(product.price);
}
productPrice(product1);
productPrice(product2);
const item1 = {
    id: 1,
    method: "card"
};
// console.log(item1);
// 005
function getLastElement(element) {
    let lastElem = element.map(elem => elem);
    return lastElem[lastElem.length - 1];
}
const con1 = {
    item: 100
};
// console.log(con1);
const con2 = {
    item: "Books"
};
function findById(user, id) {
    let findId = user.find(item => id === item.id);
    return findId;
}
// console.log(findById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2));
// console.log(findById([{ id: , name: "A" }, { id: , name: "B" }], 3)); // there is missing id & syntax error
// 008
// OrderStatus: Placed, Shipped, Delivered, Cancelled. 
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Shipped"] = "Your Product have been Shipped!";
    OrderStatus["Delivered"] = "Your Product have been Delivered!";
    OrderStatus["Cancelled"] = "Your Request have been cancelled!";
})(OrderStatus || (OrderStatus = {}));
// console.log(OrderStatus.Shipped);
// console.log(OrderStatus.Delivered);
// console.log(OrderStatus.Cancelled);
// 009
const appConfig = {
    theme: "dark blue",
    version: 4.5
};
// console.log(appConfig);
// appConfig.version = 5
// console.log(appConfig); //Error: TypeScript enum is not supported in strip-only mode
const colors = ["red", "blue", "green"];
console.log(typeof colors);
console.log(typeof colors[0]);
