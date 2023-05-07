let fullNames=document.getElementById('fullNames');
let phone=document.getElementById('phone');
let email=document.getElementById('email');
let password=document.getElementById('password');
let confirmPassword=document.getElementById('ConfirmPassword');
let button=document.getElementById('btn');


/**************************************Getting Error ID*****************************************/
let fullNamesError=document.getElementById('fullNamesError');
let phoneError=document.getElementById('phoneError');
let emailError=document.getElementById('emailError');
let passwordError=document.getElementById('passwordError');
let ConfirmPasswordError=document.getElementById('ConfirmPasswordError');
// console.log('full names:',fullNames);
// console.log('phone number:',phone);
// console.log('email:',email);
// console.log('password:',password);
// console.log('confirm password:',confirmPassword);
/*********************************VALIDATE FullNames *****************************************/
function validateFullNames(){
    let NamesError=document.getElementById('fullNames').value;
    if(NamesError.length===0){
        fullNamesError.innerHTML='full names required!';
        return false;
    }
    if(!NamesError.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        fullNamesError.innerHTML='write full names!';
        return false;
    }
    fullNamesError.innerHTML='<i class="fas fa-check-circle fa-lg" style="color: #3bff05;"></i>';
    return true;
}

/*********************************VALIDATE Email *****************************************/
function validateemail(){
    let EmailError=document.getElementById('email').value;
    if(EmailError.length===0){
        emailError.innerHTML='email is required!';
        return false;
    }
    if(!EmailError.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML='invalid email!';
        return false;
    }
    emailError.innerHTML='<i class="fas fa-check-circle fa-lg" style="color: #3bff05;"></i>';
    return true;
}






/*********************************VALIDATE phone *****************************************/
function validatephone(){
    let contactError=document.getElementById('phone').value;
    if(contactError.length===0){
        phoneError.innerHTML='phone is required!';
        return false;
    }
    if(contactError.length!==10){
        phoneError.innerHTML='10 digits required!';
        return false;
    }
    if(!contactError.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
        phoneError.innerHTML='only numbers required!';
    }
    phoneError.innerHTML='<i class="fas fa-check-circle fa-lg" style="color: #3bff05;"></i>';
    return true;
}

/*********************************VALIDATE Password*****************************************/
    
function validatepassword(){
let pswdError=document.getElementById('password').value;
if(pswdError.length===0){
    return passswordError.innerHTML='password is required!'
}

}








/*********************************VALIDATE Confirm Password *****************************************/
function validateconfirmPassword(){
    let confirmERROR=document.getElementById('ConfirmPassword').value;
    if(confirmERROR.length===0){
        return ConfirmPasswordError.innerHTML='confirm your password!'
    }
   
}










/*********************************VALIDATE FullNames *****************************************/

button.addEventListener('click', (event)=>{
event.preventDefault();
// alert('I am clicked');
// console.log('full names:',fullNames.value);
// console.log('phone number:',phone.value);
// console.log('email:',email.value);
// console.log('password:',password.value);
// console.log('confirm password:',confirmPassword.value);
let user={
    fullNames:fullNames.value,
    phone:phone.value ,
    email:email.value ,
    password:password.value,
    confirmPassword:confirmPassword.value
}
array=JSON.parse(localStorage.getItem('users')|| []);
array.push(user);
// console.log('the array:', array);
localStorage.setItem('users',JSON.stringify(array));



})
