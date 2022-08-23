const startGameBtn = document.getElementById('start-game-btn');


// Below function is called function declaration/ function statement
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


/////////////////////////////////////////////////////////////////////////////////////////////////

// Anonymous functions - 
// Functions whose names are not given are called anonymous functions

function gameStart(){
    console.log("Game is starting ... ");
}

startGameBtn.addEventListener("click",gameStart);

// The code above can be replaced by below code

startGameBtn.addEventListener("click", function(){
    console.log("Game is starting...");
});
// Above function does not have a name, hence it is called anonymous function, also it can't be called

// Similar to above, we have named anonymous functions, these do have name but still can't be called, hence
// called anonymous functions. This method is used to debug as we can see function name if any 
// error occurs unlike in nameless anonymous functions
 startGameBtn.addEventListener("click",function startGame1(){
     console.log("Game is starting by named anon function ...");
 });