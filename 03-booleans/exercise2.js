//cal area of triangle
let height = prompt("enter value for h:");
let base =  prompt("enter value for b:");

const area = (0.5*base*height);

console.log(`The area of the triangle is ${area}`)

//perimeter

let sideA = Number(prompt("enter a:"));
let sideB = Number(prompt("enter b"));
let sideC = Number(prompt("enter c"));

const perimeter = sideA + sideB + sideC;

console.log(`The perimeter of a triangle is ${perimeter}`)

// area and perimeter of a rectangle

let length = Number(prompt("enter length"));
let breadth = Number(prompt("enter breadth"));

const areaRec = length*breadth;
const perimeterRec = 2*(length+breadth);

console.log(`the area is ${areaRec} and perimeter is ${perimeterRec}`);

//area and circumference of a circle
let r = Number(prompt("enter r"));
const pi = 3.142;
const areaCircle = pi * r * r;
const circumference = 2*pi*r;

console.log(`the area is ${areaCircle} and circumference is ${circumference}`)

//
let hours = Number(prompt("enter hours"));
let rate = Number(prompt("Enter rate per hour"));

const earnings = hours * rate;

console.log(`Your weekly earnings is ${earnings}`)

//
let yourName = prompt("enter name");

const lName = yourName.length >= 7 

lName
? console.log("the name is long")
: console.log("name is short");

//

let fName = prompt("enter First Name")
let lasName = prompt("enter last Name")

const nameLength = fName < lasName;

nameLength
? console.log("your first name is shorter than last name")
: console.log("your last name is shorter my G");

//

let myAge = 250
let yourAge = 25

const diffrence = myAge - yourAge

diffrence
? console.log(`i am ${diffrence} older than you`)
: console.log(`i am ${diffrence} younger`)

//
let birthYear = Number(prompt("enter birth year"));

const ycd = birthYear >= 18;
const ageToDrive = 18 - birthYear;

ycd
? console.log(`you are ${birthYear}, you are old enough to drive`)
: console.log(`you are ${birthYear}, you would be allowed to drive after ${ageToDrive} years`)

//
const now2 = new Date();

const years = now2.getFullYear();
const month = now2.getMonth() + 1;
const date = now2.getDate();
const hour = now2.getHours();
const minutes = now2.getMinutes();

console.log(`${years}-${month}-${date} ${hour}:${minutes}`);
console.log(`${date}-${month}-${years} ${hour}:${minutes}`);
console.log(`${date}/${month}/${years} ${hour}:${minutes}`);
