//getting elements
const changing = document.querySelector('#changing')
const skills = document.querySelector('#skills')

//

//
window.onload = function(){
    changing.innerHTML = 'HTML'
    changing.style.color = '#bfb051'

    function changer2(){
        if(changing.innerHTML == 'HTML'){
            changing.innerHTML = 'JAVASCRIPT'
            changing.style.color = '#e84545'
        }
        
        else if (changing.innerHTML == 'JAVASCRIPT'){
            changing.innerHTML = 'CSS'
            changing.style.color = '#9e9d89'
        }

        else if (changing.innerHTML == 'CSS'){
            changing.innerHTML = 'REACT'
            changing.style.color = '#f7ea00'
        }

        else if (changing.innerHTML == 'REACT'){
            changing.innerHTML = 'PYTHON'
            changing.style.color = '#cc561e'
        }

        else if (changing.innerHTML == 'PYTHON'){
            changing.innerHTML = 'REDUX'
            changing.style.color = '#00917c'
        }

        else if (changing.innerHTML == 'REDUX'){
            changing.innerHTML = 'HTML'
            changing.style.color = '#bfb051'
        }
        
    }
    window.setInterval(changer2, 3000);
}

