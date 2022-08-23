
// Javascript runs on a single thread, that means it only executes one step at a time and
// one after other.

// If a program has 4 processes - A,B,C,D and executed in same order
// A --> B --> C --> D, then only when A is completely executed, b will start.

// This is a major problem as if one step is interuptted, entire code after would also 
// be stopped. Hence to solve this, asynchronous code has to be used.

// How Async works - 
// If there is some code that will take more time, we can make it async. When it becomes
// async, the JS gives out that part of code to the browser.
// The browser which can have multiple threads then goes onto execute the code given to it.
// The JS continues execute code ahead and if it encounters more async codes, it keeps on 
// giving it to browser so that they can be handled by it.
// The browser after executing those codes need to return them back to JS, so to do this
// callback functions are used. These callback functions are the functions which JS should execute
// when the async work is completed by the browser.

// const btn = document.querySelector('.btn');
// function cb(){
//    console.log("Clicked");
// }
// btn.addEventListener('click',cb);

// The above code is async as it waits for a click on button which is asynchronous.
// Hence, this event is handled by browser, the callback function here is what 
// browser should call when the execution of btn click is done.

/// Blocking 'Code' and Event Loop - 
// Event loop - It helps to deal with async code and call back functions
// Let's understand with an example - 

// const greet = () => {
//     console.log("Hi");
// }

// const showAlert = () => {
//     console.log("Danger!");
// }

// setTimeout(showAlert,2000);

// greet();

// For executing this code, there are three things that help us to execute them.
// Stack, Browser API and Message Queue

// As soon as this program starts executing, it stores the variables. Then it starts with the
// execution of setTimeout() and it is added to Stack.
// Now, setTimeout() since is async code and can take lots of time
// and thus block further code, it is given to browser to handle which creates an ongoing
// timer inside of it. Then this function is removed from stack.
// Note that it is only removed from stack but its timer is handled by browser hence
// it is not executed till now.

// Javascript moves on without waiting for previous timer to finish.
// Now, it adds greet() method to stack. Inside greet(), there is console.log,
// this is also added to stack. This console.log is executed and "Hi" is printed
// on console. Then it is removed from stack, and then greet() is also removed 
// from stack.

// Now if by the time greet() is executed, timer finishes, then we need some way 
// for browser to execute the callback function. For this. message queue is used.
// Message queue is built into browser.
// In message queue, async events are added as a queue one after other and executed once
// stack is empty.
// The showAlert() function is added to this message queue. It will still not
// be executed at this point, it will only execute when the stack is 
// completely empty.

// Now to get this function back into stack, we need something called Event Loop.
// Event loop is also built into the browser.
// Event loop checks first if the call stack is empty or not, if it is empty,
// it looks for if any function is left to be executed in message queue, if there is
// then it removes it from message queue and adds it to call stack.

// In our example, showAlert() function is then added from message queue to call stack 
// and it calls alert() message which then executed and "Danger!" is printed.

////////////////////////////////////////////////////////////////////

// Multiple Callbacks - 
// When multiple callbacks are present, it then also implements in same manner.
// function trackNumber(){
//     navigator.geolocation.getCurrentPosition(
//         posData => {
//             setTimeout( () => {
//                 console.log(posData);
//             },2000);
//         }, error => {
//             console.log(error);
//         }
//     );
//     console.log("Getting position...");
// }

// btn.addEventListener('click',trackNumber);
// console.log('Hi');

// In above code, there are multiple callback functions, first event listener
// second navigator, then inside it, setTimeout and then also the console.log of 
// 'getting position'.
// Here, also, 'Hi' will be printed first, as it's not an async code,
// Also, the trackNumber() which is an async code will be added to DOM API.
// After emptying of stack, the next function trackNumber() which was in  
// browser API was executed. The position is gathered and then it is removed from
// there and taken to message queue, as soon as stack is emptied, it get removed from 
// there and gets added to call stack. There it gets executed.

// Problems with nested callbacks - 
// It's already cumbersome to read a little nested callback functions, now if it were to 
// be become bigger nested callback function, it will be even more difficult, hence to 
// solve it, we have something called Promises.

// Promise - A promise is an object which has a functionality of having a 'then'
// method which can be used to execute other functions.

// const promise = new Promise();   = Creating promise object
// In parameters, it takes two arguments, resolve and reject. These both are functions
// that are not passed by us but rather by javascript itself.


// Basic Promise code - 
let p = new Promise( (resolve,reject) => {
    let p = true;
    p = false;
    if(p){
        resolve('Success');
    }else{
        reject('Failed');
    }
});

p.then( (message) => {
    console.log('This is in the "then" '+message);
}).catch( (message) => {
    console.log('This is in the "catch" '+message);
})

// In above code, a new promise with variable 'p' is created. This promise takes two 
// variables, resolve and reject. If promise is completed, resolve is executed else
// reject is executed.
// Inside the promise body, we have code which has the contents of the promise.
// outside of it, we use this promise to perform other functions dependent on it.
// p.then() = is executed if the promise was completed (resolved) and p.catch() 
// is executed if the promise was rejected.

// Another huge benefit of promises is that if we wanted to add more work, we can just 
// use 'then' again 
// p.then().then().then().catch();

// Placement of catch() - 
// catch() has to be placed mostly at last because if any of the 'then'
// before it have any error, JS will stop execution of all 'then' and 
// look down until it sees a catch().
// If placed in middle, it will not catch any errors beyond itself, so 
// all 'then's' before catch() are taken into account, but if any then after
// the catch() has error, it will not be caught.
// Hence, it is preferable to put catch() at last although there can
// be situations where it is required to place it earlier.


// Parallelly executing promises - 
const recordVid1 = new Promise( (resolve,reject) => {
    resolve('Video 1 recorded');
})

const recordVid2 = new Promise( (resolve,reject) => {
    resolve('Video 2 recorded');
})

const recordVid3 = new Promise( (resolve,reject) => {
    resolve('Video 3 recorded');
})

Promise.all( [
    recordVid1,
    recordVid2,
    recordVid3
]).then( (message) => {
    console.log(message);
})

// Parallely running but waiting for execution of any one -
Promise.race( [
    recordVid1,
    recordVid2,
    recordVid3
]).then( (message) => {
    console.log(message);
})

// Running all even though some may fail
Promise.allSettled([
    recordVid1,
    recordVid2,
    recordVid3
]).then( (message) => {
    console.log(message);
})

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Async Await - 
// Even promises sometimes can become difficult to read, and for that we have async await
// to reduce their complexities.

// Async can only be applied on functions
// Create it by adding word 'async' infront of function name
// async function func1(){}     = In function declaration
// const fun = async function func2(){}     = In function expression
// Async functions always returns a promise

// Infront of promises we use the word 'await'


// Example of code using Promises first and then implementing same using Async Await
function makeRequest(location){
    return new Promise( (resolve,reject) => {
        console.log('Making request to '+location);
        if(location === 'Google'){
            resolve('Google says Hi');
        } else{
            reject('We can only talk to Google');
        }
    })
}

function processRequest(response){
    return new Promise( (resolve,reject) => {
        console.log('Processing response');
        resolve('Extra Info '+response);
    })
}


// Using then/catch to implement promises
makeRequest('Google').then( (response) => {
    console.log('Response received');
    return processRequest(response);
}).then( (processResponse) => {
    console.log(processResponse);
}).catch( (err) => {
    console.log(err);
})

// Using Async Await to implement Promises
async function doWork(){
    const res = await makeRequest('Google');
    console.log('Response received');
    const processedRes = await processRequest(res);
    console.log(processedRes);
}

// Catching error with above code - 
// To catch errors in Async code, we have to wrap it around try-catch block
async function doWork(){
    try{
        const res = await makeRequest('Google');
        console.log('Response received');
        const processedRes = await processRequest(res);
        console.log(processedRes);
    }catch(err){
        console.log(err);
    }
    
}