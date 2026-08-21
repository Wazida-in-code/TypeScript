"use strict";
// 001
const getSignalStatus = (percentage) => {
    if (percentage <= 25) {
        return "Poor";
    }
    else if (percentage <= 55) {
        return "Fair";
    }
    else if (percentage <= 85) {
        return "Good";
    }
    return "Excellent";
};
const formatTicketConfirmation = (ticket) => {
    return `${ticket.name}'s ticket for ${ticket.movie} is confirmed at ${ticket.time} PM.`;
};
// console.log(formatTicketConfirmation({ name: "Jamal", movie: "Inception", time: "6:00 PM" }
// ));
// console.log(formatTicketConfirmation({ name: "Nabila", movie: "Interstellar", time: "9:15 PM" }
// ));
// 003
const calculateWeeklySteps = (steps) => {
    const total = steps.reduce((acc, sum) => acc + sum, 0);
    return total;
};
const calculateOrderTotal = (items) => {
    const totalTaka = items.reduce((num, item) => num + item.price, 0);
    return totalTaka;
};
const getWeatherAdvice = (weather) => {
    if (weather === "sunny") {
        return "Wear sunscreen";
    }
    else if (weather === "rainy") {
        return "Carry an umbrella";
    }
    return "Bring a light jacket";
};
const findOnDutyEmployees = (employees) => {
    const onDutyEmp = employees.filter(employee => employee.onDuty === true);
    return onDutyEmp;
};
const getDistanceSummary = (distances) => {
    const totalNum = distances.reduce((nums, sums) => sums + nums, 0);
    const averages = totalNum / distances.length;
    return {
        total: totalNum,
        average: isNaN(averages) ? 0 : averages
    };
};
// console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([]));
