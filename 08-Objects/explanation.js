//We can access values of object using two methods:

//using . followed by key name if the key-name is a one word
//using square bracket and a quote


// accessing values using .
console.log(person.firstName)
console.log(person.lastName)

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])

/*Object Methods
There are different methods to manipulate an object. Let us see some of the available methods.

Object.assign: To copy an object without modifying the original object */

const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }

  const copyPerson = Object.assign({}, person)
  console.log(copyPerson);

  /*Getting object keys using Object.keys()
Object.keys: To get the keys or properties of an object as an array */

const keys = Object.keys(copyPerson)
console.log(keys);

const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

/*Getting object values using Object.values()
Object.values:To get values of an object as an array */

const values = Object.values(copyPerson)
console.log(values)

/*Getting object keys and values using Object.entries()
Object.entries:To get the keys and values in an array */

const entries = Object.entries(copyPerson)
console.log(entries)

/*Checking properties using hasOwnProperty()
hasOwnProperty: To check if a specific key or property exist in an object */

console.log(copyPerson.hasOwnProperty('name'))