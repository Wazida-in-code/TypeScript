"use strict";
// map
const points = [2, 5, 7, 45, 76, 42, 87];
const maping = points.map(point => point + 10);
// console.log(maping);
// filter
const filtering = points.filter(point => point > 10);
// console.log(filtering);
// find 
const finding = points.find(point => point > 20);
console.log(finding);
