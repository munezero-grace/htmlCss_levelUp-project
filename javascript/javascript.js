//string concactination
//variable declaration
//let,const

// let FirstName= "Grace"
// let SecondName= "Munezero"
// let ThirdName="Axel"
// console.log(FirstName + " " + SecondName)



// console.log("welcome to my page");
// console.log("2"+"2");
// console.log(2+2);

// if(FirstName==="Grace" || SecondName==="Munezero"){
//     console.log("that's true");
// }
// else{
//     console.log("invalid FirstName")
// }


// if(SecondName==="Munezero" &&FirstName==="Grace"){
//     console.log("Admin")

// }
// else if(SecondName==="Munezero"&& ThirdName==="Axel"){
// console.log("User")
// }
// else{
//     console.log("Guest")
// }

// let a=0;
// let b=1;
// let students=["ndizihiwe","kanyana","munezero","nyiransengimana","ishimwe"];
// let studentsAge=[1,2,3,4,5,3,6];
// let sum=studentsAge[a]+studentsAge[b];
// if(a<studentsAge.length && b<studentsAge.length ){
//     console.log("we can proceed")

//     console.log("student name is :" ,students[sum]);}
// else {
//     console.log("number not in range");
// }














// calling a function     funstionName();


//syntax for a function     let display=()=>{}














// let numArray = [ "one", "two", "three", "four","five"];

// let num=1;
// if(num < numArray.length){
//     console.log("number is in range");

// console.log(num[numArray])}








// function testMe(num){
//     if (num<5){
//         return "Tiny";
//     }
//     else if (num<10){
//         return "Small";
//     }
//     else if (num<15){
//         return "Medium";
//     }
//     else if (num<20){
//         return "Large";
//     }
//     else{
//         return "Huge";
//     }
// }
// console.log(testMe(3));




// golf challenge
  
// strokess      return
// 1             "hole in one"
// <= par-2      "Eagle"
// par-1         "Birdie"
// par           "Par"
// par+1         "Bogey"
// par+2         "Double Bogey"
// >=par+3       "Go Home"


// var names=["hole in one","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home"];
// function goalScore(par,strokes){
//     if(strokes==1){
//         return names[0];
//     }
//     else if(strokes==1){
//         return names[1];
//     }
//     else if(strokes<=par-1){
//         return names[2];
//     }
//     else if(strokes==par  ){
//         return names[3];
//     }
//     else if(strokes==par+1 ){
//         return names[4];
//     }
//     else if(strokes==par+2   ){
//         return names[5];
//     }
//     else if(strokes>=par+3){
//         return names[6];
//     }
// }
// console.log(goalScore(6,7))




//using switch case statement

function checkResult(grading){
    display="";


    switch(grading){

        case "F":
            display="Failed test"
            break;
        case "B":
            display="passed a test"
            break;
        case "A":
            display="nailed it"
            break;
        default:
            display="redo"
    }
    return display;
}


console.log(checkResult("B"));