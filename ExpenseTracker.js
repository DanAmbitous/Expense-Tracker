function output() {
    let sumAdd = 0;

    $(".income").each(function() {
        sumAdd = sumAdd + Number($(this).val());
    });

    let sumSubtract = 0;

    $(".expense").each(function() {
        sumSubtract = sumSubtract + Number($(this).val());
    });

    $("#theBalance").val(sumAdd - sumSubtract);
}

$("#content-page").show();

$("#income-page").hide();

$("#settings-page").hide();

$("#rating-page").hide();

$("#developer-page").hide();

$("#about-page").hide();

function removeRow(element) { //Row remove button
    if (confirm("Are you sure that you want to clear the row?") == true) {
   //$(element).closest(".expense").removeAttr(".expense");here
    $(element).closest("tr").remove();
        output()
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
                    <input type="number" class="expense" placeholder="Item's cost" >
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
            
        $("#table-expenses-body").append(rowExpense); //Here
    });

    $("#add-income").click(function() {
        var rowIncome = 
        `
        <tr>
            <td>
                <input type="text" placeholder="The item's name">
            </td>
            <td>
                <input type="number" class="income" placeholder="Income" >
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

        $("#table-incomes-body").append(rowIncome);
    });

    $('#table-incomes-body').on('keyup', '.income', function() {
        output()
    });

// mousedown ==> startTimer ==> 1 value onchange , mouseup ==> clearTimer

    $('#table-incomes-body').on('keyup', '.income', function() {
        output()
    });

    $('#table-incomes-body').on('mousedown', '.income', function() {
        setInterval(function() {
            output();
        }, 100)
    });

    $('#table-expenses-body').on('keyup', '.expense', function() {
        output()
    });

   $('#table-expenses-body').on('mousedown', '.expense', function() {
        setInterval(function() {
            output();
        }, 100)
    });

    $("#submit").click(function() {
        let numberExpenses = $("#table-expenses-body").children().length;
        let numberIncomes = $("#table-incomes-body").children().length;

        if (numberExpenses == 0 && numberIncomes == 0) {
            alert("Your table is empty")
        } else {
            alert("Submitted") 
            $("#table-expenses-body").empty();
            $("#table-incomes-body").empty();
        }
    });

    $("#removeExpense").click(function() {
        if(confirm("Are you sure that you want to clear the expense list?") == true) {
            $("#table-expenses-body").empty();
        } else {
            return false
        }
    });

    $("#removeIncome").click(function() { //Remove button
        if (confirm("Are you sure that you want to clear the income list?") == true) {
            $("#table-incomes-body").empty();
        } else {
            return false
        }
    });

    $(".incomes").change(function() {
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
    var selectedStar = null;

    function starCalculator(e) {
        var index = $(e).index();

       $("#rate button").css('color', 'white');

       $("#rate button").each(function(i, e) {
           if (i <= index) {
               $(e).css('color', 'yellow');
           }
        });
    }

    $("#rate button").mouseover(function() {
        starCalculator($(this));
    });

    $("#rate button").mouseout(function() {
        starCalculator($(selectedStar));
    });

    $("#rate button").click(function() {
        starCalculator($(this));
        selectedStar = $(this);
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
        $("#about-page").hide("fast");
    })

    $("#rating").click(function() {
        $("#content-page").hide("fast");
        $("#settings-page").hide("fast");
        $("#rating-page").show("fast");   
        $("#developer-page").hide("fast");  
        $("#about-page").hide("fast");
    });

    $("#developer").click(function() {
        $("#content-page").hide("fast");
        $("#settings-page").hide("fast");
        $("#rating-page").hide("fast");   
        $("#developer-page").show("fast"); 
        $("#about-page").hide("fast"); 
    });

    $("#about").click(function() {
        $("#content-page").hide("fast");
        $("#settings-page").hide("fast");
        $("#rating-page").hide("fast");
        $("#developer-page").hide("fast");
        $("#about-page").show("fast"); 
    });

    $("#content").click(function() {
        $("#content-page").show("fast");
        $("#settings-page").hide("fast");
        $("#rating-page").hide("fast");
        $("#developer-page").hide("fast");
        $("#about-page").hide("fast");
    });
});