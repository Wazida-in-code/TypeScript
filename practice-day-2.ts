// 001
let val: unknown = "Hello TypeScript"
// console.log((val as string).length);
// console.log((<string>val).length);


// 002
let value: string | number = "100"
// console.log(Number(value) + 10); // 110
let risky = value as unknown as number
// console.log(risky + 10); // 10010 // It is risky because when we convert it to number the type treated as number but actually it is still a string


// 003
interface Product {
    title: string,
    price: number,
    inStock?: boolean
}

const product1: Product = {
    title: "BMW",
    price: 50000000,
    inStock: false
}

const product2: Product = {
    title: "Audi",
    price: 15000000
}

function productPrice(product:Product){
    // console.log(product.price);
}

productPrice(product1);
productPrice(product2);


// 004
type PaymentMethod = "cash" | "card" | "mobile"; // it can not do by interface because interface used for object & their propertis it can't explore unioun
interface Order {
    id: number,
    method: PaymentMethod
}

const item1: Order= {
    id: 1,
    method: "card"
}
// console.log(item1);


// 005
function getLastElement<T>(element: string[] | number[]):string | number {
    let lastElem = element.map(elem => elem)
    return lastElem[lastElem.length - 1]
}
// console.log(getLastElement([1,2,3]));
// console.log(getLastElement(['a', 'b', 'c']));
// console.log(getLastElement(["Oyshi", "Esha", "Ramisa", "Omor"]));



// 006
interface Container<T> {
    item: T 
}

const con1: Container<number> = {
    item: 100
}
// console.log(con1);

const con2: Container<string> ={
    item: "Books"
}
// console.log(con2);


// 007
interface hasId {
    id : number
}

function findById<T extends hasId>(user : T[], id: number){
    let findId = user.find(item => id === item.id)
        return findId
}

// console.log(findById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2));
// console.log(findById([{ id: , name: "A" }, { id: , name: "B" }], 3)); // there is missing id & syntax error



// 008
// OrderStatus: Placed, Shipped, Delivered, Cancelled. 
// enum OrderStatus {
//     Shipped = "Your Product have been Shipped!",
//     Delivered = "Your Product have been Delivered!",
//     Cancelled = "Your Request have been cancelled!"
// }
// // console.log(OrderStatus.Shipped);
// console.log(OrderStatus.Delivered);
// console.log(OrderStatus.Cancelled);



// 009
const appConfig = {
    theme: "dark blue",
    version: 4.5
}as const

// console.log(appConfig);

// appConfig.version = 5
// console.log(appConfig); //Error: TypeScript enum is not supported in strip-only mode

const colors = ["red", "blue", "green"] as const
// console.log(typeof colors);  // object
// console.log(typeof colors[0]); //string
// type colors = typeof colors[0] //[ 'red', 'blue', 'green' ]
// type colors = typeof colors[1] //[ 'red', 'blue', 'green' ]
// type colors = typeof colors[2]  // [ 'red', 'blue', 'green' ]
// type colors = typeof colors[3]
// console.log(colors);

type color = typeof colors[number]
const first: color = "blue"
console.log(first);



// 010
interface Employee {
    name: string,
    id: number,
    salary: number,
    department: string
}

function updateEmployee(employees: Partial<Employee>){
    return employees
}
type picking =  Pick<Employee, "name" | "id">
let pickSomething: picking = {
    name: "Rafi",
    id: 990
}

type removeing = Omit<Employee, "salary">
let removeSomething: removeing = {
    name: "Rafa",
    id: 111,
    department: "CSE"
}

// console.log(updateEmployee({ name: "Rafi" }));
// console.log(pickSomething);
// console.log(removeSomething);