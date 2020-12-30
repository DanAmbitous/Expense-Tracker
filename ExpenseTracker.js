function updateExpenses() {
    let moneyInput = Number($("#moneyInput").val());

    var sum = 0;    

    $('.expense').each(function() { /*Adding value in a loop*/
       sum = sum + Number($(this).val());   
    });

    $("#theBalance").val(moneyInput - sum);
}

$("#content-page").show();

$("#settings-page").hide();

function removeRow(element) {
    $(element).closest('tr').remove();
    
    updateExpenses()
};

$(document).ready(function() {
    $('#add').click(function() {
        let newRow = 
        `<tr>
            <td>
                <input onclick="remove(this)" placeholder='Name'>
            </td>
            <td>
                <input type="text" class="expense" placeholder="Expense" onkeyup="updateExpenses()">
            </td>
            <td>
                <input type='date' placeholder='Date'>
            </td>
            <td>
                <button id="rowRemoveButton" onclick='removeRow(this)' class='removeRow'><span class="material-icons">
                remove_circle
                </span></button>
            </td>
        </tr>`

        $('#tbody').append(newRow);
    });

    $('#remove').click(function() {
        $('#tbody').empty();
    });

    $("#moneyInput").keyup(function() {
        updateExpenses();
    }); 
    
    /*var counter = 0;   handles an event every 3 times when button releases
    $("#moneyInput").keyup(function(){
        counter++;
        if(counter == 3) {
            alert(0);
            counter = 0;
        }
      });*/

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