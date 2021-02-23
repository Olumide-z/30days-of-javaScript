const dog = {}
console.log(dog);
//
dog.name = "Rainbow"
dog.legs = 4
dog.color = "brown"
dog.age = "7 months"
dog.bark = function(){
    return `woof woof`
}

console.log(dog);
console.log(dog.bark());

//getting values
const values = Object.values(dog);
console.log(values)

//
dog.breed = "Local Dog"
dog.getDogInfo = function(){
    const statement = `My dog name is ${name}, he is ${this.age} years old.
    the color of my dog is ${this.color}.`
    return statement
}
console.log(dog);
console.log(dog.getDogInfo());

