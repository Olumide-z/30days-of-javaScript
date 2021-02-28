//union of sets
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(c)

//intersection
let c1 = a.filter((num) => B.has(num))
let C1 = new Set(c1)
console.log(C1)