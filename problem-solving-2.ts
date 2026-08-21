// 001
const getSignalStatus = (percentage:number): string => {
    if (percentage <= 25){
        return "Poor"
    }
    else if (percentage <= 55){
        return "Fair"
    }
    else if(percentage <= 85){
        return "Good"
    }
    return "Excellent"
}

// console.log(getSignalStatus(15));
// console.log(getSignalStatus(15));
// console.log(getSignalStatus(40));
// console.log(getSignalStatus(70));
// console.log(getSignalStatus(95));



// 002
interface Ticket {
    name: string
    movie: string
    time: string
}
const formatTicketConfirmation = (ticket: Ticket): string =>{
    return `${ticket.name}'s ticket for ${ticket.movie} is confirmed at ${ticket.time} PM.`
}

// console.log(formatTicketConfirmation({ name: "Jamal", movie: "Inception", time: "6:00 PM" }
// ));
// console.log(formatTicketConfirmation({ name: "Nabila", movie: "Interstellar", time: "9:15 PM" }
// ));



// 003
const calculateWeeklySteps = (steps: number[]): number => {
    const total:number = steps.reduce((acc, sum) => acc+sum, 0)
    return total
}

// console.log(calculateWeeklySteps([3000, 5200, 4100]));
// console.log(calculateWeeklySteps([]));



// 004
interface Order {
    name: string
    price: number
}
const calculateOrderTotal = (items: Order[]) => {
    const totalTaka:number = items.reduce((num:number, item:Order) => num + item.price, 0)
    return totalTaka
}
// console.log(calculateOrderTotal([{name:"Burger",price:250},{name:"Fries",price:90},{name:"Soda",price:60}]));

// console.log(calculateOrderTotal([{name:"Pizza",price:500}]));



//005
type Weather = "sunny"|"rainy"|"cloudy"
const getWeatherAdvice = (weather:Weather):string => {
    if(weather === "sunny"){
        return "Wear sunscreen"
    }
    else if(weather === "rainy"){
        return "Carry an umbrella"
    }
    return "Bring a light jacket"
}

// console.log(getWeatherAdvice("sunny"));


// 006
interface Employees {
    name: string
    onDuty: boolean
}
const findOnDutyEmployees = (employees: Employees[]):Employees[] => {
    const onDutyEmp = employees.filter(employee => employee.onDuty === true)
    return onDutyEmp
}

// console.log(findOnDutyEmployees([{name:"Lima",onDuty:true},{name:"Karim",onDuty:false}]));


// 007
type Distance = {
    total: number
    average: number
}
const getDistanceSummary = (distances: number[]) => {
    const totalNum:number = distances.reduce((nums,sums) => sums+nums, 0)
    const averages:number = totalNum/distances.length

    return{
        total: totalNum,
        average: isNaN(averages)?0:averages
    }
}

// console.log(getDistanceSummary([4, 6, 5, 9]));
// console.log(getDistanceSummary([]));


