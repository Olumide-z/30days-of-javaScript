import { countries } from "./countries_data.js";

//getting all elements
const paragraph = document.querySelector('#paragraph')
const startBtn = document.querySelector('#startBtn')
const anyBtn = document.querySelector('#anyBtn')
const switchBtn = document.querySelector('#switchBtn')
const searchBox = document.querySelector('#searchBox')
const buttons = document.querySelectorAll('button')

//displaying all countries
const divContainer = document.createElement('div')
divContainer.className = 'divContainer'
let names;
let pTags
for(let i = 0; i < countries.length; i++){
     names = countries[i].name
     pTags = document.createElement('p')
     divContainer.appendChild(pTags)
     pTags.innerHTML = names
     pTags.className = 'countriesTags'
}
document.body.appendChild(divContainer)

//onclick btn
for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click' , () => {
        buttons[i].style.background = '#440a67'
    })
}


//starting word 

searchBox.addEventListener('input', () => {
    const value = searchBox.value.toUpperCase()
    const startingWords = countries.filter((country) => 
        country.name.startsWith(value)
    )
  
    console.log(startingWords)
})



//search with any word

//numbers of countries that starts with 



