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
console.log(findById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2));
