"use strict";
// 001
const getTicketPrice = (age) => {
    if (age < 5) {
        return 0;
    }
    else if (age <= 12) {
        return 100;
    }
    else if (age <= 59) {
        return 200;
    }
    else {
        return 120;
    }
};
// console.log(getTicketPrice(3)); //0
// console.log(getTicketPrice(10)); //100
// console.log(getTicketPrice(25)); //200
// console.log(getTicketPrice(65)); // 120
// 002
const getStockStatus = (stock) => {
    if (stock === 0) {
        return "Out of stock";
    }
    else if (stock <= 5) {
        return "Almost Sold Out";
    }
    else if (stock <= 20) {
        return "Available";
    }
    else {
        return "In Stock";
    }
};
const formatUserProfile = (user) => {
    return `${user.name} is ${user.age} years old and lives in ${user.city}`;
};
const calculateCartTotal = (products) => {
    const total = products.reduce((acc, item) => acc += item.price, 0);
    return total;
};
const getStudentResult = (student) => {
    const marks = student.marks;
    const totalMarks = marks.reduce((acc, mark) => acc += mark, 0);
    const average = totalMarks / marks.length;
    const result = average >= 40 ? "Passed" : "Failed";
    return ` { name: ${student.name}, average: ${average}, result: ${result} }`;
};
const canEdit = (role) => {
    if (role === "admin" || role === "editor") {
        return true;
    }
    return false;
};
const findProducts = (products, category) => {
    const selectCategory = products.filter(item => item.category === category);
    return selectCategory;
};
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];
const getPatientStatus = (patient) => {
    if (patient.type === "general") {
        return "General patient";
    }
    else if (patient.type === "emergency") {
        if (patient.emergencyLevel === 1) {
            return "Critical emergency";
        }
        else if (patient.emergencyLevel === 2) {
            return "Serious emergency";
        }
    }
    return "Moderate emergency";
};
const processTransaction = (balance, transaction) => {
    if (transaction.type === "deposit") {
        return balance += transaction.amount;
    }
    if (transaction.type === "withdraw") {
        if (transaction.amount > balance) {
            return "insufficient balance";
        }
    }
    return balance - transaction.amount;
};
console.log(processTransaction(5000, { type: "deposit", amount: 2000 })); // 7000
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 })); // 3000
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));
// 5000  (unchanged) 
// insufficient balance
