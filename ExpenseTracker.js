/*let add = document.getElementById('add');
add.addEventListener('click', addFunction);*/

/*$('#add').click(function() {
    addFunction();
});*/

/*let remove = document.getElementById('remove');
remove.addEventListener('click', removeFunction);*/

/*$('#remove').click(function() {
    removeFunction();
});*/

/*function addFunction() {
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
}*/

$('#add').click(function() {
    let headerName = $('#theName');
    let name = $('<input>');
    name.attr('placeholder', 'The item\'s name');
    name.attr('class', 'element');
    headerName.append(name);

    $(name).dblclick(function() {
        name.empty();
        date.empty();
        expense.empty();
    });

    let headerExpense = $('#theExpense');
    let expense = $('<input>');
    expense.attr('placeholder', 'The item\'s expense');
    expense.attr('class', 'element expense');
    headerExpense.append(expense);

    $('#expense').dblclick(function() {
        name.empty();
        date.empty();
        expense.empty();
    });

    let headerDate = $('#theDate');
    let date = $('<input>');
    date.attr('placeholder', 'The item\'s date');
    date.attr('class', 'element');
    date.attr('type', 'date');
    headerDate.append(date);

    $(date).dblclick(function() { //?
        name.empty();
        date.empty();
        expense.empty();
    });
});
/*
function removeFunction() {
    let inputs = document.querySelectorAll('.element');
    inputs.forEach(element => element.remove());

    date.value = '';
    name.value = '';
    expense.value = '';
};

let save = document.getElementById('moneyChecker');
let theExpense = document.getElementById('expense');

let date = document.getElementById('formateDate');  //double click
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
}); //double click

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
}*/

/*$('#remove').click(function() {
    let inputs = $('.element');
    inputs.forEach(element => element.empty());

    name.val('');
    expense.val('');
    date.val('');
});

let save = $('#moneyChecker');
let theExpense = $('#expense');

let name = $('#formateName');
$(name).dblclick(function() {
    name.val('');
});

let expense = $('#formateExpense');
$(expense).dblclick(function() {
    expense.val('');
});

let date = $("#formateDate");
date.attr('type', 'date');
$(date).dblclick(function() {
    date.val('');
});

let input = $('#moneyInput');
$(input).click('input', output);
$(expense).click('input', output);
let expenses = $('.element expense');
for (let index = 0; index < expenses.length; index++) {
    expenses[index].$(click(function() {
        $('input,', output)
    }));
}

$(function output() {
    let outputInput = input.value;
    let outputExpense = expense.value;
    let outputExpense = expense.value;
    let output = outputInput - outputExpense;
    let balance = $('#theBalance');
    balance.val(output);
});*/