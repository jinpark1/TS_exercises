var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    return Person;
}());
var person = new Person("Jin", "JinP");
console.log(person);
console.log(person.username, person.name);
