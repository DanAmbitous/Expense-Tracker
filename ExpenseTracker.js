function expenseInput() {
    let input = Number($("#moneyInput").val());

    var sum = 0;

    $(".expense").each(function() {
        sum = sum + Number($(this).val());
    });

    $("#theBalance").val(input - sum);
};

$("#content-page").show();

$("#settings-page").hide();

$("#income-page").hide();

function removeRow(element) { //Row remove button
    $(element).closest("tr").remove();

    expenseInput();
};

$(document).ready(function() {
    $("#add").click(function() {
    var rowExpense = 
        `
        <tr>
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
    var rowIncome = 
        `
        <tr>
            <td>
                <input type="text" placeholder="The item's name">
            </td>
            <td>
                <input type="number" class="expense" placeholder="Income" onkeyup="expenseInput()">
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
        $("#table-incomes").append(rowIncome);
    });

    $("#remove").click(function() { //Remove button
        $("tr").remove();
    });

    $("#moneyInput").keyup(function() { //Wallet input
        expenseInput();
    });

    $("#incomes").click(function() {
        $("#table-incomes").show();
        $("#expenses").show();
        $("#table-expenses").hide();
        $("#incomes").hide();
    });

    $("#expenses").click(function() { //Expenses page
        $("#table-incomes").hide();
        $("#expenses").hide();
        $("#incomes").show();
        $("#table-expenses").show(); 
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