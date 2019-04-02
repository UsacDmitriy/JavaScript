let money = prompt('What is your budget?', "50000");

let date = prompt("enter date. Format - YYYY-MM-DD", 2019-02-28);

let appData = {
    budget: money,
    timeDate: date,
    expenses: null,
    optionalExpenses: null,
    income: null,
    savings: false
}

let a = prompt('Type of expense', '1');
let b = prompt('Enter payment', '300');

let c = prompt('Type of expense', '1');
let d = prompt('Enter payment', '100'); 
appData.expenses = {
    a: b,
    c: d
}

alert(appData.expenses.a);