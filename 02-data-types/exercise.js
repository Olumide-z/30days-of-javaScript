let challenge = '30 Days Of JavaScript';
console.log(challenge);
//length method
console.log(challenge.length);
//upper and lowercase methods
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
//slicing
console.log(challenge.substr(3,18));
console.log(challenge.substr(0,3));

//includes
console.log(challenge.includes("Script"));

//split
console.log(challenge.split());
console.log(challenge.split(" "));

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(" "));

//replace
console.log(challenge.replace("JavaScript", "Python"));

//char
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));

//indexof
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));

//search
console.log(sentence.search("because"));

//trim
let newChallenge =  ' 30 Days Of JavaScript '
console.log(newChallenge.trim());

//startsWith and endWith
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));

//match
let pattern = /a/gi
console.log(challenge.match(pattern)) 

//concat
let string = "30 days of";
console.log(string.concat(" ", "JavaScript"));

//repeat
console.log(challenge.repeat(2));