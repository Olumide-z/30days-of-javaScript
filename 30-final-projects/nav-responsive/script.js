const icon = document.querySelector('#icon')
const buttons = document.querySelector('.buttons')
const ul = document.querySelector('ul')

icon.addEventListener('click', () =>{
    ul.classList.toggle('show')
    buttons.classList.toggle('show')
})