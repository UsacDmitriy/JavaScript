let name = 'Dmitry',
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
