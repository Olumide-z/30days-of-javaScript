//destructuring
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const score = student[2];
const [name, skills, ,jsScore = score[2], reactScore = score[3]] = student
console.log(name, skills, jsScore, reactScore)

//convertArrayToObject
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]


  function convertArrayToObject (students){
    const obj = {...students};
    return obj
  }

  console.log(convertArrayToObject(students))

  //copying and adding to the object
  const user = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

  const copiedUser = {...user,}
  console.log(copiedUser)
  

  
