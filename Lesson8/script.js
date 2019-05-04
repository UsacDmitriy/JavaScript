/*function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello! ' + this.name);
    };
}

User.prototype.exit = function (name) {
    console.log('User' + this.name + 'goes out');
}

let ivan = new User('Ivan', 25);
let alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.exit(); */

/*function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5);
showThis(4, 36);*/
let obj = {
    a: 20,
    b: 30,
    sum: function () {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum();

// 1) Invoke function - window/undefined
// 2) Method of object - this = object
// 3) Constructor (new) - 


