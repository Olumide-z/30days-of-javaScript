//assert
console.assert(10>2*10, '10 is greater than 2*10')
//warning
console.warn('warning my boy')
//err
console.error('error my boy')
//time

const countries2 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

  console.time('regular for loop')
  for(let i=0; i<countries2.length; i++){
      console.log(countries2[i])
  }
  console.timeEnd('Regular for loop')
  
console.time('for of loop')
for (const [name, city] of countries2) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries2.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')