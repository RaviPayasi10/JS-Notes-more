const startGameBtn = document.getElementById('start-game-btn');


// Below function is called function declaration/ function statemnt
function gameStart(){
    console.log("Game is starting ... ");
}

// gameStart();

startGameBtn.addEventListener("click",gameStart);

let person = {
    name : "rama",
    greet: function greet(){
        console.log("Hello There !!!");
    }
}

person.greet();
// This shows that an object can have a function inside it associated with one of its properties
// A function associated with an object is a called a method.

/////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION ARE ALSO OBJECTS
// Functions themselves are special form of objects, they contain key value pair
// to work for different things
console.dir(gameStart);
// When we console.dir out the greet function, the output we receive is an object of greet function
// consisting of key-value pairs, hence it is a special type of object
// Also, any thing that applies to objects, can also apply to functions

///////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTIONS CAN ALSO BE STORED IN VARIABLES = these are called function expressions

let funcVar = function func(){
    console.log("Function associated with variable");
}
console.log(funcVar);   // Console logs entire function 

funcVar();      // Executes the function
// Hence, using the variable name we can call the function associated with it.
// The function name(func()) is not present in the global scope, hence we can not access it by using func(),
// instead we can only use the variable name to access it.

//////////////////////////////////////////////////////////////////////////////////////////////

// Also, since above function cannot be accessed by using func(), we can also remove it
let funcVar2 = function(){
    console.log("Anonymous function associated with variable");
};
funcVar2();

//////////////////////////////////////////////////////////////////////////////////////////////////

// Diff b/w function expressions and function statements
// 1. Function statements during hoisting are taken to the top of the script by browser and hence no error
// is produced even after you call the function before its declaration as it is already on top
// script due to hoisting
// On the other hand, function expressions are similar to varibles in this aspect as they cannot be called
// before their declaration. Due to hoisting, they are also taken up on top of the script by the browser but
// at the top, similar to variables, it assigns them as undefined. Hence, if a function expression is
// called before their declaration, it will cause error as they are currently undefined 

/////////////////////////////////////////////////////////////////////////////////////////////////////

// ARROW FUNCTIONS
// Another way of defining functions is arrow functions, here we instead of using "function"
// keyword, we use "=>" symbol to mark that it is a function
const arrowFunc = (a,b) => {    // Here, instead of writing function(a,b), we simply omitted the
    // function keyword and passed the parameters and added "=>" symbol
    return a+b;
}

// Below code shows another way to write arrow functions, here we don't need parenthesis as
// well as return statement. We can simply omit return statement but still  it would return c-d as a result
const arrow2 = (c,d) => c-d;
// Arrow functions help in reducing the number of lines to write a function

// If no parameters are passed
const arrow3 = () => {
    console.log("Paramter less arrow function");
}

// If exactly one parameter is passed, we can omit the parenthesis
const arrow4 = e => {
    console.log(e);
}

// If object is returned, extra parentheses is required to surround the object
const arrow5 = pName => (
    {name : "arrow"},
    {age : 55},
    {class : "12th"}
)


///////////////////////////////////////////////////////////////////////////////////////

// PROPERTIES OF FUNCTIONS-
// Functions can have many parameters in their declaration. So, when they are called, the
// numbers parameters passed function call have to be equal to number of parameters passed in 
// function declaration. 
// But in javascript, we can call a function without passing all the parameters passed in it
// It will not throw an error, as javascript passes the missing parameters itself as undefined
// parameters.
const param = function paraMeter(a,b){
    return a+b;
}
param(5);   // This will produce NaN instead of error as js passes the value of second
// parameter as undefined.

// Also, in other programming lang, default value has to come after all other parameters, but in js,
// we can have undefined (default) parameters ahead of non-default values. But that means that when you
// call the function with only one value, the values gets passed as the first parameter which already
// has a default value, and the second parameter is passed as undefined.


// Rest functions
// Sometimes, we need functions which have unknown number of arguements passed into them.
// For this, we require rest parameters, using this, we can pass as many arguements as we want
// without specifying their numbers in function declaration
const restFunc = function restF(...numbers){
    let sum = 0;
    for(const num in numbers){
        sum += num;
    }
    return sum;
}
// Here, the ...numbers is taken as array consisting of all the arguements passed.
// then, it can be extracted as per desire.


// Also, if some other parameter behind ...num is passed, then it will be ignored
// const ignored = function ignore(...nums,a){  // This will give error since the arguments
// behind num is ignored

// }

// But we can have arguments ahead of it.
const aheadRest = function ahead(a,b,c,...nums){
    console.log("Rest parameters");
}

// Default arguments of a function
// NOTE - This only works for functions in which functions are defined by explicitly 
// using the "function" keyword.
// Function defined using "function" keyword has a special default argument passed into it which 
// gets invoked when arguments keyword is used
const defKey = function(){
    let sum = 0;
    for (const nums in arguments){
        sum += nums;
    }
    return sum;
}
// In above code, when the function is called with some parameters passed using it, but there is no
// parameters present in function declaration, these arguements gets handled by special argument
// called arguments. It is special feature but it is not recommended and rest operator is preferred


/////////////////////////////////////////////////////////////////////////////////////////////

// Functions Inside Functions
// We can also write functions inside functions as functions are also an object

let outerFunc = function(a,b){
    let innerFunc = () => {
        console.log("Inner function");
    }
    return a+b;
}

// The scope of inner function is inside the outer function only, just like a variable

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Callback functions
// "html.btn".addEventListener("click",function(){

// });
// In above code, the anonymous function is a parameter passed in another function i.e. addEventListener
// function. This here is callback function.
// All event related functions use callback functions in them. The parameter is like a pointer
// of anonymous function inside the event listener function
// This is called a callback function as it is called by someone else (an event) for us and not
// by us.

function checkInp(cb,...strings){
    let hasEmptyString = false;
    for(const string in strings){
        if(string === ""){
            hasEmptyString = true;
            break;
        }
    }

    if(!hasEmptyString){
        cb();
    }
}

checkInp(() => {
    console.log("All non-empty strings");
},"abc","12","t53js","");   // if empty string is present, it will not console out "All non-empty strings"
// Call back function (cb()) will only execute when all strings passed as parameter are non-empty

// Above is an exmaple of using anonymous, rest parameters, callback ,inner functions and how 
// they can be used together

////////////////////////////////////////////////////////////////////////////////////////////////////

// Bind() in functions
// Bind is used to pre-configure the arguments that are passed to a function.
// Let's suppose there is a function which is common to many different functions and perform
// various tasks based on the arguments passed to it.
// Now, if we want the output to have some different o/p depending on the argument passed 
// to it and we don't want to pass it during the function call but rather want it to 
// automatically do necessary things depending on the task it is performing, for this bind()
// is used.
// It is a default method that comes pre-defined
// IT IS USED TO PRE-CONFIGURE A FUNCTION ARGUMENTS WHEN WE ARE NOT CALLING THE ON OUR OWN
function bindFunc(num){
    console.log("example of bind");
}

bindFunc.bind(this,"some other args");
// How to use bind function -- Needs more clarity

// Apply() and Call()
// Just like bind(), these two are also pre-defined functions