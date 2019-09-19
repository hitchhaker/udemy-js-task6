'use strict'

let startBtn = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],
    expense = document.getElementsByClassName('expenses-item'),
    btn = document.getElementsByTagName('button'),
    expensesItemBtn = btn[0],
    optionalexpensesBtn = btn[1],
    countBudgetBtn = btn[2],
    optionalexpense = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;
let appData = {
    budget: money,
    expences: {},
    optionalExpences: {},
    income: [],
    timeData: time,
    savings: false,
};

function preventUnstarted() {
    for (let b of btn) {
        //b.style.display = 'none';  //// just another way to solve the objective
        b.disabled = true;
        b.style.backgroundColor = 'gray';
        b.style.backgroundImage = 'none';
    }
    startBtn.disabled = false;
    startBtn.style.backgroundImage = 'linear-gradient(336deg, #ffbd75, #ff964b), linear-gradient(#fff, #fff)';
}
preventUnstarted();

startBtn.addEventListener('click', function() {
    time = prompt('Input date in format: YYYY-MM-DD', '2019-01-01');
    money = +prompt('What is your budget for a month?', '3200');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('What is your budget for a month?', '3200');
    }
    appData.budget = money;
    appData.timeData = time;

    budget.textContent = money.toFixed(2);
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
    for (let b of btn) {
        b.disabled = false;
        b.style.backgroundImage = 'linear-gradient(336deg, #ffbd75, #ff964b), linear-gradient(#fff, #fff)';
    }
});

expensesItemBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expense.length; i++) {
        let a = expense[i].value,
            b = expense[++i].value;

        if ((typeof(a) === 'string') && (typeof(a) != null) &&
            (typeof(b) != null) && a != '' && b != '' &&
            a.length < 50) {
            appData.expences[a] = b; // a - ключ, b - значення
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
    console.log('Proved #1'); //debug
});

optionalexpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalexpense.length; i++) {
        let opt = optionalexpense[i].value;

        if ((typeof(opt) === 'string') && (typeof(opt) != null) &&
            opt.length < 50) {
            appData.optionalExpences[i] = opt; // a1 - ключ, а2 - значення
            optionalexpensesValue.textContent += appData.optionalExpences[i] + ' ';
        } else {
            i = i - 1;
        }
    }
    console.log('Proved #2');
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = parseFloat(((appData.budget - +expensesValue.textContent) / 30).toFixed(2));
        daybudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            level.textContent = 'Minimal';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = 'Normal';
        } else if (appData.moneyPerDay > 2000) {
            level.textContent = 'High';
        } else {
            console.log("WTF?");
        }
    } else {
        daybudget.textContent = 'Error occured';
    }
});

chooseIncome.addEventListener('input', function() {
    let items;
    items = chooseIncome.value;
    // do {

    // } while (items == '' || items === null || typeof(items) != 'string');

    income.textContent = items;
    appData.income = items.split(', ');
    appData.income.sort();
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener('input', function() {
    if (appData.savings == true) {
        let cash = +sum.value,
            deposit = +percent.value;
        appData.monthIncome = (cash / 100 / 12 * deposit).toFixed(2);
        appData.yearIncome = (cash / 100 * deposit).toFixed(2);

        monthsavings.textContent = appData.monthIncome;
        yearsavings.textContent = appData.yearIncome;
    }
});

percent.addEventListener('input', function() {
    if (appData.savings == true) {
        let cash = +sum.value,
            deposit = +percent.value;
        appData.monthIncome = cash / 100 / 12 * deposit;
        appData.yearIncome = cash / 100 * deposit;

        monthsavings.textContent = appData.monthIncome.toFixed(2);
        yearsavings.textContent = appData.yearIncome.toFixed(2);
    }
});