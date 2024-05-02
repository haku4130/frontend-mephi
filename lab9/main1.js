"use strict";
var User1 = /** @class */ (function () {
    function User1(name, age) {
        this.name = name;
        this.age = age;
    }
    User1.prototype.hello = function () {
        console.log("Hi! My name is ".concat(this.name, ". And I am ").concat(this.age, " years old."));
    };
    return User1;
}());
var user1 = new User1('Alice', 30);
user1.hello();
