//getting elements
const body = document.querySelector('body')
const heading = document.querySelector('h1')
const form = document.querySelector('#myForm')
const input = document.querySelector('#input')
const options = document.querySelector('#options')
const button = document.querySelector('button')
const image = document.querySelector('#image')
const message = document.querySelector('#message')
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

message.style.background = 'black'
message.style.color = 'white'
message.style.fontWeight = 'bold'
message.style.fontSize = '1.5rem'
message.style.padding = '2% 0'
message.style.margin = '0 20%'
message.style.display = 'none'
imageContainer.style.padding = '2% 0'

//button styles
button.style.opacity = '0.6'

//function to cal the weight of all planets
function getWeight(mass, planet){
  const calcs = {
    earth: mass * 9.81,
    jupiter: (mass / 9.81) * 24.79,
    mercury: (mass / 9.81) * 3.7,
    moon: (mass / 9.81) * 1.622,
    neptune: (mass / 9.81) * 11.15,
    saturn: (mass / 9.81) * 10.44,
    uranus: (mass / 9.81) * 8.69,
    venus: (mass / 9.81) * 8.87,
    mars: (mass / 9.81) * 3.711
  }
  return calcs[planet.toLowerCase()];
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const mass = input.value;
    const planet = options.value;
    let error = "";

    if (!mass) {
      error = ('Mass is required')
    } else if (isNaN(mass)) {
      error = ('Weight value must be a number')
    } else if (!planet) {
      error = ('You did not select any planet')
    }

    if (!error) {
      const weight = getWeight(mass, planet);
      image.src = `./images/${planet.toLowerCase()}.png`;
      message.innerHTML = `The weight of the object on ${planet} is N${weight}`;
      image.style.display = 'inline'
    } else {
        message.innerHTML = error;
        image.style.display='none'
    }

    message.style.display = 'block'
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