
// Iterables - It is an object where we can use for-of loop
// Array, NodeList, String, Map, Set all are iterables

// Array Like Objects - Objects that have length property and uses index to access items
// NOTE - Array-like objects are not arrays

// Ways of Creating Arrays - 
// 1. const arr1 = [1,2,3];

// 2. const arr2 = new Array("Hi","Bye");
// This technique works for numbers also except when the number is of elements passed is 1
// const arr3 = new Array(1,2,3,4); = Works fine, [1,2,3,4] array gets created
// const arr4 = new Array(4);   = In this case, instead of treating it as a number, it treats it as
// size of the array, [] - empty array of size 4 gets created

// 3. const arr5 = Array(2,6);
// This is just improved version of previous way with just "new" keyword being omitted.
// It exactly works as previous one

// 4. const arr6 = Array.of(2,3);

// 5. const arr7 = Array.from("Array");
// This is special method as it takes array-like objects and converts them to an array
// ["A","r","r","a","y"] = This is the o/p of arr7.

// First method is mostly used, also fifth method is useful

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// What can be stored in array ?

// Arrays can be homogeneous or heterogeneous
// They can store numbers, strings, nested arrays, objects etc

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Adding and removing

// Adding - 
// const arr = [1,2,3];
// arr.push(4); = [1,2,3,4] - Adds at last
// arr.unshift(0); = [0,1,2,3,4] - Adds at beginning

// Removing - 
// arr.pop(); = [0,1,2,3] - Removes last item
// arr.shift(); = [1,2,3] - Removes first item

// Accessing undefined item = returns undefined

// Splice method - Special method - takes 3 arguments 
//      First - which index to start lookinh
//      Second - how many items to delete
//      Third - items that have to be added
// const arr = [1,2,3,4];
// arr.splice(2,0,100); = [1,2,3,100,4]
// It looked at 2nd index, i.e. 3 and after that how many items to delete i.e. 0 
// and then added 100 to it

// Can also be used to delete
// arr.splice(0,1); = [2,3,100,4], deleted 1 item from 0th index
// arr.splice(1);   = [2], deletes all except first item
// arr.splice(0);   = [] , deletes whole array
// It also returns the deleted item, hence can be used if needed

// Slice Method - 
// const arr = [1,3.2,5.99,10];
// console.log(arr.slice()); = [1,3.2,5.99,10];
// The special thing here is that it returns a brand new array, hence can be used for copying

// Also helps in slicing the array, i.e. returning a part of the array
// console.log(arr.slice(2,5)); = Returns new array with 2nd till 5th element with 2nd being
// included and 5th being excluded.
// arr.slice(2); = Returns complete array from index 2


// Concat method - Helps adding new array behind first array
// const arr = [1,2,3,4];
// const newArr = [5,6];
// arr.concat(newArr);  = Returns new array with paramter array added behind arr
// arr.concat([11,12,13]);

// IndexOf() and lastIndexOf() -
// const arr = [1,2,3,4,5,3,2,3,1];
// const op1 = arr.indexOf(3);  = Returns 2, first index of 3
// const op2 = arr.lastIndexOf(3); = Returns 7, last index of 3

// find() method - Used to find in objects
// const objArr = {{name: 'Max'},{age:'19'}};
// const res = objArr.find(person => {
//    return personalbar.name = 'Max'
//});
// This function will return boolean, also it doesn't make a new copy and returns original object

// findIndex() method - instead of boolean, it returns index of element
// const objArr = {{name: 'Max'},{age:'19'}};
// const res = objArr.findIndex(person => {
//    return personalbar.name = 'Max'
// });


// isIncluded() - returns boolean if an element exists or not
// const arr = [1,2,3,4,5];
// arr.includes(3); = Returns true as 3 exists

// Alternative for loops - 
// const prices = [2,5,7,9];
// const tax = 0.19;
// const taxAdjustedPrice = [];
// for (const price in prices){
//    taxAdjustedPrice.push(price * (1+tax));
// }
// One drawback here is that we don't have access to index of elements

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sorting array - 
// const arr = [3,60,10,72,212];
// const sortedArr = arr.sort(); = [10,212,3,60,72] = It converts entire array into string and then sorts it
// hence, this result comes. It can be improved though.

// const sortedArr2 = arr.sort( (a,b) => {
//  if(a > b){
//       return 1;
//  }else if(a === b){
//        return 0;
//   else{
//        return -1'
//      }
//   }
// } );
// This will give the correct o/p

// Reverse array - 
// const arr = [1,2,3,4];
// arr.reverse(); = returns [4,3,2,1]

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Filter array - If we want to find elements based on some filter
// const arr = [1,2,3,4,5];
// const filteredArr = arr.filter((price,idx,arr) => {
//     return price > 6;
// });
// In new filtered array, only those elements which are greater than 6 will be added to filteredArr

//////////////////////////////////////////////////////////////////////////////////////////////////////

// String methods - 
// split() - Splits string based on operator and returns array
// const str1 = "new york;12;noon";
// str1.split(";"); = returns ["new york","12","noon"];
// An array with string seperated based on paramter passed

// join() - takes array and joins it as a string based on seperator
// const arr = ['Max','mueller'];
// arr.join(" ");   = Returns 'Max mueller' , a string is returned

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Spread Operator - Copies and returns a new array
// const arr = [12,34,13,45];
// const newArr = [...arr];  = Returns a new array consisting of all elements of previous array

// Uses - 
// Math.min(...arr); = Returns 12

// Exception with Objects - 
// An array consisitng of objects is an array with references of those objects, hence any change 
// made in object will be reflected in a copy as well
// const objArr = [ { name: 'Rav'},{age:23} ];
// const newObj = [...objArr];
// Now this array although will be a new array, but in it, it only stores the reference values
// of objects, so if any change is made in those object will be reflected in copied array too

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Destructuring array - 
// Way of taking out individual elements of an array

// const arr = ['Mr','Ravi',1,2,3];
// const [ salutation , firstName ] = arr;   
// console.log(salutation,firstName); = Returns 'Mr Ravi'

// const [ salutation , firstName , ...otherInfo] = arr;
// console.log(salutation , firstName , otherInfo); = Returns 'Mr Ravi' ,[1,2,3]

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sets - 
// 1. Store nested data of any kind and length
// 2. It is also an iterable, has special methods for itself
// 3. But unlike arrays, order of elements here is not guaranteed
// 4. Also , unlike arrays, duplicates are not allowed

// Defining sets - 
// const set1 = new Set();  = Creates empty set
// const set2 = new Set([1,2,3]);  = Set with iterable in it.

// Accessing the values - 
// set2.has(2);  = Returns true

// Adding a value - 
// set2.add(5);  = [1,2,3,5]
// set2.add(1);  = [1,2,3,5] = Even though added again, set can't have duplicate values, hence
// even after adding again, 1 is shown once only

// Getting entire set - 
// set2.entries() 
// for(const entry of set2.entries){
//      console.log(entry);
// }

// Delete a value - 
// set2.delete(2);  = returns [1,3,5]
// set2.delete(10); = returns [1,3,5], even though value is not present in set, it doesn't show error
// and just ignores it.

// WeakSet - Stores only objects and not anything else
// let person1 = (name : 'Ravi');
// const weakset = new WeakSet();
// weakset.add(person1);
// It is useful as if person1 was made null, it's data will be garbage collected but
// if it was normal set, it will not be garbage collected

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Maps - 
// 1. Stores key-value pair data of any kind and length
//      But unlike objects which have keys as strings,numbers only,
//       here keys can of any type, be it string, array etc
// 2. It is also an iterable with special map methods
// 3. Order is guaranteed but duplicate keys are not allowed and accesses are made through key based accesses

// Creating -
// const map1 = new Map(key,value);

// WeakMap - Used to store objects as key value pairs
// let person1 = (name : 'Ravi');
// const weakmap = new WeakMap();
// weakMap.add(person1,'Extra info');

// Here also, if the person1 was set to null, the values stored in it will be garbage collected
// It wouldn't happen in case of normal map

///////////////////////////////////////////////////////////////////////////////////////////////////////

const nums = [1,2,3,4,5,6];
const res1 = nums.filter((val) => val > 3);
console.log(res1);

const mappedNums = nums.map((val) => ({num : val}));
console.log(mappedNums);