const firstPara = document.querySelector('p');
//
document.querySelector('#id');
//
const allP = document.querySelectorAll('p')
//

/*for (let i=0; i < allP.length; i++){
    allP[i]
}*/

//Adding text to paragraph 4
allP[3].textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores facilis dolorum voluptatem numquam esse. Quisquam ea quas repellat labore error et facere consequuntur quibusdam excepturi quasi, dignissimos, hic atque?'

//setting ID
allP[0].setAttribute('id', 'id1')


allP[1].id = 'id2'


allP[2].setAttribute('id', 'id3')

allP[3].id = 'id4'

//setting className
for(let i = 0; i < allP.length; i++){
    allP[i].setAttribute('class', 'pClass')
}

//setting styles
allP.forEach((a, i) => {
    allP[i].style.background = 'black'
    allP[i].style.border = '2px'
    allP[i].style.fontSize = '2rem'
    allP[i].style.fontFamily = 'Georgia'
})

/*Select all paragraphs and loop through each elements and give 
the first and third paragraph a color of green, and the second and 
the fourth paragraph a red color*/
allP.forEach((all, i) => {
    if(i % 2 === 0){
        all.style.color = 'green'
    }else{
        all.style.color = 'red'
    }    
})
