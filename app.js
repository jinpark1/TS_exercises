// string
var myName = 'Jin';
// myName = 23;
// number
var myAge = 27.5;
// myAge = 'Jin';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ["Cooking", "Sports"];
console.log(typeof hobbies);
hobbies = [100];
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types 
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));
// function types 
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Jin",
    age: 27
};
// userData = {
//     a: "Hello",
//     b: 22
// };
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// check types
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("Final value is a number");
}
// never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull = null;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
// Arrow Functions
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var great = function () {
    console.log("Hello");
};
great();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Hal");
// Default Parameters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(20);
// Rest & Spread
var numbers = [1, 2, 5, 11, 23, 42];
console.log(Math.max.apply(Math, numbers));
console.log.apply(console, numbers);
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2));
// Destructing Array
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// Destructring Objects
var user = { userName: "Jin", age: 27 };
var realName = user.userName, age = user.age;
console.log(realName, age);
// Template Literals
var nameOne = "Jin";
var greeting = "Hello there, I'm " + nameOne;
console.log(greeting);
