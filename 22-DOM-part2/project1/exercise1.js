const div = document.querySelector('div')
div.setAttribute('id', 'myDiv')

let title;
for (let i =0; i <= 100; i++){
    title = document.createElement('div')
    title.textContent = i 
    title.style.display = 'inline-block'
    title.style.padding = '3%'
    title.style.margin = '2% 2%'
    title.style.width = '3%'
    document.body.appendChild(title)

    if(i % 2 == 0){
        title.style.background = 'lightGreen' 
    }else if(i % 2 != 0){
        title.style.background = 'yellow'
    }
}

