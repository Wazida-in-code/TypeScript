// unione or set mutiple types

function countProduct (productName: string, productNumber: number | string): number{
    if (typeof productNumber === 'string'){
        productNumber = parseFloat(productNumber)
    }
    return productNumber += 10
}

console.log(countProduct("Anya", '10'));