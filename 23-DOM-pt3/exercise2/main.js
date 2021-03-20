//getting all elements
const container = document.querySelector('#container');
const text = document.querySelector('#text')
const keyCode = document.querySelector('#keyCode')

//container styles
container.style.margin = '5% 10%'
container.style.textAlign = 'center'

//text styles
text.style.marginTop = '15%'
text.style.fontSize = '2.5rem'
text.style.background = 'white'
text.style.width = '50%'
text.style.height = '60px'
text.style.marginLeft = '28%'
text.style.boxShadow = '3px 3px 3px 3px rgba(0, 0, 0, 0.4)'

document.body.addEventListener('keypress', e => {
    const key = e.keyCode;

    keyCode.style.boxShadow = '3px 3px 3px 3px rgba(0, 0, 0, 0.4)'
    keyCode.style.fontSize = '2.5rem'
    keyCode.style.background = 'white'
    keyCode.style.width = '10%'
    keyCode.style.height = '100px'
    keyCode.style.marginLeft = '50%'
    
    keyCode.innerHTML = key
    let string = ((String.fromCharCode(key)))
    //string.style.color = 'lightgreen'

    text.innerHTML = `You Pressed` + ' ' + string
  })