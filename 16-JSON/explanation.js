/*JSON stands for JavaScript Object Notation. The JSON syntax is derived from JavaScript object notation syntax, 
but the JSON format is text or string only. JSON is a light weight data format for storing and transporting. 
JSON is mostly used when data is sent from a server to a client. JSON is an easier-to-use alternative to XML.
*/
//Example:

{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}

/*The above JSON example is not much different for a normal object. 
Then, what is the difference ? The difference is the key of a JSON object should be with double quotes or it should be a string. 
JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON.
*/

/*Let us see the above example in more detail, it starts with a curly bracket. 
Inside the curly bracket, there is "users" key which has a value array. 
Inside the array we have different objects and each objects has keys, each keys has to have double quotes. 
For instance, we use "firstNaMe" instead of just firstName, however in object we use keys without double quotes. 
This is the major difference between an object and a JSON.*/

//Converting JSON to JavaScript Object
    //When we want to change the JSON to an object we parse the JSON using JSON.parse(). 
    //When we want to change the object to JSON we use JSON.stringify().

    //JSON.parse()
    
    JSON.parse(json[, reviver])
    // json or text , the data
    // reviver is an optional callback function
    const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, undefined, 4)
    console.log(usersObj)

//Using a reviver function with JSON.parse()
    /*To use the reviver function as a formatter, we put the keys we want to format first name and last name value. 
    Let us say, we are interested to format the firstName and lastName of the JSON data .*/
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, (key, value) => {
      let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
      return newValue
    })
    console.log(usersObj)