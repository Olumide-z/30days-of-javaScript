const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort();

console.log(ages);

let max = Math.max(...ages);
let min = Math.min(...ages);
console.log(max, min)