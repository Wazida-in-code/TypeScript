// rest
const smartDeviceInfo = {
    deviceName: "Laptop",
    price: 34500,
    isGood: true
}

const {deviceName: itemName, ...othersInfo} = smartDeviceInfo;

// console.log(smartDeviceInfo);
// console.log(itemName);
// console.log(othersInfo);



// spread
const list1: number[] = [21, 34, 76, 87, 34];
const list2: number[] = [54, 87, 32, 65, 90];
const frnds: string[] = ["Tanha", "Farhana", "Owafa"]

const allList: number[] = [...list1, ...list2];
console.log(allList);