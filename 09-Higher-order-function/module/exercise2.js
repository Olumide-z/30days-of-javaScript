const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products2 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//
const priceSum = products2.reduce((acc, cur) => {
    return acc + cur
}, 0)
console.log(priceSum)