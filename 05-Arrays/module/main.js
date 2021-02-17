import { countries } from "./countries.js";
import { webTechs } from './web_techs.js';

console.log(countries);
console.log(webTechs);

//
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const array = text.split(" ");
console.log(array);
console.log(array.length);

//
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("meat");
shoppingCart.push("sugar");
shoppingCart.splice(4,1);
shoppingCart[3] = "Green Tea"

console.log(shoppingCart);

//
let index1 = countries.indexOf("Ethiopia");
if(index1 != -1){
    console.log("ETHIOPIA")
}else{
    countries.push("Ethiopia")
    console.log(countries)
}

//

let index2 = webTechs.indexOf("Sass");
if(index2 != -1){
    console.log("Sass is a CSS preprocess")
}else{
    webTechs.push("Sass")
    console.log(webTechs)
}

//concat

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);