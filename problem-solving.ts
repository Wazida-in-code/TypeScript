// 001
const getTicketPrice = (age: number): number => {
    if (age < 5){
        return 0
    }
    else if (age <= 12){
        return 100
    }
    else if (age <= 59){
        return 200
    }
    else{
        return 120
    }
}

// console.log(getTicketPrice(3)); //0
// console.log(getTicketPrice(10)); //100
// console.log(getTicketPrice(25)); //200
// console.log(getTicketPrice(65)); // 120


// 002
const getStockStatus = (stock: number): string => {
    if (stock === 0){
        return "Out of stock"
    }
    else if (stock <= 5){
        return "Almost Sold Out"
    }
    else if (stock <= 20){
        return "Available"
    }
    else{
        return "In Stock"
    }
}

// console.log(getStockStatus(0)); //Out of stock
// console.log(getStockStatus(3));  //Almost Sold Out
// console.log(getStockStatus(12));  //Available
// console.log(getStockStatus(50));  //In Stock


// 003

// type User = {
//     name:string
//     age: number
//     city: string
// }

interface User  {
    name:string
    age: number
    city: string
}

const formatUserProfile = (user: User): string => {
    return `${user.name} is ${user.age} years old and lives in ${user.city}`
}

// console.log(formatUserProfile({
//     name: "Tanha",
//     age: 18,
//     city: "Dhaka"
// }));


// 004
type Product = {
     name: string
     price: number
}
const calculateCartTotal = (products: Product[]): number => {
 
    const total = products.reduce((acc, item) => acc +=item.price , 0)
    return total
}

// console.log(calculateCartTotal([
//     { name: "Keyboard", price: 1500 },
//     { name: "Mouse", price: 800 },
//     { name: "USB Cable", price: 300 }
// ]));  // 2600

// console.log(calculateCartTotal([
//     { name: "Book", price: 500 },
//     { name: "Pen", price: 50 },
//     { name: "Bag", price: 1200 }
// ]));  // 1750



// 005
interface Student {
    name: string
    marks: number[]
}

interface Result { 
    name: "Rafi", 
    average: 82.5, 
    result: "Passed" 
}

const getStudentResult = (student: Student):string => {
    const marks: number[] = student.marks

    const totalMarks:number = marks.reduce((acc: number, mark: number) => acc+=mark , 0)

    const average:number = totalMarks / marks.length

    const result: string = average >= 40? "Passed" : "Failed"

    return` { name: ${student.name}, average: ${average}, result: ${result} }`


}
// console.log(getStudentResult(({
//     name: "Rafi",
//     marks: [80, 75, 90, 85]
// })));  //{ name: "Rafi", average: 82.5, result: "Passed" }


// console.log(getStudentResult({
//     name: "Nabil",
//     marks: [30, 35, 40, 25]
// }));  // { name: "Nabil", average: 32.5, result: "Failed" }


// 006
type Role = 'admin' | 'editor' | 'viewer'
const canEdit = (role: Role): boolean => {
    if (role === "admin"  || role === "editor"){
        return true
    }
    return false
}
// console.log(canEdit("admin")); // true
// console.log(canEdit("editor")); // true
// console.log(canEdit("viewer")); // false


// 007
interface Products {
    name: string
    price: number
    category: string 
}

const findProducts = (products: Products[], category: string):Product[] => {
    const selectCategory:Product[] = products.filter(item => item.category === category)

    return selectCategory
}
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];

// console.log((findProducts(products, "phone")));
// console.log(findProducts(products, "laptop"));



// 008
interface GeneralPatient {
    name: string
    age: number
    type: "general"
}

interface EmergencyPatient {
    name: string
    age: number
    type: "emergency"
    emergencyLevel: 1 | 2 | 3
}


const getPatientStatus = (patient: GeneralPatient | EmergencyPatient):string => {
    if (patient.type === "general"){
        return "General patient"
    }
    else if (patient.type === "emergency"){
        if (patient.emergencyLevel === 1){
            return "Critical emergency"
        }
        else if (patient.emergencyLevel === 2){
            return "Serious emergency"
        }
    }
    return "Moderate emergency"
}

// console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" })); // "General patient"
// console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 })); // "Critical emergency"
// console.log(getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 }));// "Moderate emergency"


// 009
type Deposit = {
    type: string
    amount: number
}
type Withdrawal = {
    type: string
    amount: number
}

const processTransaction = (balance: number, transaction: Deposit | Withdrawal):string|number => {
    if (transaction.type === "deposit"){
        return balance += transaction.amount
    }
    
    if (transaction.type === "withdraw"){
        if (transaction.amount > balance){
            return "insufficient balance"
        }
    }
    
    return balance - transaction.amount
}

console.log(processTransaction(5000, { type: "deposit", amount: 2000 })); // 7000
 
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 })); // 3000

console.log(processTransaction(5000, { type: "withdraw", amount: 7000 })); // insufficient balance
