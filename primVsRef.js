
// Primitive types - 
// number, strings, boolean, null, undefined, symbol
// Stored mostly on stacks, variables stores values itself
// If a new variable is copied from older one, the value is also copied
let name1 = "rash";
console.log(name1);
let name2 = name1;
console.log(name2);

name1 = "bash";
console.log(name1);
console.log(name2);
// name2 doesn't change as it only copies the value of name1, and when name1 is changed, name2 remaind intact

// Reference types - 
// Object, array
// Mainly stored in heaps
// The variable instead of storing actual values, stores the address of the memory where the object is stored
// Hence, here if a new variable copies the object/array, it also only stores the address of object.
// So, if the first object is changed, the second also changes
let obj1 = {
    name : "ships",
    age: 43,
    height: 6.4
}
console.log(obj1);

let obj2 = obj1;
console.log(obj2);
obj1.height = 4.9;

console.log("////////////////////////////////");
console.log(obj1);
console.log(obj2);
// here, even though changes were only made in first object, the same chaneges were reflected in obj2.

console.log("/////////////////////////////////////")

// How to copy an object so that a new copy is made instead of pointing it to previous obj
let obj3 = {...obj1};
console.log(obj3);

obj1.name = "peo";
console.log(obj1);
console.log(obj3);

// By using this "spread operator", instead of simply copying the address of obj1, the obj3 became
// a self independent copy of the obj1, hence even after changing the values of obj1, obj3 remained with 
// previous values

console.log("///////////////////////////////////////////");

// Different behavior of reference type const
const obj4 = ["sports"];
console.log(obj4);
obj4.push("crircket");
console.log(obj4);
// Even though obj4 is an array, it still doesn't show any error even when changed as 
// only address of array is stored in the variable and not the array itself.
// Therefore any changes made in array only changes the array where it is stored in the memory
// but not the address hence it doesn't give any error.

// If we instead reassigned the array to a new array, then it would give an error
// obj4 = ["sports","cricket"]; This line would give an error