let min = 1
let mun = 5
let mm =min + mun
console.log(mm)

let ser = 1
let ver = 5
let er =ser - ver
console.log(er)

const male = "jim"
const female = "asa"
const gender = male
console.log(gender)

let boys = 40
let girls = 21
let mod = boys % girls
console.log(mod)

let kfc = "plenty"
let republic = "plenty"
let result = kfc === republic
console.log(result)

let studentname = prompt('Enter Your Studentname:')
let mathMarks = parseFloat(prompt('Enter mark for maths(out of 100)'))
let englishMarks = parseFloat(prompt('Enter mark for english(out of 100)'))
let civicMarks = parseFloat(prompt('Enter mark for civic(out of 100)'))
let totalMarks = mathMarks + englishMarks + civicMarks
let averageMarks = totalMarks / 3;

let grade = (averageMarks >= 90) ? "A":
(averageMarks >= 80) ? "B":
(averageMarks >= 70) ? "C":
(averageMarks >= 60) ? "D":
(averageMarks < 50) ? "E": "F";

console.log(`/student report for ${studentname}`)
console.log(`mathMarks: ${mathMarks}`)
console.log(`englishMarks: ${englishMarks}`)
console.log(`civicMarks : ${civicMarks}`)
console.log(`totalMarks : ${totalMarks}`)
console.log(`averageMarks : ${averageMarks.toFixed(2)}`);

let performanceMessage = (grade === "A") ? "keep it up!" :
                         (grade === "B") ?"Good!": "more efficiency"; 

console.log(performanceMessage);



let Age = prompt('Input Your Age');
let Agegroup = (Age >= 18) ? "You are an Adult":
               (Age < 18) ? "You are not Adult": "You are a minor";

console.log(`age: ${Age}`);
console.log(Agegroup);

num1 = 18
num2 = 36
let Addition=num1 + num2
let substraction=num1 - num2
let Multiplication=num1 * num2
let division=num1/num2
let modulus=num1 % num2

console.log(Addition);
console.log(substraction);
console.log(Multiplication);
console.log(division);
console.log(modulus);














