let money = +prompt('What is your budget?', "50000"),
    date = prompt("enter date. Format - YYYY-MM-DD", 2019-02-28);

let appData = {
    budget: money,
    timeDate: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt('Type of expense', '1'),
        b = prompt('Enter payment', '300');
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50)  {
        console.log('done');
        appData.expenses[a] = b;
    } else {}
}

appData.moneyPerDay = appData.budget/30;

alert("Dayly budget:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Minamal level');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
    console.log('Middle level')
} 