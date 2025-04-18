//iife: imediately invoked func  expression 
//annonymous func ; no name 
// syntax to iife :

// (function(){
//     console.log("IIFE");

// })()

// (()=>{
//     console.log("run right away");

// })();

// recursive function : a function calling itself ;stack recursive implementation ,lifo;
// --nr,nr--;
// function getRecursive(nr){
//     console.log(nr);
//     getrecursive(--nr);
// }
// getRecursive(3);

//


    // function getRecursive(nr){
    //     console.log(nr);
    //     if(nr>0){
    //         getRecursive(--nr);
        
    //     }
    // }
    //     getRecursive(3);


    // function getRecursive(nr){
      
    //     if(nr>0){
    //         getRecursive(--nr); 
    //     }
    //     console.log(nr);
    // }
    //     getRecursive(3);
       

    //#
    // function logRecursive(nr){
    //     console.log("started function:",nr);
    //     if(nr>0){
    //         logRecursive(nr-1);
    //     }
    //     else{
    //         console.log("done with recursion");

    //     }
    //     console.log("ended function ;",nr);
    //     }
    //     logRecursive(3);

        // iteration is faster ,recursion is slower :
        // performance of recursion is worse than the iteration,botteneck situation 

        // nested Functions : function body dummy hoti h,jb tk evoked na ho jay,

        // function doOuterFunctionsStuff(nr){
        //     console.log("Outer function");
        //     doInnerFunctionStuff(nr);
        //     function doInnerFunctionStuff(x){
        //         console.log(x+7);
        //         console.log("I can access outer variables:",nr);
        //     }
        // }
        // doOuterFunctionsStuff(2);

        // 
//         function doOuterFunctionStuff(nr){
//             doInnerFunctionStuff(nr);
//         function doInnerFunctionStuff(x)
// {
//     let z=10;
// }
// console.log("not accesible:",z);
//         }
//         doOuterFunctionStuff(10);

        //anonymous function :in one scope func  is only one annoymous function:
        // callbacks :function is called as argumnet ,

        //  function call backs:a func called as a passback as a function.

        // let functionVariable=function(){
        //     console.log(" not so secret through");
        // };
        // functionVariable();


        // function doFlexibleStuff(executeStuff){
        //     executeStuff();
        //     console.log("inside doflexible stufffunc");
        // }doFlexibleStuff(functionfunction doOuterFunctionsStuff(nr){
        //     console.log("Outer function");
        //     doInnerFunctionStuff(nr);
        //     function doInnerFunctionStuff(x){
        //         console.log(x+7);
        //         console.log("I can access outer variables:",nr);
        //     }
        // }
        // doOuterFunctionsStuff(functionVariable);
      

        // synchronus :blocking code 


        // js :two type of inbuilt func 
        // setTimeout()
        //setInterval()

        // let youGotThis=function(){
        //     console.log("u are really well ,keep coding");


        // };
        // setTimeout(youGotThis,1000);

        //setInterval(): req setup :ctrl+c


        
        // (function(){
        //     console.log("welcome");
        // })();

 //3 question:
        // (function(){
        //     console.log("welcome");
        // })();
        // ()

// 4.question 
        // let test2=(num)=>num+5;
        // console.log(test2(14));

// 5 .question 
var addFive1=function addFive1(num){
    return num+2;
};
let addFive2=(num)=> num+2;
console.log(addFive1(14));













       
