const lists = `<li>30DaysOfPython Challenge Done</li>
<li>30DaysOfJavaScript Challenge Ongoing</li>
<li>30DaysOfReact Challenge Coming</li>
<li>30DaysOfFullStack Challenge Coming</li>
<li>30DaysOfDataAnalysis Challenge Coming</li>
<li>30DaysOfReactNative Challenge Coming</li>
<li>30DaysOfMachineLearning Challenge Coming</li>`

const ul = document.querySelector('ul');
ul.innerHTML = lists

//The best way to remove all the children from the parent elements.
//Instead of using removeChild() I would recommend the following method.

ul.innerHTML = ' '

//adding attribute
const titles = document.querySelectorAll('h1')
titles[0].setAttribute('class', 'title')
titles[1].setAttribute('class', 'title')

//changing colors
const headerTitles = document.querySelectorAll('.title')

for(let i=0; i < headerTitles.length; i++){
    if (i % 2 === 0){
        headerTitles[i].style.color = 'red'
    }else{
        headerTitles[i].style.color = 'green'
    }
}


