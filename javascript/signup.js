/*
             signup
1.getting input fields*
2.console.log*
3.handle event("click")*
4.getting current values*
5.push object*
6.push in array*
7.console.log(array)*
8.store in localStorage // database //integration:consuming backend api's
*/


let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let email = document.getElementById("email");
let password = document.querySelector("#pswd");
let button = document.querySelector(".button");
// let errorMessage = document.getElementById("comment");
// let answerDiv = document.querySelector(".result")


let fNameError=document.getElementById('fNameError');
let lNameError=document.getElementById('lNameError');
let emailError=document.getElementById('emailError');
let passwordError=document.getElementById('passwordError');
let buttonError=document.getElementById('buttonError')

/*****************************validating the firstName***********************************/
function validatefName(){
let firstName=document.getElementById('fName').value;
if(firstName.length === 0){
 fNameError.innerHTML='firstName is required '
 return false;
}
if(!firstName.match(/^[A-za-z]*\s{1}[A-za-z]$/)){
  fNameError.innerHTML='only letters!';
  return false;
}
fNameError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #38a90f;"></i>'
return true;
}


/*****************************validating the lastName***********************************/

function validatelName(){
let lastName=document.getElementById('lName').value;
if(lastName.length === 0){
lNameError.innerHTML='lastName is required'
}
}

/*****************************validating the Email***********************************/

function validateemail(){
let Email=document.getElementById('email').value;
if(Email.length===0){
  emailError.innerHTML='email is required'
}

}

/*****************************validating the password***********************************/

function validatePassword(){
  let password=document.getElementById('pswd').value;
  if(password.length===0){
    passwordError.innerHTML='password is required'
  }
}

/*****************************validating the button***********************************/

function validatebutton(){
let button=document.getElementById('btn')
if(password.length===0 || Email.length===0 || lastName.length === 0|| firstName.length === 0 )
{
  buttonError.innerhtml='please fix error!'
}
}



// console.log(fName);
// console.log(lName);
// console.log(email);
// console.log(button);
button.addEventListener('click', (event) =>{
event.preventDefault();
// console.log("fname:", fName.value);
// console.log("last name:", lName.value);
// console.log("email:", email.value);
// console.log("password:", password.value);
// alert("i am clicked")
// let student = "kamali innocent", age = 12;
// const user = {
//     student,
//     age
// }
// console.log("user:", user);
const user = {
    fName: fName.value,
    lName: lName.value,
    email: email.value,
    password: password.value
}
// and && or || 
/*
&&
1&&1=1
1&&0=0
0&&0=0
0&&1=0
||
1||1=1
1||0=1
0||0=0
0||1=1
*/
// rex
// if(email.value === ''){
//     // alert("input email");
//   return errorMessage.innerHTML = "email required";
// }
// if(email.value === '' || password.value === ''){
//     return alert("input email or password");
// }
// console.log("user:", user);
let array = JSON.parse(localStorage.getItem("users"));
array.push(user);
// console.log("array:", array);
localStorage.setItem("users", JSON.stringify(array));
let paragraph = document.createElement('p');
// paragraph.innerHTML = 'thank you..........';
// answerDiv.appendChild(paragraph);
// errorMessage.innerHTML = '';
})




