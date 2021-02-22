
//quadratic 
function solve(a, b, c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return result + " " + result2;
}
console.log(solve(1, 1, -1));

//printArray
const ar2 = Array => { return Array; }
const numbers = [1, 22, 3, 1, 5, 4, 5];
console.log(ar2(numbers))

//Date
function theDate(){
const rightNow = new Date();


const myDate = ("0" + rightNow.getDate()).slice(-2);
const myMonth = ("0" + (rightNow.getMonth() + 1)).slice(-2);
const myHours = ("0" + rightNow.getHours()).slice(-2);
const myMin = ("0" + rightNow.getMinutes()).slice(-2);

const myYear = rightNow.getFullYear();
const format = (`${myYear}/${myMonth}/${myDate} ${myHours}:${myMin}`)
return format;

}


console.log(theDate());
