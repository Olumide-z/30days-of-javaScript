for (let i = 0; i<=10; i++){
    console.log(i)
}

let a = 0
do{
    console.log(a)
    a++
}while(a<=10);

let b = 0
while(b<=10){
    console.log(b)
    b++
}

//10 to 0
for(let c = 10; c>=0; c--){
    console.log(c)
}

let d = 10
do{
    console.log(d)
    d--
}while(d>=0)

let e = 10
while(e>=0){
    console.log(e)
    e--
}

//0 to n
let n = 4
for(let f = 0; f<=n; f++){
    console.log(f)
}

//pattern loop
for(let g=1; g<=7; g++){
    console.log("#".repeat(g));
 }

for(let h=0; h<=10; h++){
    console.log(`${h}*${h} = ${h*h}`)
}

for(let j=0; j<=10; j++){
    console.log(`${j} ${j*j} ${j*j*j}`)
}

//even number

for (let i = 0; i < 100; i++){
    if ((i % 2) === 0){
        console.log(i + ' ')
    }
  }
//odd number
for (let i = 0; i < 100; i++){
    if ((i % 2) !== 0){
        console.log(i + ' ')
    }
  }

//prime numbers

//sum of all numbers

let sum = 0;


for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);

//sum of all even and odds numbers
let summ = 0; 

for(let i = 0; i<=100; i = i+2){
   summ+=i
}
console.log(`sum of all odds numbers:`+ summ)  

let sumEven = 0; 
for (let i = 0; i <= 100; i++) { 
	if (i % 2 === 0) { 
		sumEven += i; 
	} 
} 
 
console.log(`sum of all even numbers:` + sumEven); 

//sum of all even and odds numbers in array
let array = []
array.push(summ, sumEven);
console.log(array)

//Array of random numbers
const ARRAY_LENGTH = 5
const randomArray = []
for(let i = 0; i<ARRAY_LENGTH; i++) {randomArray.push(Math.floor(Math.random()*10))}
console.log(randomArray)

//generate random characters
let result  = '';
const characters   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let charactersLength = characters.length;
for ( var i = 0; i < 6; i++ ) {
   result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(result);

