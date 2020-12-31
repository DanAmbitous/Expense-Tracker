function expenseInput() {
    let input = Number($("#moneyInput").val());

    var sum = 0;

    $(".expense").each(function() {
        sum = sum + Number($(this).val());
    });

    $("#theBalance").val(input - sum);
};

function incomeInput() {
    let input = Number($("#moneyInput").val());

    var sum = 0;

    $(".income").each(function() {
        sum = sum + Number($(this).val());
    });

    $("#theBalance").val(input + sum);
}

$("#content-page").show();

$("#settings-page").hide();

$("#income-page").hide();

function removeRow(element) { //Row remove button
    $(element).closest("tr").remove();

    expenseInput();
};

$(document).ready(function() {
    $("#add-expense").click(function() {
        var rowExpense = 
            `
            <tr class="removeExpense">
                <td>
                    <input type="text" placeholder="The item's name">
                </td>
                <td>
                    <input type="number" class="expense" placeholder="Item's cost" onkeyup="expenseInput()">
                </td>
                <td>
                    <input type="date">
                </td>
                <td>
                    <button id="rowRemoveButton" onclick="removeRow(this)" class="removeRow"><span class="material-icons">
                        remove_circle
                    </span></button>
                </td>
            </tr>
            `
            
        $("#table-expenses").append(rowExpense);
    });

    $("#add-income").click(function() {
        var rowIncome = 
        `
        <tr class="removeIncome">
            <td>
                <input type="text" placeholder="The item's name">
            </td>
            <td>
                <input type="number" class="income" placeholder="Income" onkeyup="incomeInput()">
            </td>
            <td>
                <input type="date">
            </td>
            <td>
                <button id="rowRemoveButton" onclick="removeRow(this)" class="removeRow"><span class="material-icons">
                    remove_circle
                </span></button>
            </td>
        </tr>
        `

        $("#table-incomes").append(rowIncome);
    });

    $("#removeExpense").click(function() { //Remove button
        $(".removeExpense").remove();
        confirm("Are you sure that you want to clear the expense list?");
    });

    $("#removeIncome").click(function() { //Remove button
        $(".removeIncome").remove();
        confirm("Are you sure that you want to clear the income list?");
    });

    $("#moneyInput").keyup(function() {
        expenseInput();
    });

    $("#incomes").click(function() {
        $("#table-incomes").show();
        $("#expenses").show();
        $("#table-expenses").hide();
        $("#incomes").hide();
        $("#removeExpense").hide();
        $("#removeIncome").show();
        $("#add-expense").hide();
        $("#add-income").show();
    });

    $("#expenses").click(function() { //Expenses page
        $("#table-incomes").hide();
        $("#expenses").hide();
        $("#incomes").show();
        $("#table-expenses").show(); 
        $("#add-expense").show();
        $("#add-income").hide();
    });

    $("#light-mode").click(function() {
        $("body").css('background-color', 'white');
        $("h1, p").css('color', 'black');
        $("#menu").css('color', 'black');
    });

    $("#dark-mode").click(function() {
        $("body").css('background-color', 'black');
        $("h1, p").css('color', 'white');
        $("#menu").css('color', 'white');
    });

    $("#menu-button").click(function() {
        $("#menu-page").slideToggle(100);
    });

    $("#settings").click(function() {
        $("#content-page").hide("fast");
        $("#settings-page").show("fast");
    })

    $("#content").click(function() {
        $("#content-page").show("fast");
        $("#settings-page").hide("fast");
    });
});