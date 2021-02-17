//empty array
const arr = [];
//
const arr1 = [1, 2, 3, 6, 6, 5, 6];
console.log(arr1.length);
let firstNum = arr1[0];
let midNum = arr1[3];
let lastNum = arr1.length - 1;

console.log(firstNum, midNum, lastNum);

let mixedDataTypes = ['Olumide', 3, 'red', null, true, 5];
console.log(mixedDataTypes.length);

//
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length)
let firstCompany = itCompanies[0];
let secondCompany = itCompanies[1];
let thirdCompany = itCompanies[2];
let midCompany = itCompanies[3];
let fifthCompany = itCompanies[4];
let sixthCompany = itCompanies[5];
let lastCompany = itCompanies[6];

console.log(firstCompany, midCompany, lastCompany);
console.log(firstCompany, secondCompany, thirdCompany, midCompany, fifthCompany, sixthCompany, lastCompany);

console.log(firstCompany.toUpperCase(),secondCompany.toUpperCase(), thirdCompany.toUpperCase(), midCompany.toUpperCase(), fifthCompany.toUpperCase() , sixthCompany.toUpperCase(), lastCompany.toUpperCase());

console.log(itCompanies.toString() + "" + "are big IT companies.")

//checking if an element exist in an array
let index = itCompanies.indexOf("Youtube");
if(index != -1){
    console.log("it exist in the array")
}else{
    console.log("it does not exist")
}

//sort
let sorting = itCompanies.sort();
console.log(sorting);

//reverse
let reversing = itCompanies.reverse();
console.log(reversing);

//slice
let slicing = itCompanies.slice(0,4);
let slicing2 = itCompanies.slice(4,8);

console.log(slicing);
console.log(slicing2);

//removin
itCompanies.pop();
console.log(itCompanies);

itCompanies.splice(2,2);
console.log(itCompanies);

itCompanies.shift();
console.log(itCompanies);


console.log(itCompanies.splice());

