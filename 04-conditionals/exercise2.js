// grades
let score = prompt("enter your test score");

if(score>=80 && score<=100){
    console.log("your grade is A")
}else if(score>=70 && score<=79){
    console.log("your grade is B") 
}else if(score>=60 && score<=69){
    console.log("your grade is C") 
}else if(score>=50 && score<=59){
    console.log("your grade is D") 
}else if(score>=0 && score<=49){
    console.log("your grade is F") 
}else{
    console.log(`the score is invalid, please check well`)
}

//
let mon = prompt("enter month");

const month = mon.toLowerCase();


if(month === "september" || month === "october" || month === "november"){
    console.log(`the season is Autumn`)
}else if(month === "december" || month === "january" || month === "february"){
    console.log(`the season is Winter`)
}else if(month === "march" || month === "april" || month === "may"){
    console.log(`the season is Spring`)
}else if(month === "july" || month === "august" || month === "june"){
    console.log(`the season is Winter`)
}else{
    console.log(error)
}

//
let entDay = prompt("enter day");
const eD = entDay.toLowerCase();

if(eD === "monday" || eD === "tuesday" || eD === "wednessday" || eD === "thursday" || eD === "friday"){
    console.log(`${eD} is a working day`)
}else if(eD === "saturday" || eD === "sunday"){
    console.log(`${eD} is a weekend`)
}else{
    console.log("error")
}