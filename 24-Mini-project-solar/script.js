//getting elements
const body = document.querySelector('body')
const heading = document.querySelector('h1')
const form = document.querySelector('#myForm')
const input = document.querySelector('#input')
const options = document.querySelector('#options')
const button = document.querySelector('button')
const image = document.querySelector('#image')
const imageContainer = document.querySelector('#imageContainer')
const imageWrapper = document.querySelector('#imageWrapper')

//body styles
body.style.textAlign = 'center'
body.style.margin = '5%'
body.style.background = 'url(./images/galaxy.gif)'
body.style.backgroundSize = 'cover'


//heading styles
heading.style.color = 'white'

//form styles
form.style.marginBottom = '3%'
input.style.height = '20px'
options.style.height = '26px'
button.style.height = '26px'

//image style
imageContainer.style.backgroundColor = 'grey'
imageContainer.style.opacity = '0.2'
imageContainer.style.margin = '0 10%'

image.style.width = '30%'
image.style.height = '30%'
image.style.padding = '5%'

//button styles
button.style.opacity = '0.6'

//when button is clicked without inputing mass
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const allOptions = document.querySelectorAll('option')

    let messages = []
    if(input.value == '' || input.value == null){
        messages.push('Mass is required')
    }else if(isNaN(input.value)){
        console.log(isNaN(input.value))
        messages.push('Weight value must be a number')
    }else if(isNaN(input.value) === false && options.value === '--select planet--'){
        messages.push('You did not select any planet')
    }else if(isNaN(input.value) === false &&  options.value === allOptions[1].value){
        //formula
        let weightEarth = input.value * 9.81
        let img = document.createElement('img'); 
        img.src =  './images/earth.png'
        const imgE = imageContainer.appendChild(img);
        imgE.style.width = '20%'
        imgE.style.height = '20%'
        imgE.style.paddingTop = '3%'
        messages.push('The weight of the object on Earth is' + ' ' + 'N' + weightEarth)
    }else if(isNaN(input.value) === false && options.value === allOptions[2].value){
        //formula
        let weightJupiter = (input.value/9.81) * 24.79
        //let img2 = document.createElement('img'); 
        img.src =  './images/jupiter.png'
        const imgJ = imageContainer.appendChild(img);
        imgJ.style.width = '20%'
        imgJ.style.height = '20%'
        imgJ.style.paddingTop = '3%'
        messages.push('The weight of the object on JUPITER is' + ' ' + 'N' + weightJupiter)
    }

   
    if(messages.length > 0){
        //console.log(input.value)
        imageWrapper.innerHTML = messages.join(', ')
        imageWrapper.style.background = 'black'
        imageWrapper.style.color = 'white'
        imageWrapper.style.fontWeight = 'bold'
        imageWrapper.style.fontSize = '1.5rem'
        imageWrapper.style.padding = '2% 0'
        imageWrapper.style.margin = '0 20%'
        imageContainer.style.padding = '5% 0'
    }
})

//


/**
 w on mars = (w on earth / 9.81)*3.711
 Weight on Jupiter= (Weight on Earth/9.81m/s2) * 24.79m/s2.
 Weight on Mercury= (Weight on Earth/9.81m/s2) * 3.7m/s2
 Weight on the Moon= (Weight on Earth/9.81m/s2) * 1.622m/s2
 Weight on Neptune= (Weight on Earth/9.81m/s2) * 11.15m/s2.
 Weight on Saturn= (Weight on Earth/9.81m/s2) * 10.44m/s2
 Weight on Uranus= (Weight on Earth/9.81m/s2) * 8.69m/s2.
 Weight on Venus= (Weight on Earth/9.81m/s2) * 8.87m/s2
 */