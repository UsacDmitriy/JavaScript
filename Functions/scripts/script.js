
let money, date;

function start() {
    
    money = +prompt('What is your budget?', "50000");
    date = prompt("enter date. Format - YYYY-MM-DD", 2019-02-28);

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('What is your budget?', "50000");
    }
}

// start();

let appData = {
    budget: money,
    timeDate: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses( ) {

for (let i = 0; i < 2; i++) {
    let a = prompt('Type of expense', '1'),
        b = prompt('Enter payment', '300');
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50)  {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        alert('Incorrect data! Try again.');
        i--;
    }
}
}

//chooseExpenses();

function detectDaylyBudget() { 
    appData.moneyPerDay = (appData.budget/30).toFixed(2);
    alert("Dayly budget:" + appData.moneyPerDay);
}

//detectDaylyBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Minamal level');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
        console.log('Middle level');
    }  else if (appData.moneyPerDay > 2000) {
        console.log('High level');
    } else {
        console.log('Error!');
    }
}

// detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('How much do you have'),
            percent = prompt("You interest?");

            appData.monthIncome = save/100/12*percent;
            alert('Your exceed ' + appData.monthIncome);
    }
}

// checkSavings(); 

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let exp = prompt("Do you have additional expenxes?");
        appData.optionalExpenses[i] = exp;
    }
    console.log(appData);
}

chooseOptExpenses();