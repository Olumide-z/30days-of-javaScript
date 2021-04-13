const input = document.querySelectorAll('input')
const form = document.querySelector('form')
const errMessage = document.querySelectorAll('.errMessage')

//


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let err , err2 , err3, err4, err5, err6 = '';
    let firstName = input[0].value;
    let lastName = input[1].value;
    let email = input[2].value;
    let password = input[3].value;
    let telephone = input[4].value;
    let bio = input[5].value;
   


    if(!firstName){
       err = "firstname is required"
    }
    if(!lastName){
        err2 = "lastname is required"
    }
    if(!email){
        err3 = "An email address is required"
    }
    if(!password){
        err4 = "A strong password is required"
    }
    if(!telephone){
        err5 = "Cell phone number is required"
    }
    if(!bio){
        err6 = "bio is required"
    }


const allErr = [err, err2, err3, err4, err5, err6]    

console.log(allErr)

if(!allErr){
    for(let i = 0; i<errMessage.length; i++){
        errMessage[i].innerHTML = ''
    }
}
else{
        errMessage[0].innerHTML = err
        errMessage[1].innerHTML = err2
        errMessage[2].innerHTML = err3
        errMessage[3].innerHTML = err4
        errMessage[4].innerHTML = err5
        errMessage[5].innerHTML = err6
}

})