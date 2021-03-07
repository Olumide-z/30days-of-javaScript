const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

//skill array to JSON
const txt = JSON.stringify(skills, undefined, 4)
console.log(txt)
//age variable to JSON
const ageJson = JSON.stringify(age, undefined, 4)
console.log(ageJson)
//isMarried
const isMarriedJson = JSON.stringify(isMarried, undefined, 4)
console.log(isMarriedJson)
//student
const studentJson = JSON.stringify(student, undefined, 4)
console.log(studentJson)