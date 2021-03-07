//
localStorage.setItem('firstName', 'Olumide');
console.log(localStorage)
localStorage.setItem('age', 23)
console.log(localStorage)
localStorage.setItem('country', 'Nigeria');
console.log(localStorage)
localStorage.setItem('city', 'Lagos')

//
const student = {
    firstName2 : 'Daniel',
    lastName2: 'Ayomide',
    age2: 15,
    skills : ['Drumming', 'Technology', 'football'],
    country2: 'Nigeria'
}

const txt = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', txt)
console.log(localStorage)

