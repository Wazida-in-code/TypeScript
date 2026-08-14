function multiply(num1: number, num2:number): number{
    let result = num1 * num2;
    return result
}

let result1: number = multiply(12, 2)
// console.log(result1);


function shopping (foods: string, prices: number): [string, number]{
    let total = 0
    let items = foods;
    total += prices
    return [items, total]
}
// console.log(shopping("Pen", 100));
// console.log(shopping("Notepad", 90));



let complex = (n1:number, n2:number, n3:number, n4:number):number =>  {
    return n1+n2-n3*n4
} 
console.log(complex(20, 12, 6, 4));