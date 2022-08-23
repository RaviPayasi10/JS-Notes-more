
// More on functions 

// Pure Functions - Those functions which for a input each time produces the same output
//  Also they do not produce any side-effects i.e. Change something outside of the function

function sum (num1,num2){
    return num1+num2;
}

console.log(5,4);
console.log(2,7);


// Impure Functions - Those functions which for a input each time produces the different output
// Also, if they produce side-effects i.e. change something outside of the function,
// they are also called impure functions

function rand(num1){
    return num1 + Math.random();
}
console.log(rand(3));       // Always produces random, hence different number

// If they also produce side-effects, they are also impure functions.

let var1 = 3;
function another(num1){
    var1 = num1;
    return num1*3;
}

// Here, var1 which is outside the function changes inside the function, hence impure function

// The best practice is to use pure functions as much as possible and minimize the use of 
// impure functions unless required

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Factory Functions - Functions which return more functions

function createTaxCalc(tax){
    function calcTax(amt){
        return tax * amt;
    }

    return calcTax;
}

// Outer function called with tax amount
const res1 = createTaxCalc(0.19);   // This variable will store the inner function
const res2 = createTaxCalc(0.25);

// Inner function will be called from these variables with amt as parameters
res1(100);  
res2(150);

////////////////////////////////////////////////////////////////////////////////////////////////////

// Closures - 
// Closely related to factory functions
// IMP - All functions in JS are factory functions
// We know that variables defined in global scope are accessible everywhere and 
// variables inside block scope are only available inside that block
// For ex in above code of factory functions, the 'tax' variable is available inside
// the inner function but the 'amt' variable is available inside inner function only

// The more technical definition would be that each function has its own lexical 
// environment and global environment

// let outerVar = 1;
// function createTaxCalc(tax){
//     function calcTax(amt){
//         return tax * amt + outerVar;
//     }

//     return calcTax;
// }

// console.log(outerVar);
// const res1 = createTaxCalc(0.19);   // This variable will store the inner function
// const res2 = createTaxCalc(0.25);
// outerVar = 5;

// In above function, outerVar is global and is defined as 1. But if you were to run it, both inside
// the function as well as in console.log() o/p, outerVar's value which will be reflected is 5
// This happens because each function registers its surrounding environments and the variables
// that are defined in there. And if these variables change and functions uses these variables,
// then the function takes their latest value

// It is called closure because a function takes the surrounding environment and closes it
// and memorises its values and if a variable outside of it is changing its value, 
// that change is reflected inside the function as well

// Also , in normal functions, inner variables are destroyed as soon as function is completely 
// executed, but here since inner function is still using the outer functions variables
// therefore, it won't be destroyed by JS

/////////////////////////////////////////////////////////

// More details on Closure - 

// let userName = 'Abc';
// function greet(){
//     console.log(userName);
// }
// userName = 'xyz';
// greet();
// The o/p of above function would be 'xyz' , because as it closes its surrounding environment
// it takes latest values of a variable if its value is changing. This happens because it is
// storing the variable itself, so any change is reflected inside also

// let userName = 'Abc';
// function greet(){
//     let name = userName;
//     console.log(name);
// }
// userName = 'xyz';
// greet();
// O/p for this will also be 'xyz' as name also points to userName only


// function greet(){
//     console.log(userName);
// }
// let userName = 'xyz';
// greet();
// O/p is 'xyz' and not error as even though userName is defined after function declaration,
// it is still called after function call