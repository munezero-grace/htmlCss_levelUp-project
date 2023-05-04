// ------------------------------dom-------------------------------------------------------
// click
let fName = document.getElementById("firstName");
let sName = document.querySelector(".secondName");
let button = document.querySelector("#btn")
// console.log("fname", fName);
// console.log("secondName", sName);
// console.log("button", button);
/*
json = [{},{}]
json = {}
*/
let arrayStudents = JSON.parse(localStorage.getItem("the array:"));

// console.log("actual array",arrayStudents);
// console.log("item at index?", arrayStudents[0]);
button.addEventListener('click', (e) =>{
e.preventDefault();
console.log("fname", fName.value);
console.log("sName", sName.value);
let student = {
    firstName: fName.value,
    secondName: sName.value
}
arrayStudents.push(student);
localStorage.setItem("the array:", JSON.stringify(arrayStudents));
console.log("person", arrayStudents);
});
