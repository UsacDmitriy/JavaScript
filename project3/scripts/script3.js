let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    background: 'red'
};

delete options.bool;
console.log(options);

for (let key in options) {
    console.log('Property: ' + key + ' ' + "define " + options[key]);
}

console.log(Object.keys(options).length);

let arr = ['qww', 2, 'siski', 4, true];


//for (let i = 0; i< arr.length; i++ ) {
//    (arr[i]);
//}

arr.forEach(function(item, i, mass) {   
    console.log(i + ': ' + item + " (massive: " + mass + ')');
} );




