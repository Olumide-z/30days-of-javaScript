//A Promise is in one of these states:

/*pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.
*/
//Promise constructor
    /*We can create a promise using the Promise constructor. 
    We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis. 
    Inside the parenthesis it it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.
    */
// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))

//  ["HTML", "CSS", "JS"]

//The above promise has been settled with resolve. Let us another example when the promise is settled with reject.

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.indexOf('Node') !== -1) {
      resolve('fullstack developer')
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))

//Something wrong has happened

//Fetch API
const url = 'https://restcountries.eu/rest/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    console.log(data)
  })
  .catch(error => console.log(error)) // handling error if something wrong happens

//Async and Await
    /*Async and await is an elegant way to handle promises. 
    It is easy to understand and it clean to write.
    */
const square = async function (n) {
  return n * n
}

square(2)
//Promise {<resolved>: 4}

//How do we access the value from the promise? To access the value from the promise, we will use the keyword await.

const square = async function (n) {
  return n * n
}
const value = await square(2)
//4

/*Now, as you can see from the above example writing async in front of a function create a promise and 
to get the value from a promise we use await. 
Async and await go together, one can not exist without the other.
*/

//Let us fetch API data using both promise method and async and await method.

    //promise
const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))

//  async and await
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.log(err)
  }
}
console.log('===== async and await')
fetchData()