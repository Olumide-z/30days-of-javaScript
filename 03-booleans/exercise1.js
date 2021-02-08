let firstName = "Olumide"; 
let lastName = "Ilesanmi"; 
let country = "Nigeria"; 
let city = "Lagos"; 
let age = 22; 
let isMarried = false; 
let year = 2021;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);


console.log(typeof "10" === 10);

console.log(parseInt('9.8') === 10);

//truthy and falsy values
let isMarried2 = true;
let trueValue = 4 > 3;
let falseValue = 5 > 8;

let name;
let isMarried3 = false;
let empty = null;

console.log(isMarried2, trueValue, falseValue, name, isMarried3, empty);

const code1 = "python";
const code2 = "jargon";

console.log(code1.length !== code2.length);

//date object

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());