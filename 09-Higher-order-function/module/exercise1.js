const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//forEach
countries.forEach((element) => console.log(element));

names.forEach(function(element2){
    console.log(element2)
})

numbers.forEach((element3) => console.log(element3));

//map
    //upperCase
const countriesToUpperCase = countries.map(function(element4){
    return element4.toUpperCase();
})
console.log(countriesToUpperCase);
    //getting countries length
const arrOfCountriesLength = countries.map((element5) => {
    return element5.length;
})
console.log(arrOfCountriesLength)
    //change each numbers to square
const numbersToSquare = numbers.map((element6) =>{
       const index = numbers.indexOf(1,2,3,4,5,6,7,8,9,10)
        return numbers[index] = "square"
    })
    
    console.log(numbersToSquare)
    //change each name to upperCase
const nameUpperCase = names.map((element7) => {
    return element7.toUpperCase();
})
console.log(nameUpperCase);
    //map products array to the corresponsive price
const productMap = products.map((element8) =>{
   
})
//console.log(productMap)

//FILTER
    //country with land
const countriesWithLand = countries.filter((element9) => {
    return element9.includes("land")
})
console.log(countriesWithLand)
    //countries with six charaacters
const countriesWith6characters = countries.filter((element10) => element10.length === 6)
console.log(countriesWith6characters)
    // with 6 letters or more
const countriesWith6LettersOrMore = countries.filter((element11) => {
    return element11.length >= 6
})
console.log(countriesWith6LettersOrMore)
    //start with E
const startWithE = countries.filter((element12) =>{
    return element12.startsWith("E")
})
console.log(startWithE)
    //filter prices
const filterPrices = products.filter((element13) =>{
    return element13.price
})
console.log(filterPrices);

//REDUCE
    //adding the number array
const sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sum)

//SOME AND EVERY
const lengthGreater = names.some((element14) =>{
    return element14.length > 7
})
console.log(lengthGreater);

const containLand = countries.every((element15) =>{
    return element15.includes("land")
})
console.log(containLand)

//FIND and FINDINDEX
const firstCountryWith6letter = countries.find((element16) =>{
    return element16.length === 6
})
console.log(firstCountryWith6letter)

const findIndex = countries.findIndex((element17) =>{
    return element17.length === 6
})
console.log(findIndex)