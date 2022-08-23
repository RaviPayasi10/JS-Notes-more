
let name = "Ravi";

function greet(){
    let age = 30;
    console.log(name,age);
}

//console.log(name,age);  // This will give error as age is defined inside function
//hence available inside that function only. 

greet();

//////////////////////////////////////////////////////////////////////////////////////////

let name1 = "ravi";
// let name1 = "Rash";     Redeclaring let variables is not allowed and will produce error
function greet1(){
    // But inside a function, we can redeclare them, it is called shadowing
    let name1 = "Rash";     // We can shadow let variables inside of function
    console.log(name1 +" inside function");     // Rash will be printed
}

greet1();
console.log(name1 +" outside function");        // ravi will be printed

///////////////////////////////////////////////////////////////////////////////////////////////

var name2 = "abc";
var name2 = "xyz";
// For var variables, we can redefine them again and it will not produce an error
console.log(name2);     // xyz will be printed

///////////////////////////////////////////////////////////////////////////////////////////////////
console.log("/////////////////////////////////////////////////////////////////////////////////////////");

var name3 = "abc";

function greet2(){
    var name3 = "xyz";
    var age3 = 10;
    console.log(name3,age3);
}
greet2();
//console.log(name3,age3);    // This will give error as age is function scoped i.e. defined inside 
                            // function only

console.log("/////////////////////////////////////////////////////////////////////////////////////////");

var name4 = "pqrs";

if(name4 === "pqrs"){
    var hobbies = ["football","cricket","coding"];
    console.log(hobbies);
}

function greet3(){
    var name4 = "uvw";
    var age4 = 23;
    console.log(name4,age4,hobbies);
}

console.log(name4,hobbies);
greet3();

console.log("/////////////////////////////////////////////////////////////////////////");

var name5 = "jkl";

if(name5 === "jkl"){
    let hobbies1 = ["football","cricket","coding"];
    // Above line will throw an error as let is block scope, i.e. it is only accessible inside the
    // block in which it was defined
    console.log(hobbies1);
}

function greet3(){
    var name5 = "uvw";
    var age5 = 23;
    console.log(name5,age5,hobbies1);
}

console.log(name5,hobbies1);
greet3();


// The main difference b/w var , let and const is - 
// var = If defined in global scope is available everywhere
//     = If defined in function scope is available in that function only
//     = hence only has function scope
//     = If defined in if,else.while block, still available outside those blocks
// let = If defined in global scope is available everywhere
//     = If defined in function scope, then is available in that function only
//     = But along side this, if it is defined in any if/else/while block
//     = it is available there only. Hence, it has block scope. Same is applicable to const
//     = Except of object {} block, it is applied everywhere

// As a consequence, we use "let" always rather than "var".