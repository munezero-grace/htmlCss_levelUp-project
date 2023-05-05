// // // ------------------------------dom-------------------------------------------------------
// // // click
// // function signUp(){
// let form=document.getElementById('form');

// user=JSON.s(localStorage.getItem("users")) || [];

// form.addEventListener('submit',(event)=> {
// let firstName=document.getElementById("fName").value;
// let lastName=document.getElementById("lName").value;
// const email =document.getElementById("email").value;
// const password=document.getElementById("pswd").value;
// let button=document.getElementById("btn")


// arrayStudents=JSON.parse(localStorage.getItem("the array is:")) || [];
// for(let i=0;i<arrayStudents.length;i++){
//     if(arrayStudents[i].firstName===firstName && arrayStudents[i].lastName===lastName && arrayStudents[i].passWord===passWord && arrayStudents[i].confirm===confirm){
//         alert("Already exist");
//         return;
//     }
// }



// button.addEventListener('click',(event)=>{
//     event.preventDefault();
//     console.log("the firstname is:",firstName.value);
//     console.log("the secondname is:", lastName.value);
//     console.log("password is :", passWord.value);
//     console.log("confirm pswd is :", confirm.value);
//     console.log(button);

//     let person={
//         firstName:firstName.value,
//         lastName:lastName.value,
//         passWord:passWord.value,
//         confirm:confirm.value
//     }

   
//     arrayStudents.push(person);
//     console.log("the credentials are:",arrayStudents);
//     localStorage.setItem("the array is:",JSON.stringify(arrayStudents));
   
// })

// // }
// /************************************************************************************************/



// // if(localStorage.setItem('email') && localStorage.setItem('password')){

// //     document.getElementById('your username').value=localStorage.getItem('email');
// //     document.getElementById('your password').value=localStorage.getItem('password');
  
// // }
 
// let form=document.getElementById('form');

// users=JSON.parse(localStorage.getItem("users")) || [];

// form.addEventListener('submit',function (e) {
// e.preventDefault();
// let firstName=document.getElementById("fName").value;
// let lastName=document.getElementById("lName").value;
// const email =document.getElementById("email").value;
// const password=document.getElementById("pswd").value;

// let person={
//     firstName:firstName,
//     lastName:lastName,
//     email:email,
//     passWord:password
   
// };
// /***********************************************/

// let check=users.find(u => u.email === person.email && u.firstName === person.firstName && u.lastName === user.lastName);

// if(check){
//     alert('Already Exist');
// }
// else{   
// users.push(person);
// alert('successfully saved');
// localStorage.setItem("users",JSON.stringify(users));
// console.log("the credentials are:",person);
// alert('credentials saved!');

// }});
























