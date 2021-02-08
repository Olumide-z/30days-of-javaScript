//
let age = prompt("Enter your age");
let ageToDrive = 18 - age 

if(age >= 18){
    console.log("You are old enough to drive.")
}else{
    console.log(`You are left with ${ageToDrive} years to drive.`)
}

//
let age2 = prompt("enter your age");
const myAge = 22;
let ageDifference1 = myAge - age2
let ageDifference2 = age2 - myAge

if(age2<myAge){
    console.log(`i am ${ageDifference1} years older than you`)
}else{
    console.log(`you are ${ageDifference2} years older`)
}

//
let a = 4
let b = 3

if(a>b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${a} is lesser than ${b}`)
}

tO = a > b

tO
? console.log(`${a} is greater than ${b}`)
: console.log(`${a} is lesser than ${b}`)

// even and odd number

let num = prompt("enter Number")

if(num % 2 === 0){
    console.log(`${num} is an even number`)
}else{
    console.log(`${num} is an odd number`)
}