// syntax
class ClassName {
    //  code goes here
}

//Class Instantiation
/*Instantiation class means creating an object from a class. 
We need the keyword new and we call the name of the class after the word new.
*/
//Let us create a dog object from our Person class.

class Person {
  // code goes here
}
const person = new Person()
console.log(person)
//Person {}

//Class contructor
/*The constructor function starts with a keyword constructor followed by a parenthesis. 
Inside the parenthesis we pass the properties of the object as parameter. 
We use the this keyword to attach the constructor parameters with the class.*/

/*The following Person class constructor has firstName and lastName property. 
These properties are attached to the Person class using this keyword. This refers to the class itself.
*/
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person()

console.log(person)
//Person {firstName: undefined, lastName}

/*All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties. 
Let us pass value at this time when we instantiate the class. */

class Person{
    constructor(firstName, lastName){
        thid.firstName = firstName
        this.lastName = lastName
    }
}
const person1 = new Person('Olumide', 'Ilesanmi')
console.log(person1)

//Person {firstName: "Asabeneh", lastName: "Yetayeh"}

/** As we have stated at the very beginning that once we create a class we can create many object using the class. 
Now, let us create many person objects using the Person class. */
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person2)
console.log(person3)

//we can add more properties to our class
class Person {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  
  console.log(person1)

//Default values with constructor
//The constructor function properties may have a default value like other regular functions.
class Person {
    constructor(
        firstName = "Olumide",
        lastName = 'Ilesanmi',
        age = 12
    ){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

const person1 = new Person()// it will take the default values
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)

