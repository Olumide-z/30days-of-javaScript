const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

  //
  
  const skill1 = users.Alex.skills;
  console.log(skill1)

  const skill2 = users.Asab.skills;
  console.log(skill2)

  const skill3 = users.Brook.skills;
  console.log(skill3)

  const skill4 = users.Daniel.skills;
  console.log(skill4)

  const skill5 = users.John.skills;
  console.log(skill5)

  const skill6 = users.Thomas.skills;
  console.log(skill6) 

  const skill7 = users.Paul.skills;
  console.log(skill7)

 
  //mern stack
//adding users
users.Olumide = {
    email: 'olumide@olumide.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    isLoggedIn: false,
    points: 40
}

console.log(users);

const val = Object.assign({},users);
//keys
const keys = Object.keys(users);
console.log(keys);
//values
const valuesUser = Object.values(users);
console.log(users);

//country
const country = {
    name: "Nigeria",
    capital: "Abuja",
    population: 50000000,
    mainLanguages: ["yoruba", "english", "hausa", "igbo"]
}
console.log(country);