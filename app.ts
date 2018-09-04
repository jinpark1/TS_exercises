// string
let myName: string = 'Jin';
// myName = 23;

// number
let myAge: number = 27.5;
// myAge = 'Jin';

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ["Cooking", "Sports"];
console.log(typeof hobbies);
hobbies = [100];

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray, // 0
    Green = 100, // 1
    Blue // 2
}

let myColor: Color = Color.Green;
console.log(myColor)

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
}

// argument types 
function multiply(value1: number, value2: number): number {
    return value1 * value2
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));

// function types 
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

// objects
let userData: { name: string, age: number } = {
    name: "Jin",
    age: 27
};
// userData = {
//     a: "Hello",
//     b: 22
// };

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

// check types
let finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("Final value is a number");
}

// never
function neverReturns():never {
    throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull = null;
canAlsoBeNull = null;   
let canThisBeAny: number | null = null;
canThisBeAny = 12;

// Arrow Functions
const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3))

const great = () => {
    console.log("Hello");
};
great();

const greetFriend = friend => console.log(friend);
greetFriend("Hal");

// Default Parameters
const countdown = (start: number = 10): void => {
    console.log(start)
    while (start > 0) {
        start--;
    }
    console.log("Done!", start)
};
countdown(20);


// Rest & Spread
const numbers = [1, 2, 5, 11, 23, 42];
console.log(Math.max(...numbers));
console.log(...numbers);

function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray(1, 2))

// Destructing Array
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

// Destructring Objects
const user = {userName: "Jin", age: 27};
const {userName: realName, age} = user;
console.log(realName, age);
