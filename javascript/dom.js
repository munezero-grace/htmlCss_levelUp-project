// ------------------------------dom-------------------------------------------------------

let buttonHolder = document.getElementById("btn");
let firstName = document.getElementById("firstName");
let secondName = document.getElementById("secondName");
let myNames = 'grace munezero';

console.log("buttonHolder",buttonHolder);
// console.log(`renjiskbfhvbdsjk ${myNames}`)
// eventListener
let array = [];
buttonHolder.addEventListener('click', (event) => {
    let person = {
        firstname:firstName.value,
        secondname:secondName.value
    }
    event.preventDefault();
    console.log(person);
    array.push(person);
    console.log("array:" , array);
    // console.log("i am clicked");
    // console.log("first name:", firstName.value);
    // console.log("second name:", secondName.value);
})

