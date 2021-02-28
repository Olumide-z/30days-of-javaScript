//empty set
const companies = new Set()
console.log(companies);

//creating set using loop
const numbers = [1,2,3,4,5,6,7,8,9,10];
const setLoop = new Set()
for (const numb of numbers){
    setLoop.add(numbers)
}
console.log (setLoop);

//remove an element
//clear set
// set of 5 string elements from array
const names = [`Olumide`, `Samson`, `Emrys`, `Daniel`, `Ayomide`]
const stringElements = new Set()
for (const name of names){
    stringElements.add(names)
}
console.log(stringElements);

//map
countries = [
    [`Ghana`, `Nigeria`],
    [`Korea`, `China`],
    [`Mali`,  `Spain`],
    [`USA`, `UK`]
]
const map = new Map(countries)
console.log(map)
console.log(map.size)
