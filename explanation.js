//syntax
try {
    // code that may throw an error
  } catch (err) {
    // code to be executed if an error occurs
  } finally {
    // code to be executed regardless of an error occurs or not
  }

//example
try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err)
  }

//Types of err
    //ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
    //SyntaxError: A syntax error has occurred
/*let square = 2 x 2
console.log(square)

console.log('Hello, world");*/
    //TypeError: A type error has occurred
/*let num = 10
console.log(num.toLowerCase())*/
