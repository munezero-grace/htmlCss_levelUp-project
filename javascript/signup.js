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
let errorMessage = document.getElementById("comment");
let answerDiv = document.querySelector(".result")


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
if(email.value === ''){
    // alert("input email");
  return errorMessage.innerHTML = "email required";
}
// if(email.value === '' || password.value === ''){
//     return alert("input email or password");
// }
// console.log("user:", user);
let array = JSON.parse(localStorage.getItem("users"));
array.push(user);
// console.log("array:", array);
localStorage.setItem("users", JSON.stringify(array));
let paragraph = document.createElement('p');
paragraph.innerHTML = 'thank you..........';
answerDiv.appendChild(paragraph);
errorMessage.innerHTML = '';
})




