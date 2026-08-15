// 001
const nameAge = (name: string, age: number): string =>{
    return `${name} is ${age} years old.`
}
// console.log(nameAge("Tanha", 18));
// console.log(nameAge("Amina", 22));


// 002
const productData = ( productName: string, price: number, availability: boolean): string => {
    return `${productName} cost ${price} and is available: ${availability}`          
}
// console.log(productData("Laptop", 45000, true));     //Laptop cost 45000 and is available: true


// const students = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];

// 003
const countStudents = (students: string[]): string => {
    let totalStudent = students.length
    return `Total student: ${totalStudent}`
}
// console.log(countStudents(["Amina", "Rahim", "Karim", "Salma", "Rafi"]));  //Total student: 5


// 004
let user: {name: string, email?: string} = 
{
    name: "Esha"
}
// console.log(`Name: ${user.name}, Email: ${user.email || "Not provided"}`)


// 005
const checkEvenOdd = (number: number): boolean => {
    if (number % 2 === 0){
        return true
    }
    return false
}
// console.log(checkEvenOdd(8)); //true
// console.log(checkEvenOdd(5)); //false


// 006
const sumAll = (...numbers: number[]): number => {
    let total = 0
    for (let i=0; i < numbers.length; i++){
        total += numbers[i]
    }
    return total
}
// console.log(sumAll(1,2,3,4)); //10


// 007
const arr1: number[] = [1,2,3];
const arr2: number[] = [4,5,6];

const allArr: number[] = [...arr1, ...arr2]
// console.log(allArr); //[ 1, 2, 3, 4, 5, 6 ]


// 008
// const checkPositiveNagetive = (number: number): string => {
//     if (number > 0){
//         return "Positive"
//     }
//     return "Nagetive"
// }
// console.log(checkPositiveNagetive(-30));

const checkPositiveNagetive = (number: number):string => number > 0? "Positive": "Nagetive"
// console.log(checkPositiveNagetive(-30));


// 009
let userName: string | undefined;
// console.log(userName?? "Guest");


// 010
let testUnknown: unknown = "hello"
if (typeof testUnknown === 'string'){
    // console.log(testUnknown);
}
else {
    // console.log(typeof testUnknown, testUnknown);
}


// 011
let userInfo = ({
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML",  "CSS",  "TypeScript"],
  active: true
})

// console.log(`Name: ${userInfo.name}
// Age: ${userInfo.age}
// Email: ${userInfo.email}
// Skills: ${userInfo.skills}
// Active: ${userInfo.active}`);


// 012
const shoppingCart = {
    name: "Ramisa",
    product: ["Dress", "Bag", "Makeup", "Book", "Grill", "Ice-cream"],
    itemCount: 6,
    price: 10000,
    address: "Chattogram, Bangladesh",
    isPaid : false,
    paymentMethod: "Cash"
}
console.log(`Name: ${shoppingCart.name}
Product: ${shoppingCart.product}
Item: ${shoppingCart.itemCount}
Total-Price: ${shoppingCart.price}
Payment-Method: ${shoppingCart.paymentMethod}
Paid: ${shoppingCart.isPaid}
Address: ${shoppingCart.address}`);