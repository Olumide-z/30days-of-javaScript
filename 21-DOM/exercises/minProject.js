//wrapper class
const container = document.querySelector('.wrapper')
container.style.textAlign = 'center'
//getting h1, h2, span
const title = document.querySelector('h1')
const span = document.querySelector('span')
const header2 = document.querySelector('h2')

//span styles
span.style.fontSize = '4rem'
span.style.color = 'purple'

//h2 styles
header2.style.textDecoration = 'underline'
header2.style.fontSize = '1rem'
header2.style.color = 'blue'

//getting the lists
const li = document.querySelectorAll('li')

for(let i = 0; i < li.length; i++){
    li[i].setAttribute('class', 'list')
}
const lists = document.querySelectorAll('.list')
//li styles
lists.forEach((a, i) => {
    lists[i].style.listStyle = 'none'
    lists[i].style.paddingBottom = '3%'
});


//getting p
const pTag = document.querySelector('p')
pTag.setAttribute('id', 'pId')

const pId = document.querySelector('#pId')
//date

function today(){

const rightNow = new Date();

let myDate = ("0" + rightNow.getDate()).slice(-2);
let myMonth = rightNow.toLocaleString('default', {month: 'long'});
let myHours = ("0" + rightNow.getHours()).slice(-2);
let myMin = ("0" + rightNow.getMinutes()).slice(-2);
let mySec = ("0" + rightNow.getSeconds()).slice(-2);
let myYear = rightNow.getFullYear();

//add AM and PM system
let amPm = (myHours < 12) ? 'AM' : 'PM'

//convert Hours component to 12-hour format
myHours = (myHours > 12) ? myHours - 12 : myHours

//display the clock and date

pId.innerHTML = 
    myDate + ' ' + myMonth + ' ' + myYear + ' ' + myHours + ':' + myMin + ' : ' +mySec + ' ' + amPm; 

    const t = setTimeout(today, 500);
}
 today();
//

//adding class change color to span
span.classList.add('changeColor');
pTag.classList.add('changeColor2')

//style for date

pTag.style.margin = '0 30% 0 30%'
pTag.style.padding = '1%'

//color changer for span

window.onload = function(){
    let x = document.querySelector('.changeColor');
    let y = document.querySelector('.changeColor2');
    x.style.color = 'blue'
    y.style.background = 'green'

    function changer(){
        if (x.style.color == "blue" && y.style.background == 'green'){
            x.style.color = "yellow";
            y.style.background = 'pink'
        }
        else if (x.style.color == "yellow" && y.style.background == 'pink'){
            x.style.color = "red";
            y.style.background = 'blue'
        } 
        else if (x.style.color == "red" && y.style.background == 'blue'){
            x.style.color = "purple";
            y.style.background = 'yellow'
        } 
        else if (x.style.color == "purple" && y.style.background == 'yellow'){
            x.style.color = "pink";
            y.style.background = 'gray'
        } 
        else if (x.style.color == "pink" && y.style.background == 'gray'){
            x.style.color = "blue";
            y.style.background = 'green'
        } 
    };

    window.setInterval(changer,1000);
}

//list design

const allList = document.querySelectorAll('li')
allList[0].style.background = 'lightgreen'
allList[1].style.background = '#f0c929'

for(let i = 2; i < allList.length; i++){
    allList[i].style.background = '#ff7171'
}

for(let i = 0; i < allList.length; i++){
    allList[i].style.margin = '0 5% 1% 5%'
}

for(let i = 0; i < allList.length; i++){
    allList[i].style.paddingTop = '2%'
}

