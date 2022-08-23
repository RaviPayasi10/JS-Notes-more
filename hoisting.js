
// For var

console.log(username);
var username = "ravi";
// output for above line shows "undefined" and not an error
// It does this due to hoisting, in this, the browser before executing the script goes through the
// the script first and notes down the function names, variable etc to the top of the script.
// For var declared variables, only the variable definition is taken up top and its initialisation 
// is defined as undefined until real initialization is met, shown below, hence undefined
// var username;        It is being initialized as "undefined" here
// console.log(username);
// username = "ravi"; 


console.log(username2);
let username2 = "ravi";
// Above line for "let" gives an error.
// Hoisting also works for let and const also but here instead of initialising username2 with 
// undefined as in case of var, here is left as it is thereby causing an error
