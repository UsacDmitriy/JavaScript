let startCalculation = document.getElementById('start');


let values = document.getElementsByTagName('div');

let _values = [],
    str = '-value';

for (i of values)    {
   let a = i.className;
    if (a.includes(str) == true) {
        _values.push(i);

    }
};
console.log(_values);

let expenses = document.getElementsByClassName('expenses-item');
console.log(expenses);

let buttons = document.getElementsByTagName('button');
for (i of buttons)    {
     if (i.className == 'expenses-item-btn') {
         let submitButton = i;
         console.log(submitButton);
     }
     if (i.className == 'count-budget-btn') {
        let calculateButton = i;
        console.log(calculateButton);
    }
 };

let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalExpenses);

let income = document.querySelector('.budget -value'),
    checksavings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    interest = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    


    