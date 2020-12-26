let add = document.getElementById('add');
add.addEventListener('click', addFunction);

let remove = document.getElementById('remove');
remove.addEventListener('click', removeFunction);

function addFunction() {
    let headerName = document.getElementById('theName');
    let name = document.createElement('input'); 
    name.setAttribute('placeholder', 'Name');
    name.setAttribute('class', 'element');
    headerName.appendChild(name);

    name.addEventListener('dblclick', function() {
        name.remove();
        date.remove();
        expense.remove();
    })

    let headerDate = document.getElementById('theDate');
    let date = document.createElement('input');
    date.setAttribute('placeHolder', 'Date');
    date.setAttribute('class', 'element');
    date.setAttribute('type', 'date');
    headerDate.appendChild(date);

    date.addEventListener('dblclick', function() {
        name.remove();
        date.remove();
        expense.remove();
    })

    let headerExpense = document.getElementById('theExpense');
    let expense = document.createElement('input');
    expense.setAttribute('placeHolder', 'Expense');
    expense.setAttribute('class', 'element expense');
    headerExpense.appendChild(expense);

    expense.addEventListener('dblclick', function() {
        name.remove();
        date.remove();
        expense.remove();
    })
}

function removeFunction() {
    let inputs = document.querySelectorAll('.element');
    inputs.forEach(element => element.remove());

    date.value = '';
    name.value = '';
    expense.value = '';
};

let save = document.getElementById('moneyChecker');
let theExpense = document.getElementById('expense');

let date = document.getElementById('formateDate');
date.setAttribute('type', 'date');
date.addEventListener('dblclick', function() {
    date.value = '';
});

let name = document.getElementById('formateName');
name.addEventListener('dblclick', function() {
    name.value = '';
});

let expense = document.getElementById('formateExpense');
expense.addEventListener('dblclick', function() {
    expense.value = '';
});

let input = document.getElementById('moneyInput');
input.addEventListener('input', output);
expense.addEventListener('input', output);
let expenses = document.querySelectorAll('.element expense');
for (let i; i < expenses.length; i++) {
    expenses[i].addEventListener('input', output);
}

function output() {
    let outputInput = input.value;
    let outputExpense = expense.value;
    let outputExpenses = expenses.value;
    let output = outputInput - outputExpense;
    let balance = document.getElementById('theBalance');
    balance.value = output;
}