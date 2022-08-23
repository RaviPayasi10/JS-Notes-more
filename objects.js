
// Objects - Core data structure of JS
// Helps us to create and apply real-world logic in programming
// Is built up of key-value pairs
// Stores data in properties and actions in methods

// All non-primitive data types are objects in JS
// {}, DOM, arrays, other built in objects - all are objects in JS

// Creating objects - 

const obj1 = {
    name : 'abc',
    age : 22,
    likes : ['football','sleeping'],
    hi : function(){
        console.log("Hi")
    },
    4 : 'Hi'
}


// Adding new content in object
obj1.club = "Barca";

// Deleting from object
delete obj1.age;

// Setting keys with space in its name and accessing it - 
// const obj2 = {
//    'first name' : 'Rav',
//    'last name' : 'Pay',
//     1.4 : 'hi'
// }
// obj2['first name'];  = only with bracket notation we can extract these type of key values
// obj2[1.4];   = For numbers also, bracket notation has to be used

// If we don't know the name of the property 
// For ex, lets say a user has entered a value which we have to use as key
// const userEnteredVal = 'val'
// To add this, we also have to use [] notation 
// [userEnteredVal] = someValue;  = This way, it won't create a key with "userEnteredVal" name
// but a key with 'val' and its value as 'someValue'

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Copying an object - 
const obj1 = {
    name : 'abc',
    hobbies : ['abc','efg']
}
// const obj2 = obj1;      This will only point obj2 reference to obj1 object 
// const obj2 = { ...obj1};    This will make new copy of obj2 but it still doesn't do deep copy
// Hobbies inside the obj1 is still a reference and in obj2 also they act as reference
// Hence, any change made in obj1.hobbies will be reflected back in hobbies of obj2

// const obj3 = { ...obj1, hobbies:[...hobbies]}
// Using above technique, we can make new reference of hobbies array. In this one, we have
// to pass the key as another argument in this spread operator and as its value, we have to 
// pass hobbies in spread operator itself

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Object Destructuring
// const obj1 = { name : 'abc',
//                age : 12};
// const { name , age } = obj1; = Returns in name,age variable the name and age key values
// Note - In arrays, any variable name could have been given as in arrays, destructuring is based on order
// whereas here, in objects exact key name has to be given to accomplish this

// const { name , ...otherProp} = obj1; 
// This will return name value in name variable and all other key values in otherProp as an array

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Checking if a prop exists in an obj
// if( info in obj){
//     
// }
// This 'key' in object property returns true if prop exists in object and false if not

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "this" in JS -
// 1. When called by us - 
// this keyword refers to the object that is calling it.
// function someFunction(){
//    return this.something 
// }
    
// movie.someFunction();   = Here, even though someFunction may be defined inside some
// object, but 'this' will not refer to that object but rather it refers to the object that 
// calls it.
// Note that it only works in this manner when it is being called by us (user) specifically

// 2. When called by an event listener, not by us - 
// When an event listener calls it, there is nothing infront of the function, hence it may be presumed
// that 'this' here will refer to GEC. But thats not the case as here it will refer to whomsoever is 
// calling it.
// Here, the event listener is calling it, and the event listener is being called by the button element
// Therefore, here 'this' refers to the element which is calling the event listener
// NOTE - This doesn't apply for Arrow Functions

// 3. When called in Arrow functions - 
// Every function that is created has a 'this', and it binds 'this' to whomsoever is calling it
// In case of arrow functions, they don't know 'this' keyword and hence it gets binded to whichever 
// thing it would be binded if called outside of that function

// "this" - Summary
// The this keyword can lead to some headaches in JavaScript - this summary hopefully acts as a remedy.

// this refers to different things, depending on where it's used and
// how (if used in a function) a function is called.

// Generally, this refers to the "thing" which called a function (if used inside of a function). 
// That can be the global context, an object or some bound data/ object 
// (e.g. when the browser binds this to the button that triggered a click event).

// 1) this in Global Context (i.e. outside of any function)

// function something() { ... }
 
// console.log(this); // logs global object (window in browser) - ALWAYS (also in strict mode)!

// 2) this in a Function (non-Arrow) - Called in the global context

// function something() { 
//     console.log(this);
// }
 
// something(); // logs global object (window in browser) in non-strict mode, undefined in strict mode

// 3) this in an Arrow-Function - Called in the global context

// const something = () => { 
//     console.log(this);
// }
 
// something(); // logs global object (window in browser) - ALWAYS (also in strict mode)!

// 4) this in a Method (non-Arrow) - Called on an object

// const person = { 
//     name: 'Max',
//     greet: function() { // or use method shorthand: greet() { ... }
//         console.log(this.name);
//     }
// };
 
// person.greet(); // logs 'Max', "this" refers to the person object

// 5) this in a Method (Arrow Function) - Called on an object

// const person = { 
//     name: 'Max',
//     greet: () => {
//         console.log(this.name);
//     }
// };
 
// person.greet(); // logs nothing (or some global name on window object), 
// "this" refers to global (window) object, even in strict mode
// this can refer to unexpected things if you call it on some other object, e.g.:

// const person = { 
//     name: 'Max',
//     greet() {
//         console.log(this.name);
//     }
// };
 
// const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method!
 
// anotherPerson.sayHi = person.greet; // greet is NOT called here, 
// it's just assigned to a new property/ method on the "anotherPerson" object
 
// anotherPerson.sayHi(); // logs 'Manuel' because method is called 
// on "anotherPerson" object => "this" refers to the "thing" which called it
// If in doubt, a console.log(this); can always help you find out what this is referring to at the moment!

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Getters and Setters - 

// Inside an object, we can define getters and setters to get as well as set values as well

// const obj1 = {
//      title : 'title',
//      type : 'action',
//      time : 5
// }

// We can set getters and setters fot the properties for above object

// const obj1 = {
//      set title(val){
//          this._title = val;   
//      }
//      get title(){
//          return this._title
//      }
//      
//      type : 'action',
//      time : 5
// }
// obj1.title = someValue;      = Using setter
// console.log(obj1.title);     = Using getter

// Make sure the name of getters and setters function is same as that of the key (property)
// And use this._keyName to tell browser that here we are refering to this objects inner variable

