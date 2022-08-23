
// Normally classes are defined as shown below - 

// class Person{
//     name = 'Max';

//     constructor(){
//         this.age = 30;
//     }

//     greet(){
//         console.log('My name is '+this.name+' and i am '+this.age+" years old");
//     }
// }
// const p1 = new Person();
// p1.greet();

// This is how classes are written, but behind the scenes this class is written as a function 
// This function is called a Constructor function. All classes are made into constructor function
// behind the scenes by javascript

function Person(){
    this.age = 30;
    this.name = 'Max';
    this.greet = function(){
        console.log(this.name+" is "+this.age+" years old");
    };
}
const p2 = new Person();
p2.greet();

// This constructor function above doesn't return an object as we do not have any return 
// statement, then how is it forming an object
// It is forming an object due to the use of 'new' keyword before person
// If we call Person() without 'new' keyword, then it will not work as it is not 
// returning anything and will be executed as a normal function

// Adding 'new' keyword = 
// By adding 'new' keyword, behind the scenes, some changes are made in function
// Firstly, an empty object is created, it is given the same properties and functions
// given in function and then it is returned.

//////////////////////////////////////////////////////////////////////////////////////////////

// Prototype - 
// Javascript uses prototypical inheritance
// Constructor functions and prototypes power javascript objects

// Functions are objects which in non-class based implementation i.e. functional
// implementation have some pre-defined object from which they inherit some of the 
// properties
// In functional implementation, it is done using prototyping
// Now, if an object is created using a function object, then that object is based on the function
// but that function object is itself based upon another object prototype (which can be based on another
// prototype) and inherits its properties. Note that prototype is an object itself

// Prototypes can be considered as Fallback objects, ie they are the objects on which javascript
// starts looking for a property or a method if they are not found in that object which is 
// executing it.
// const person = new Person();
// person.hello(); = JS will look into function implementation of this person and if it does not contain
// hello() method, it will look into prototype class on which Person() object is based upon and so on.
// It will look into prototype object on which current prototype is based upon until it finds hello()
// method. If somehow, it doesn't find it even after last prototype, then it will produce an error
// The last prototype is Global Object prototype

// If you console.log(obj) any object, you can see all its properties and its functions,
// but along with it, you can also find another thing called '__proto__', it is also 
// an object and this is the base prototype on which our object is based upon
// It is based upon automatically without being added by user.
// Along with '__proto__' , there is also another object present as 'prototype'

// '__proto__' and 'prototype' - 
// __proto__ = This is present in all objects no matter how you create it, if you create using
// object literals, function object, object build with constructor function, array or any object
// that exists will have this in it.

// Prototype = This is present only in function objects. 
// This is used to create an object which can be then assign 

// assign an object which then will be assigned as prototype/fallback value to any object we create
// based on that constructor function

// Person.protoype = {
//    printAge(){
//        console.log("Prototype");
//    }
// }

// In above code, we have set a new object as an prototype of Person constructor function
// Now if we create a new object based on Person function, and call printAge() on it,
// it will check in Person function and when it can't find it there, it will also 
// look into this newly created prototype object and refer with it and use its printAge() function
// This is similar to inheritance in java

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Prototypes can be a confusing and tricky topic - that's why it's important to really understand them.

// A prototype is an object (let's call it "P") that is linked to another object (let's call it "O") -
// it (the prototype object) kind of acts as a "fallback object" to which the other object ("O") 
// can reach out if you try to work with a property or method that's not defined on the object ("O") itself.

// EVERY object in JavaScript by default has such a fallback object (i.e. a prototype object) -
// more on that in the next lectures.

// It can be especially confusing when we look at how you configure the prototype objects for 
// "to be created" objects based on constructor functions (that is done via the .prototype 
// property of the constructor function object).

// Consider this example:

// function User() {
//     ... // some logic, doesn't matter => configures which properties etc. user objects will have
// }
// User.prototype = { age: 30 }; // sets prototype object for "to be created" user objects, 
// NOT for User function object
// The User function here also has a prototype object of course (i.e. a connected fallback object)-
// but that is NOT the object the prototype property points at. Instead, you access the
// connected fallback/ prototype object via the special __proto__ property which EVERY object
// (remember, functions are objects) has.

// The prototype property does something different: It sets the prototype object, which 
// new objects created with this User constructor function will have.

// That means:

// const userA = new User();
// userA.__proto__ === User.prototype; // true
// userA.__proto__ === User.__proto__ // false

// Setting object this way - 
// Person.protoype = {
//    printAge(){
//        console.log("Prototype");
//    }
// }

// This way is bit bad as it replaces the constructor as main prototype of the object
// Rather than this, use below way - 

// Person.prototype.printAge = function(){
//     console.log(this.age);
// }
// This way, main constructor does not get replaced by new prototype

/////////////////////////////////////////////////////////////////////////////////////

// Global Object - 
// Every object is based on some prototype and that prototype could be based upon some other prototype
// and so on. This is called Prototype chaining
// Also the last object in this chain is Global object on which all objects are based upon.
// But this is also not the last object on which all objects are based upon
// And this object can be found out by below code - 
// console.dir(Object.prototype);

// If you type console.dir(Object.prototype.__proto__);
// It will return null, meaning that this is the last object

// console.dir(Object);
// The o/p of above command gives the Object prototype which has a lots of methods available in
// it , these methods are static methods

// Static methods - Below is the way through which we can add static methods
// to our constructors. It is not added to objects but to the constructor function
// itself
// Person.describe = function(){
//     console.log("Creating persons . . . ");
// }

//////////////////////////////////////////////////////////////////////////////////////////////////

// How methods work in prototypes -

// In a normal class based execution style, every object is instantiated by the fields and
// properties of the class, but all methods of that class are not made for every object
// Instead they are stored at one place and if an object refers to them, they are called.
// Here, fields are described and constructors are made which tell which things an object
// has to instantiated with. For functional constructors though, it has to be in some way
// to let javascript know.
// Similar thing is done here in functional constructors.

// Any object that is created using functional constructor has all the 
// fields and properties described in functional constructor assigned in it.
// Every object is instantiated with them and space for storage is assigned for these values
// Whereas methods are same across all the objects, hence to create new methods body, assign it some 
// space for each and every new object created would be inefficient.
// So, here in functional constructors javascript adds any methods described in constructor
// to a prototype instead of each object
// Thereby, it does not have to replicate methods for each object and can refer each object to
// that prototype in which all methods are described
// This saves space and better performance as even if 100 objects are created, only one prototype
// consisting of methods would be required


//
// function Person(){
//     this.age = 30;
//     this.name = 'Max';
//     this.greet = function(){
//         console.log(this.name+" is "+this.age+" years old");
//     };
// }
// const p2 = new Person();
// p2.greet();

// Normally, as above executed, each object will have greet method as a property, so as 
// to change this, we have to add properties like shown below - 

// function Person(){
//     this.age = 30;
//     this.name = 'Max';
// }

// Person.prototype.greet = function(){
//     console.log("Hello");
// }

// Here, greet() method is added directly in prototype 
// This way we can make sure each object is only instantiated with fields and properties
// only

/////////////////////////////////////////////////////////////////////////////////////////////////

// Extra Info - 
// To achieve the reverse of this in class based implementation, i.e. a method gets 
// created for each object -  
// Implement greet() function as shown below - 

// class Person{
//     name = 'Max';
//     greet1 = function(){
//         console.log('My name is '+this.name+' and i am '+this.age+" years old");
//     }

//      greet2 = () => {...}

//     constructor(){
//          this.age = 30;
//          this.greet1 = function(){...};
//          this.greet2 = function(){...};
//     }


// }


//////////////////////////////////////////////////////////////////////////////////////////////////

// Getters and Setters of Prototypes - 

// We can also set new prototypes and replace it with old prototypes using setters
// And get current prototype using getters

// 1. Getters - 

// const course = {
//     title : 'ABC',
//     rating : 3
// }

// console.log(Object.getPrototypeOf(course));
// Above command will return the prototype of course object

// 2. Setters - 

// Replacing old prototype with new one - 
// Object.setPrototypeOf(course, {
//     printRating : function(){
//         console.log(`${this.rating} / 5`);
//     }
// })
// Above code will replace the previous prototype with new prototype given.
// But the new object that we are setting is itself a prototype and an object, hence it is also 
// based on Object and hence all the previous Object methods would be available to us
// even though we replaced it.

// Adding new prototype to previous one without replacing it - 
// Object.setPrototypeOf(course, {
//    ...Object.getPrototypeOf(course),
//     printRating : function(){
//         console.log(`${this.rating} / 5`);
//     }
// })
// Above code will get prototype and spread it to our object and add new property to it.

////////////////////////////////////////////////////////////////////////////////////////////

// Create an object without a functional constructor - 
// Object.create("Pass the prototype based on which new object should be created");

// const student = Object.create({
//     printProgress : function(){
//         console.log("Good");
//     }
// });

// Above code here will create a new empty object based on the prototype provided 
// as parameters of create 