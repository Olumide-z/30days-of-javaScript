import { countries } from "./countries.js";
//body
const body = document.querySelector('body')
body.style.textAlign = 'center'


//adding title and  paragraph
const title = document.createElement('h1')
title.textContent = 'WORLD COUNTRIES LIST'
document.body.appendChild(title)

const h4 = document.createElement('h4')
h4.textContent = 'Total number of countries: 193'
document.body.appendChild(h4)

//displaying countries
const countriesContainer = document.createElement('div')

for (let i = 0; i < countries.length; i++){
const pTags = document.createElement('p')
countriesContainer.appendChild(pTags)
pTags.innerHTML = countries[i]

//countriesPara.style.background = 'blue'
//countriesPara.style.width = '20%'
//countriesPara.style.margin = '5%'
}
document.body.appendChild(countriesContainer)

//
countriesContainer.style.display = 'flex'
countriesContainer.style.justifyContent = 'space-evenly'

//
//const ptag = document.que

//countries styles

