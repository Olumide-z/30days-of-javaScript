//There are two Web Storage objects:

    //sessionStorage
    //localStorage

//HTML5 Web Storage Objects
    //HTML web storage provides two objects for storing data on the client:
    
    /*window.localStorage - stores data with no expiration date
    window.sessionStorage - stores data for one session (data is lost when the browser tab is closed). 
    Most modern browsers support Web Storage, however it is good to check browser support for localStorage and sessionStorage. 
    Let us see the available methods for the Web Storage objects.*/
    
    //Web Storage objects:
    
    /*localStorage - to display the localStorage object
    localStorage.clear() - to remove everything in the local storage
    localStorage.setItem() - to storage data in the localStorage. It takes a key and a value parameters.
    localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
    localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
    localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
    */

//Setting item to the localStorage
   /*When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, 
   we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.*/
   
   //We store data in the localStorage using the localStorage.setItem method.
   
   //syntax
   localStorage.setItem('key', 'value')

   //Storing string in a localStorage
   localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
   console.log(localStorage)
   //Storage {firstName: 'Asabeneh', length: 1}

   //Storing number in a local storage
   localStorage.setItem('age', 200)
   console.log(localStorage)
    //Storage {age: '200', firstName: 'Asabeneh', length: 2}
   
   // Storing an array in a localStorage. 
    //If we are storing an array, an object or object array, we should stringify the object first. See the example below.
   const skills = ['HTML', 'CSS', 'JS', 'React']
        //Skills array has to be stringified first to keep the format.
   const skillsJSON = JSON.stringify(skills, undefined, 4)
   localStorage.setItem('skills', skillsJSON)
   console.log(localStorage)
   //Storage {age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}
   
//Getting item from localStorage
//We get data from the local storage using localStorage.getItem() method.

//syntax
localStorage.getItem('key')
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills = localStorage.getItem('skills')
console.log(firstName, age, skills)
 //'Asabeneh', '200', '['HTML','CSS','JS','React']'
    //As you can see the skill is in a string format. Let us use JSON.parse() to parse it to normal array.

let skills = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)
//['HTML','CSS','JS','React']

//Clearing the localStorage
    //The clear method, will clear everything stored in the local storage

localStorage.clear()