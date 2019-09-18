'use strict'

let start = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
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


for (let item of optionalexpense) {
    console.log(item);
}