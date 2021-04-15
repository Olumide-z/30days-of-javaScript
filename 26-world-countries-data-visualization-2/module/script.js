import { countries } from "./countries_data.js";

// getting all elements
const countriesList = document.querySelector('.countries-list')
const startBtn = document.querySelector('#startBtn')
const anyBtn = document.querySelector('#anyBtn')
const switchBtn = document.querySelector('#switchBtn')
const searchBox = document.querySelector('#searchBox')
const buttons = document.querySelectorAll('.action-btn')
let mode = '', startingWords; // starting_word or search_with_any

//displaying all countries
function displayCountries(countries) {
  countriesList.innerHTML = "";
  for (let i = 0; i < countries.length; i++) {
    const country = document.createElement('p')
    country.innerHTML = countries[i].name
    country.className = 'countriesTags'
    countriesList.appendChild(country)
  }
}

//
function filterCountries() {
  const value = searchBox.value.toUpperCase();

  startingWords = countries.filter((country) => {
    const countryName = country.name.toUpperCase();
    if (mode === "starting_word") {
      return countryName.startsWith(value)
    } else if (mode === "search_with_any") {
      return countryName.includes(value);
    }
  })

  displayCountries(startingWords)
}

startBtn.addEventListener('click', () => {
  mode = "starting_word"
})

anyBtn.addEventListener('click', () => {
  mode = "search_with_any"
})

// onclick btn
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => button.style.background = "");
    button.style.background = '#440a67';
    //the countries get updated on the website when the other btn is chose
    filterCountries()
  })
})

// starting word 
searchBox.addEventListener('input', () => {
  filterCountries();
})

startBtn.click();
displayCountries(countries)