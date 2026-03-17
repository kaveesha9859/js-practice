let students = [
    { name: "Sam", score: 78 },
    { name: "Kamal", score: 45 },
    { name: "Nimal", score: 92 },
    { name: "Saman", score: 33 },
    { name: "Dilani", score: 88 }
]

let passing = students.filter(student => student.score >=50 )


let failing = students.filter(student => student.score <50 )

let totalScore = students.reduce((sum,score) => sum+ score.score,0)

let average = totalScore/students.length



let passingNames = passing.map(student => student.name)
let failingNames = failing.map(student => student.name)



console.log(`Class Average: ${average}`)
console.log(`Passing Students: ${passing.length}`)
console.log(`Failing Students: ${failing.length}`)

console.log(`Passing: ${passingNames}`)
console.log(`Failing: ${failingNames}`)

