//setInterval Timer
// syntax
function callBack() {
    // code goes here
  }
  setInterval(callback, duration);

  function sayHello() {
    console.log('Hello')
  }
  setInterval(sayHello, 2000) // it prints hello in every 2 seconds

  //setTimeout
  function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000)

  /* forEach
forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, 
index parameter and array itself. The index and the array optional. */

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
  })

  // 
  arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
  });
  let sum = 0;
  const numbers = [1,2,3,4,5];
  numbers.forEach(num => sum += num))
  
  console.log(sum)

/*MAP
map: Iterate an array elements and modify the array elements. 
It takes a callback function with elements, index , array parameter and return a new array. */

//syntax
const modifiedArray = arr.map(function (element, index, arr) {
    return element
  })

const modifiedArray = arr.map((element,index) => element);

//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)

const names = ["olu", "sam"];
const nameUpper = names.map(function(na){
    return na.toUpperCase()
});
console.log(nameUpper);

/*filter
Filter: Filter out items which full fill filtering conditions and return a new array. */
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
//filter countries with the word land
const countriesContainingLand = countries.filter((country) => 
  country.includes("land")
)
console.log(countriesContainingLand);
//countries with five letters
const countriesWithFiveLetters = countries.filter((country) => 
    country.length === 5
)
console.log(countriesWithFiveLetters);

//scores > 80
const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

  const scoreGreaterThan80 = scores.filter((scoreG) =>
    scoreG.score > 80
  )
  console.log(scoreGreaterThan80)

  //Reduce
  //syntax
  arr.reduce((acc, cur) => {
    // some operations goes here before returning a value
   return 
  }, initialValue)

  const numbers = [1, 2, 3, 4, 5]
  const sum = numbers.reduce((acc, cur) => acc + cur, 0)
  
  console.log(sum)

/*every
every: Check if all the elements are similar in one aspect. It returns boolean*/

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string')

console.log(arrAllStr)

/*find
find: Return the first element which satisfies the condition*/

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

/*findIndex
findIndex: Return the position of the first element which satisfies the condition*/

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5

/*some
some: Check if some of the elements are similar in one aspect. It returns boolean */

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) => {
  return b === true
})

console.log(areSomeTrue) //true

//SORT
/*This works well for string array items but not for numbers. 
If number values are sorted as strings and it give us wrong result. Sort method modify the original array. 
It is recommended to copy the original data before you start using sort method. */

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

/*Sorting Object Arrays
When ever we sort objects in an array. We use the object key to compare. Lets see the example below.*/

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyo', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
//[{…}, {…}, {…}, {…}]