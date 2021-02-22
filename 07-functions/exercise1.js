function fullName(){
    let firstName = "Olumide"
    let lastName = "Ilesanmi"
    let fullName = firstName + " " + lastName
    return fullName;
}

console.log(fullName());

//
function fullName2(firstName2, lastName2){
    return `${firstName2} ${lastName2}`
}
console.log(fullName2("Olumide", "Ilesanmi"))

//adding 2 numbers
const addNumber = (num1, num2) => {
    let sum = num1 + num2
    return sum;
}

console.log(addNumber(2,2))

//area of rec
const areaOfRectangle = (length,width) => {
    let area = length*width
    return area;
}
console.log(areaOfRectangle(5,6))

//perimeter of a rec
const perimeterRec = (length2,width2) => {
    let perimeter = 2*(length2+width2)
    return perimeter;
}
console.log(perimeterRec(4,4))

//volumeOfRectPrism.
const volumeOfRectPrism = (length3, width3, heigth3) => {
    let volume = length3*width3*heigth3
    return volume;
}
console.log(volumeOfRectPrism(2,2,2))

//areaOfCircle
const areaOfCircle = (r) => {
    const areaCircle = Math.PI*r*r
    return areaCircle;
}
console.log(areaOfCircle(4))

//circumOfCircle
const circumOfCircle = radius => 2*Math.PI*radius
console.log(circumOfCircle(2));

//density
const density = (mass,volume) => mass/volume
console.log(density(4,2));

//speed
const speed = (distance,time) => distance/time
console.log(speed(6,2))

const weight = (mass2) => {
    const gravity = 9.8
    const w = mass2*gravity
    return w;
}
console.log(weight(5))

//convertCelciusToFahrenheit
const convertCelciusToFahrenheit = oC => {
    const oF = (oC*9/5) + 32
    return oF;
}
console.log(convertCelciusToFahrenheit(35))

//BMI
const BMI = (weightBmi,heightBmi) => {
    const bmi = weightBmi/(heightBmi*heightBmi)
    return bmi;
}
console.log(BMI(40,1.9))

const calculatedBMI = BMI(40,1.9)

if(calculatedBMI < 18.5){
    console.log(`Underweight`)
}else if(calculatedBMI>=18.5&&calculatedBMI<=24.9){
    console.log(`Normal weight`)
}else if(calculatedBMI>=25&&calculatedBMI<=29.9){
    console.log(`Overweight`)
}else{
    console.log(`Obese`)
}

// findMax
const  findMax = (firstNum, secondNum, thirdNum) => {
    const maximum = Math.max(firstNum, secondNum, thirdNum)
    return maximum;
}
console.log(findMax(23,49,10))