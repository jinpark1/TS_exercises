// Exercise 1 - Maybe use an Arrow Function?
var double = (value: number) => value * 2;
 
// Exercise 2 - If only we could provide some default values...
var greet = function (name = "Hey") {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
 
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
 
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);
 
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults
 
// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;