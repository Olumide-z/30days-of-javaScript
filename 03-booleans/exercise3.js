//changing date format to 2digits
const rightNow = new Date();


const myDate = ("0" + rightNow.getDate()).slice(-2);
const myMonth = ("0" + (rightNow.getMonth() + 1)).slice(-2);
const myHours = ("0" + rightNow.getHours()).slice(-2);
const myMin = ("0" + rightNow.getMinutes()).slice(-2);

const myYear = rightNow.getFullYear();


console.log(`${myYear}/${myMonth}/${myDate} ${myHours}:${myMin}`);