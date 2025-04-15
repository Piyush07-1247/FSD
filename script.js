// retutrning with arrow function
//let addTwoNumbers=(x,y)=>x+y;
//let result=addTwoNumbers(2,3);
//console.log(result); 

// variable scope on functions
//function testAvailability(x){
  //  console.log("available",x);

//testAvailability(5);
//console.log("available",x);

//function testAvailability(
  //  let y="local";
    //console.log("available",y);
    //testAvailability(5);

//function testAvailability(){
  //  let x="local";
    //console.log("available",x);
    //return
//}
//let z=testAvailability();
//console.log("available",z); 

// function doingStuff() {
//     if (true) {
//         let x = 5;
//         console.log("Inside if block:", x); 
//     }
//     console.log("Outside if block:", x); 
//   }

// function doingStuff() {
//     if (true) {
//         console.log("Inside if block:", x); 
//         var x = 5;
//     }
//     console.log("Outside if block:", x);

// constant scope
// function doingStuff() {
//     if (true) {
//         const x = 5;
//         console.log("Inside if block:", x); 
//     }
//     console.log("Outside if block:", x); 
//   }

// global variable
// let globalVar = "I am a global variable";

// function testGlobalScope() {
//     console.log(globalVar); // Accessing the global variable
// }

// const creatingNewVariable = () => {
//     console.log(globalVar); // Accessing the global variable
// }

// creatingNewVariable();
// console.log(globalVar); // Accessing the global variable

let x="global";
function doingStuff() {
    let x="local";
    console.log("Inside function:",x); 
}
doingStuff();
console.log("Outside function:",x);

