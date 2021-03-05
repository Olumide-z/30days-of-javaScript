/*Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable. */
    //Destructing Arrays
  const numbers = [1, 2, 3]
  let [numOne, numTwo, numThree] = numbers

  console.log(numOne, numTwo, numThree)
  //1 2 3

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd)
  console.log(backEnd)
 // ["HTML", "CSS", "JS", "React"]
 // ["Node", "Express", "MongoDB"]

 //If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

  const numbers = [1, 2, 3]
  let [numOne, , numThree] = numbers //2 is omitted

  console.log(numOne, numThree)
//1 3

//We can use default value in case the value of array for that index is undefined:

const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  
//Asabeneh Brook David John

//Destructuring Object
/*When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object.*/

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)
//20 10 200 undefined

//Renaming during structuring
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width: w, heigh: h, area: a, perimeter: p } = rectangle
  
  console.log(w, h, a, p)

  //Object parameter without destructuring
// Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect)) // 60

  //Object parameter with destructuring
const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
  }
  
console.log(calculatePerimeter(rect)) // 60

//Spread or Rest Operator
/*When we destructure an array we use the spread operator(...) to get the rest elements as array. 
In addition to that we use spread operator to spread arr elements to another array.*/

    //Spread operator to get the rest of array elements
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3)
console.log(rest)
//1 2 3
//[4, 5, 6, 7, 8, 9, 10]

  //Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)
//[0, 2, 4, 6, 8, 10]
//[1, 3, 5, 7, 9]
//[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

  //Spread operator to copy object
  const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
  const copiedUser = {...user}
  console.log(copiedUser)
