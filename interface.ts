interface User {
    names: string,
    age: number,
    cgpa?: number
}


const tanha: User = {
    names : "Tanha", 
    age : 18,
    cgpa : 4.00
}

const robin: User = {
    names : "Robin", 
    age : 0,
    cgpa : 0
}

const team: User[] = [robin, tanha, {
    names: "Esha", 
    age: 18,
    cgpa: 4.00
}]


function printUser(user: User){
    console.log(`Name: ${user.names}`);
    console.log(`Age: ${user.age}`);
    console.log(`CGPA: ${user.cgpa}`);
}

// console.log(printUser(tanha));
// console.log(printUser({names: "Wazida", age: 18, cgpa: 4.00}));


function displayUser ({names, age, cgpa}:User):void {
    console.log(`Name: ${names}`);
    console.log(`Age: ${age}`);
    console.log(`CGPA: ${cgpa}`);
}
console.log(displayUser(robin));
console.log(displayUser({names: "Tanha", age:18, cgpa: 4.00}));

// extends
interface BigUser extends User {
    role: string
}

const userBig: BigUser = {
    names: "Wazida",
    cgpa : 3.99,
    age : 18,
    role: "Student"
}