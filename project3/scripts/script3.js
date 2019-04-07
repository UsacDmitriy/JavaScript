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

//let arr = ['qww', 2, 'siski', 4, true];


//for (let i = 0; i< arr.length; i++ ) {
//    (arr[i]);
//}

//arr.forEach(function(item, i, mass) {   
//    console.log(i + ': ' + item + " (massive: " + mass + ')');
//} );

//let mass = [1, 2, 4, 7, 9, 32, 9];
// for (let key in mass) {
//     console.log(key);
//}

//let ans = prompt ("qww", "uyy"),
  //  arr = [];
   // arr = ans.split(',');
//console.log('ans');

/*let arr = ['vddebvev', 'gheisbvide','jvjsnc', 'jjjjj', 'dswdad'],
    i = arr.join(', ');
    console.log(i);*/

let arr = [1, 2, 3, 1, 23, 334, 4, 32, 12],
    i = arr.sort(compareNum);
function compareNum(a, b) {
    return a-b;
}
console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);

