
/*
     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>
*/

//GETTING ELEMENT
    //getElementsByTagName()
        // syntax
        document.getElementsByTagName('tagname')

    //getElementsByClassName() 
        //syntax
        document.getElementsByClassName('classname')

    //getElementsById() 
        //syntax
        document.getElementById('id')
    
    //querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

let firstTitle = document.querySelector('h1') // select the first available h2 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available

    //querySelectorAll: can be used to select html element by its tag name or class.
const allTitles = document.querySelectorAll('h1')

//Adding attribute

//Adding attribute using setAttribute
    /*The setAttribute() method set any html attribute. 
    It takes two parameters the type of the attribute and the name of the attribute. 
    Let's add class and id attribute for the fourth title.
    */

    const titles = document.querySelectorAll('h1')
    titles[3].setAttribute('class', 'title')
    titles[3].setAttribute('id', 'fourth-title')

//Adding attribute without setAttribute
    /*We can use normal object setting method to set an attribute but this can not work for all elements. 
    Some attributes are DOM object property and they can be set directly. 
    For instance id and class
    */
//another way to setting an attribute
    titles[3].className = 'title'
    titles[3].id = 'fourth-title'
    
//Adding class using classList
    /*The class list method is a good method to append additional class. 
    It does not override the original class if a class exists rather it adds additional class for the element.
    */
    
    titles[3].classList.add('title', 'header-title')

//Removing class using remove
    /*Similar to adding we can also remove class from an element. 
    We can remove a specific class from an element.
    */

    titles[3].classList.remove('title', 'header-title')