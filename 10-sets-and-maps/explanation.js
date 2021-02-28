//Creating an empty set
const companies = new Set()
console.log(companies);

//Creating set from array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLangauges = new Set(languages)
  console.log(setOfLangauges)

  //Adding an element to a set
  const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')

console.log(companies.size) // 5 elements in the set
console.log(companies)

//deleting an element
console.log(companies.delete('Google'))
console.log(companies.size);

//Checking an element in the set
console.log(companies.has('Apple'))

//clear
companies.clear()

console.log(companies)

//Union of sets
/*To find a union to two sets can be achieved using spread operator. 
Lets find the union of set A and set B (A U B)*/

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//Intersection of sets
/*To find an intersection of two sets can be achieved using filter.
 Lets find the union of set A and set B (A ∩ B)*/

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)

//Difference of sets
/* To find an the difference between two sets can be achieved using filter. 
Lets find the different of set A and set B (A \ B)*/

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)

//MAP
//Creating an empty Map
const map = new Map()
console.log(map);

  //Creating an Map from array
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)

  //Adding values to the Map
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

  //Getting a value from Map
console.log(countriesMap.get('Finland'))

  //Checking key in Map
//Check if a key exist in a map using has method. 
//It returns true or false.

console.log(countriesMap.has('Finland'))