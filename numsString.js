
// Numbers - 
// Every number is JS is a floating point number. 5,-7 are stored as 5.0, -7.0
// Numbers are stored as 64 bits floating point number

// Number is the global number object in JS
// Number.MAX_SAFE_INTEGER;     = Biggest integer possible in JS (no decimal places)
// Number.MIN_SAFE_INTEGER;     = Smallest integer possible in JS (no decimal places)

// Number.MAX_VALUE;            = Biggest number possible in JS (includes decimal places)
// Number.MIN_VALUE;            = Smallest number possible in JS (includes decimal places)

//////////////////////////////////

// Floating point numbers - 

// 0.2 + 0.4 = 0.6      = In normal maths
// 0.2 + 0.4 = 0.6000000000001      = In JS
// This strange behaiviour is due to the way numbers are stored in JS
// 0.2 is converted into binary and in binary 0.2 is irrational and non-ending, same with 
// 0.4, hence the result is also irrational, then it is converted into decimal. This is why the o/p
// is like this

// (0.6000000000001).toFixed(3);    = 0.600 - fixes decimal places upto given parameter

// toString() - Also helps to convert any number to any other base
// (5).toString(2);     = O/P = 101

// The BIG INT - 
// To handle number larger than max integer, we can use big int
// 12343412434342323n       = Adding n to the end of a large number converts it to
// big int. Also, only integer numbers can be made into big int and not decimal ones.
// We can also do calculations with it but we can't mix big int with normal int.
// 10n - 4n = 6n    - This is fine
// 10n - 4 = Error