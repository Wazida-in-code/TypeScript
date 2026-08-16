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

console.log(findById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2));
