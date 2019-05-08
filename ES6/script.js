/*let name = 'Dmitry',
    age = 30,
    mail = 'usachev2012@gmail.com';

document.write(`Age of ${name} is ${age}. His email is ${mail}`);

function makeArray() {
    var items = [];

    for (let i =0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
    console.log(this);
};

//fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});


function calcOrDouble(number, basis = 2) {
    basis = basis || 2;
    console.log(number*basis);
}

calcOrDouble(3,3);
calcOrDouble(3);

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height*this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'lj', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a+b+c);
}

let numbers = [2, 5, 7];

log(...numbers);*/

class options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width =width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv(text){
        let div = document.createElement('div');
        div.textContent = text;
        div.style.cssText = `height: ${this.height}px; width:${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}; `;
        document.body.appendChild(div);
    }
}

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let click = new options(100, 100, 'red', 24, 'center');
    click.createDiv('TEST my new method');
    
});

