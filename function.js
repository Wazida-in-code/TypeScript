"use strict";
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
let result1 = multiply(12, 2);
// console.log(result1);
function shopping(foods, prices) {
    let total = 0;
    let items = foods;
    total += prices;
    return [items, total];
}
console.log(shopping("Pen", 100));
console.log(shopping("Notepad", 90));
