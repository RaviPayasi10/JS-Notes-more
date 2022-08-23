//alert("this works");

let result = 10;

let result2 = `By using tick quotes to cover string, we can put ${result} like this, thereby 
concatanate strings without using + operators`;
// It won't work with single or double quotes
// It is called Template Literal

let currentResult = 0;

function getUserInput(){
    return userInput.value; 
}


let logEntries = [];

// Convert string to int = parseInt() , parseFloat(), +string number
// Convert int to string = number.toString();

// Note = 3 * '3' = 9, javascript is intelligent enough to do this, same with multiplication and division
// 4 - '1' = 3; 3 * '2' = 6; All the output are integer o/p
// But only for addition, it would produce string output i.e 3 + '3' = '33'

function createAndWriteOutput(operator,resultBeforeCal,calcNumber){
    const calDescription = `${resultBeforeCal} ${operator} ${calcNumber}`;
    outputResult(currentResult,calDescription);
}

function writeToLog(operator, resultBeforeCal,operationNum, newRes){
    const logEntry = {
        operation: operator,
        prevResult: resultBeforeCal,
        number: operationNum,
        result: newRes
    };
    logEntries.push(logEntry);
    console.log(logEntry);
}

function add(num1,num2){

    const enteredNum = getUserInput();
    let calDescription = `${currentResult} + ${enteredNum}`;

    // User input will normally produce wrong answers as every input from html page even if 
    // mentioned as number will be taken as a string. Hence, numbers won't be added as numbers
    // but will be added as string (concatanated)
    // currentResult = currentResult + userInput.value;

    // Convert string input as number
    currentResult = currentResult + parseInt(enteredNum);
    // currentResult = currentResult + + userInput.value;   Another way to convert string to number
    // by just adding a "+" sign just before a string value.

    
    outputResult(currentResult,calDescription);
}

// multiply
function multiply(){
    const enteredNum = getUserInput();
    const initialRes = currentResult;
    currentResult = currentResult * enteredNum;
    createAndWriteOutput("*",initialRes,currentResult);
    writeToLog('Multiply',initialRes,enteredNum,currentResult);
}

// Subtract
function subtract(){
    const enteredNum = getUserInput();
    const initialRes = currentResult;
    currentResult = currentResult - enteredNum;
    createAndWriteOutput("-",initialRes,currentResult);
    writeToLog('SUB',initialRes,enteredNum,currentResult);
}

// Divide
function divide(){
    const enteredNum = getUserInput();
    const initialRes = currentResult;
    currentResult = currentResult / enteredNum;
    createAndWriteOutput("/",initialRes,currentResult);
    writeToLog('Divide',initialRes,enteredNum,currentResult);
}

addBtn.addEventListener("click",add);
multiplyBtn.addEventListener("click",multiply);
subtractBtn.addEventListener("click",subtract);
divideBtn.addEventListener("click",divide);


// Exceptional Data types
//1. Undefined = 
let unDefined;  // An un-initialized variable is of data type undefined
let arr = [];
arr[2]  // This is also undefined as there is no element at array index 2
// let a = undefined;       // Never assign undefined value like this


// 2. Null
// null is always assigned
let a = null;   // If null was not assigned, it would have been undefined
// Used mostly to clear or reset the data


// 3. NaN = Not a Number
// This is not different datatype but an error o/p of type number
let c = 3 * 'hi';
// Consoling out c would produce NaN as 3 can't be multiplied with string


// Array is a special type of object
// Null is also a type of object
// NaN is a number
// Undefined is "undefined" datatype