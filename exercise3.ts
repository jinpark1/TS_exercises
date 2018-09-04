// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string;
    accleration: number = 0;
    
    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Tooooooooot!");
    }

    accelerate(speed: number) {
        this.accleration = this.accleration + speed;
    }
}
const newCar = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    width = 0;
    length = 0;
};
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle;
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class NewPerson {
    private _firstName: string = '';

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}

const helloPerson = new NewPerson();
console.log(helloPerson.firstName);
helloPerson.firstName = "J";
console.log(helloPerson.firstName);
helloPerson.firstName = "Jin";
console.log(helloPerson.firstName);

