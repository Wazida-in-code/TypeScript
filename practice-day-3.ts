// 001-Gaming Age Rating Checker
const getAgeRatingAccess = (age: number): string => {
    if (age < 7){
        return "E (Everyone)"
    }
    else if (age <= 12){
        return "E10+ (Everyone 10+)"
    }
    else if (age <= 16){
        return "T (Teen)"
    }
    return "M (Mature)"
}

// console.log(getAgeRatingAccess(5)); // "E (Everyone)"
// console.log(getAgeRatingAccess(10)); // "E10+ (Everyone 10+)"
// console.log(getAgeRatingAccess(15)); // "T (Teen)"
// console.log(getAgeRatingAccess(20)); // "M (Mature)"



// 002- Smart Home WiFi Signal Status
const getSignalStatus = (strength: number): string => {
    if (strength === 0 || strength <= 20){
        return "Weak"
    }
    else if (strength <= 50){
        return "Fair"
    }
    else if (strength <= 80){
        return "Good"
    }
    return "Excellent"
}

// console.log(getSignalStatus(10)); // "Weak"
// console.log(getSignalStatus(35)); // "Fair"
// console.log(getSignalStatus(65)); // "Good"
// console.log(getSignalStatus(95)); // "Excellent"
// console.log(getSignalStatus(20)); // "Week"
// console.log(getSignalStatus(21)); // "Fair"
// console.log(getSignalStatus(80)); // "Good"
// console.log(getSignalStatus(81)); // "Excellent"


// 003-Esports Player Profile Card
interface Player{
    username: string
    level: number
    region: string
}

const formatPlayerCard = (player: Player): string => {
    return `${player.username} is a Level ${player.level} player from ${player.region}.`
}

// console.log(formatPlayerCard({
//     username: "ShadowByte",
//     level: 42,
//     region: "Asia"
// }));  // "ShadowByte is a Level 42 player from Asia."  


// 004-Music App Listening Time Tracker

interface Track {
    title: string;
    minutes: number;
}


const calculateTotalListeningTime = (tracks: Track[]):number => {
    const totalMinuts = tracks.reduce((acc, item) => acc+=item.minutes ,0)
    return totalMinuts
}

const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];
// console.log(calculateTotalListeningTime(tracks)); //10

const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
 
// console.log(calculateTotalListeningTime(tracks2)); // 7


// 005-Esports Tournament Player Stats
interface Players {
    name: string;
    scores: number[];
}
const getPlayerStats = (player: Players):{ name: string; average: number; rank: string } => {
    const scores = player.scores
    
    const total = scores.reduce((acc, sum) => acc+=sum ,0)
    
    const average = total / scores.length
    
    if (average >= 80){
        return { name: player.name, average: average, rank: "MVP" }
    }
    return { name: player.name, average: average, rank: "Rookie" }
}

// console.log(getPlayerStats({
//     name: "Nova",
//     scores: [90, 85, 95, 80]
// }));  //{ name: "Nova", average: 87.5, rank: "MVP" }


// console.log(getPlayerStats({
//     name: "Zex",
//     scores: [60, 55, 70, 50]
// }));  //{ name: "Zex", average: 58.75, rank: "Rookie" }



// 006-Music App Feature Access