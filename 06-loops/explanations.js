// For loop structure
//for(initialization, condition, increment/decrement){
    // code goes here
  //}

  for(let i = 0; i <= 5; i++){
    console.log(i)
  }

  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
  const newArr = []
  for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
  }

//while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// do while
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

//for of loop
for (const element of arr) {
    // code goes here
  }

//break
//Break is used to interrupt a loop.
  
  for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }

//continue
//We use the keyword continue to skip a certain iterations.

for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}