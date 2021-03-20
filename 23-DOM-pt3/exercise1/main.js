//body
const body = document.querySelector('body')
body.style.textAlign = 'center'
body.style.margin = '5%'


//form
const input = document.querySelector('#numberInput')
const btn = document.querySelector('button')
input.style.width = '50%'
input.style.height = '20px'
btn.style.height = '25px'
btn.style.background = 'lightgreen'

//form validation
const formContainer = document.querySelector('#formContainer')
    //getting the err paragraph
const errElement = document.querySelector('#errMessage')

formContainer.addEventListener('submit', (e) => {
    let messages = []
    if(input.value === '' || input.value == null){
        messages.push('Enter a number value on the input field to generate numbers')
    }else if(isNaN(input.value)){
        console.log(isNaN(input.value))
        messages.push('Input must be a number')
    }

    if(messages.length > 0){
        e.preventDefault()
        errElement.innerHTML = messages.join(', ')
    }
})

//errMessage style
errElement.style.fontSize = '0.9rem'
errElement.style.marginRight = '35%'
errElement.style.color = 'red'

//defaultNumbers
let defaultNumbers;
for(let i = 0; i<= 50; i++){
    defaultNumbers = document.createElement('div')
    defaultNumbers.textContent = i
    document.body.appendChild(defaultNumbers)
    defaultNumbers.style.display = 'inline-block'
    defaultNumbers.style.padding = '2%'
    defaultNumbers.style.margin = '1%'
    defaultNumbers.style.width = '1%'
    defaultNumbers.style.fontWeight = 'bold'
    
    
    if(i % 2 == 0){
        defaultNumbers.style.background = 'lightGreen' 
    }else if(i % 2 != 0){
        defaultNumbers.style.background = 'yellow'
    }
}