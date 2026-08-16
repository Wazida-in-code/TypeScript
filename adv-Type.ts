type Gender = "Female" | "Male"
type Student = {
    name: string,
    id: number,
    semester: number,
    dept: string,
    cgpa: number,
    gender: Gender
}

const Omor: Student = {
    name: "Omor",
    id: 1,
    semester: 1,
    dept: "CST",
    cgpa: 4.00,
    gender: "Male"
}
// console.log(Omor);


const Oyshi: Student = {
    name: "Oyshi",
    id: 11,
    semester: 2,
    dept: "English",
    cgpa: 3.99,
    gender: "Female"
}
// console.log(Oyshi);