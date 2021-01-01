/*function expenseInput() {
    let input = Number($("#moneyInput").val());

    var sum = 0;

    $(".expense").each(function() {
        sum = sum + Number($(this).val());
    });

    $("#theBalance").val(sum);
};*/

function output() {
    let sumAdd = 0;

    $(".income").each(function() {
        sumAdd = sumAdd + Number($(this).val());
    });

    let sumSubtract = 0;

    $(".expense").each(function() {
        sumSubtract = sumSubtract + Number($(this).val());
    });

    if (sumAdd || sumSubtract == false) {
        sumAdd = 0;
        sumSubtract = 0;
    }

    $("#theBalance").val(sumAdd - sumSubtract);
}

$("#content-page").show();

$("#income-page").hide();

$("#settings-page").hide();

$("#rating-page").hide();

$("#developer-page").hide();


function removeRow(element) { //Row remove button
    if (confirm("Are you sure that you want to clear the row?") == true) {
        $(element).closest("tr").remove();
    } else {
        return false
    }
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
                    <input type="number" class="expense" placeholder="Item's cost" onkeyup="output()">
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
                <input type="number" class="income" placeholder="Income" onkeyup="output()">
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
        if(confirm("Are you sure that you want to clear the expense list?") == true) {
            $(".removeExpense").remove();
        } else {
            return false
        }
    });

    $("#removeIncome").click(function() { //Remove button
        if (confirm("Are you sure that you want to clear the income list?") == true) {
            $(".removeIncome").remove();
        } else {
            return false
        }
    });

    $("#moneyInput").keyup(function() {
        output();
    });

    $("#incomes").click(function() {
        $("#table-incomes").show(250);
        $("#expenses").show(250);
        $("#table-expenses").hide(250);
        $("#incomes").hide(250);
        $("#removeExpense").hide(250);
        $("#removeIncome").show(250);
        $("#add-expense").hide(250);
        $("#add-income").show(250);
    });

    $("#expenses").click(function() { //Expenses page
        $("#table-incomes").hide(250);
        $("#expenses").hide(250);
        $("#table-expenses").show(250);
        $("#incomes").show(250);
        $("#removeExpense").show(250);
        $("#removeIncome").hide(250);
        $("#table-expenses").show(250); 
        $("#add-expense").show(250);
        $("#add-income").hide(250);
    });

    $("#light-mode").click(function() {
        $("body").css('background-color', 'white');
        $("h1, p").css('color', 'black');
        $("#menu").css('color', 'black');
        $("#rating-page").css('color', 'black');
        $("textarea").css('background-color', 'white');
        $("#textarea").css('color', 'black');
    });

    $("#dark-mode").click(function() {
        $("body").css('background-color', 'black');
        $("h1, p").css('color', 'white');
        $("#menu").css('color', 'white');
        $("#rating-page").css('color', 'white');
        $("textarea").css('background-color', 'black');
        $("textarea").css('color', 'white');
    });

    //Stars
    $("#star-button-1").mouseover(function() {
        $(this).css('color', 'yellow');
    });

    $("#star-button-1").mouseout(function() {
        $(this).css('color', 'white');
    });

    $("#star-button-2").mouseover(function() {
        $("#star-button-1").css('color', 'yellow');
        $(this).css('color', 'yellow');
    });

    $("#star-button-2").mouseout(function() {
        $("#star-button-1").css('color', 'white');
        $(this).css('color', 'white');
    });

    $("#star-button-3").mouseover(function() {
        $("#star-button-1").css('color', 'yellow');
        $("#star-button-2").css('color', 'yellow');
        $(this).css('color', 'yellow');
    });

    $("#star-button-3").mouseout(function() {
        $("#star-button-1").css('color', 'white');
        $("#star-button-2").css('color', 'white');
        $(this).css('color', 'white');
    });

    $("#star-button-4").mouseover(function() {
        $("#star-button-1").css('color', 'yellow');
        $("#star-button-2").css('color', 'yellow');
        $("#star-button-3").css('color', 'yellow');
        $(this).css('color', 'yellow');
    });

    $("#star-button-4").mouseout(function() {
        $("#star-button-1").css('color', 'white');
        $("#star-button-2").css('color', 'white');
        $("#star-button-3").css('color', 'white');
        $(this).css('color', 'white');
    });

    $("#star-button-5").mouseover(function() {
        $("#star-button-1").css('color', 'yellow');
        $("#star-button-2").css('color', 'yellow');
        $("#star-button-3").css('color', 'yellow');
        $("#star-button-4").css('color', 'yellow');
        $(this).css('color', 'yellow');
    });

    $("#star-button-5").mouseout(function() {
        $("#star-button-1").css('color', 'white');
        $("#star-button-2").css('color', 'white');
        $("#star-button-3").css('color', 'white');
        $("#star-button-4").css('color', 'white');
        $(this).css('color', 'white');
    });

    $("#star-button-6").mouseover(function() {
        $("#star-button-1").css('color', 'yellow');
        $("#star-button-2").css('color', 'yellow');
        $("#star-button-3").css('color', 'yellow');
        $("#star-button-4").css('color', 'yellow');
        $("#star-button-5").css('color', 'yellow');
        $(this).css('color', 'yellow');
    });

    $("#star-button-6").mouseout(function() {
        $("#star-button-1").css('color', 'white');
        $("#star-button-2").css('color', 'white');
        $("#star-button-3").css('color', 'white');
        $("#star-button-4").css('color', 'white');
        $("#star-button-5").css('color', 'white');
        $(this).css('color', 'white');
    });

    $("#star-button-1").click(function() {
        $(this).toggleClass('.clicked');
    });
    //Stars

    $("#menu-button").click(function() {
        $("#menu-page").slideToggle(100);
    });

    $("#settings").click(function() {
        $("#content-page").hide("fast");
        $("#settings-page").show("fast");
        $("#rating-page").hide("fast");
        $("#developer-page").hide("fast");  
    })

    $("#rating").click(function() {
        $("#content-page").hide("fast");
        $("#settings-page").hide("fast");
        $("#rating-page").show("fast");   
        $("#developer-page").hide("fast");  
    });

    $("#developer").click(function() {
        $("#content-page").hide("fast");
        $("#settings-page").hide("fast");
        $("#rating-page").hide("fast");   
        $("#developer-page").show("fast"); 
    });


    $("#content").click(function() {
        $("#content-page").show("fast");
        $("#settings-page").hide("fast");
        $("#rating-page").hide("fast");
        $("#developer-page").hide("fast");
    });
});