import { countries } from "./countries_data.js";
const content = document.querySelector('#content2')
const allCountries = document.querySelectorAll('.country')
const populationBtn = document.querySelector('#populationBtn')
const languageBtn = document.querySelector('#languageBtn')

//Languages
//get all the languages
const languages = countries.reduce(
    (acc, country) => [...acc, ...country.languages],
    []
);

console.log(languages)

//count the countries
const count = languages.reduce(
    (acc, language) => ({...acc, [language]: (acc[language] || 0) + 1}),
    {}
);

console.log(count)

//
const sortedLanguagesCount = Object.entries(count).sort((a,b) =>
    a[1] < b[1] ? 1 : -1
);



sortedLanguagesCount.length = 10


console.log(sortedLanguagesCount)

/*let cd;
for(let i = 0; i < sortedLanguagesCount.length; i++){
const display = sortedLanguagesCount[i]
cd = document.createElement('div')
cd.className = 'cd'
cd.innerHTML = display
document.body.appendChild(cd)
}*/

languageBtn.addEventListener('click', () => {
    let cd;
    for(let i = 0; i < sortedLanguagesCount.length; i++){
    const display = sortedLanguagesCount[i]
    cd = document.createElement('div')
    cd.className = 'cd'
    cd.innerHTML = display
    document.body.appendChild(cd)
}
})


//populations
let pop = []
for(let i = 0; i < countries.length; i++){
    pop.push(countries[i].population)
    console.log(pop)
}


const sorted = Object.entries(pop).sort((a,b) =>
    a[1] < b[1] ? 1 : -1
);

sorted.length = 11
console.log(sorted)
console.log(countries[48])

