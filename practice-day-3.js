"use strict";
// 001-Gaming Age Rating Checker
const getAgeRatingAccess = (age) => {
    if (age < 7) {
        return "E (Everyone)";
    }
    else if (age <= 12) {
        return "E10+ (Everyone 10+)";
    }
    else if (age <= 16) {
        return "T (Teen)";
    }
    return "M (Mature)";
};
// console.log(getAgeRatingAccess(5)); // "E (Everyone)"
// console.log(getAgeRatingAccess(10)); // "E10+ (Everyone 10+)"
// console.log(getAgeRatingAccess(15)); // "T (Teen)"
// console.log(getAgeRatingAccess(20)); // "M (Mature)"
// 002- Smart Home WiFi Signal Status
const getSignalStatus = (strength) => {
    if (strength === 0 || strength <= 20) {
        return "Weak";
    }
    else if (strength <= 50) {
        return "Fair";
    }
    else if (strength <= 80) {
        return "Good";
    }
    return "Excellent";
};
console.log(getSignalStatus(10)); // "Weak"
console.log(getSignalStatus(35)); // "Fair"
console.log(getSignalStatus(65)); // "Good"
console.log(getSignalStatus(95)); // "Excellent"
console.log(getSignalStatus(20)); // "Excellent"
console.log(getSignalStatus(21)); // "Excellent"
console.log(getSignalStatus(80)); // "Excellent"
console.log(getSignalStatus(81)); // "Excellent"
