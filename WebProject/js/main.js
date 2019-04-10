let startCalculation = document.getElementById('start');
console.log(startCalculation);

let values = document.getElementsByTagName('div');


let _values = [],
    str = '-value';

for (i of values)    {
   let a = i.className;
    if (a.includes(str) == true) {
        _values.push(i);
        console.log(i);
    }
};

console.log(_values);
