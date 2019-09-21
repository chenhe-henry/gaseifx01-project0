var numberOfRows = 0;
var numberOfEditingRowNumber = 0;

$(document).ready(function () {
  $("#dataEnterForm").submit(function (event) {
    var initialContentValue = $("#taskContentInput").val();
    var initialCategoryValue = $("#taskCategoryInput").val();
    var initialStartDateValue = $("#taskStartDateInput").val();
    var initialDueDateValue = $("#taskDueDateInput").val();
    var initialPrioirtyValue = $("#taskPriorityInput").val();
    
    let $row = $("<tr>").append(`
            <td><i class="highlight far fa-star"></i></td>
            <td class="contentValue"><div id="initialContentValue${numberOfRows}">${initialContentValue}</div></td>
            <td><div id="initialCategoryValue${numberOfRows}">${initialCategoryValue}</div></td>
            <td><div id="initialStartDateValue${numberOfRows}">${initialStartDateValue}</div></td>
            <td><div id="initialDueDateValue${numberOfRows}">${initialDueDateValue}</div></td>
            <td><div id="initialPrioirtyValue${numberOfRows}">${initialPrioirtyValue}</div></td>
            <td><input type="checkbox"></button></td>
            <td><button id="${numberOfRows++}" class="edit btn btn-primary">Edit</button></td>
            <td><button class="delete btn btn-primary">Delete</button></td>
        `)

    if (initialContentValue !== '') {
      $('#myTable').append($row)
    } else { 
        alert("You must write something!");
    }
    event.preventDefault();

    $("#taskContentInput").val("");
    $("#taskCategoryInput").val("");
    $("#taskStartDateInput").val("");
    $("#taskDueDateInput").val("");
    $("#taskPriorityInput").val("");
  });

  $("#myTable").on('click', '.delete', function () {
    var readyToDelete = confirm(`Do you want to delete this task?`);
    if (readyToDelete === true) {
      $(this).closest('tr').remove();
    }
  });



  $(document).on('click', '.edit', function (event) {
    const i = parseInt(event.target.id) + 1;
    numberOfEditingRowNumber = i;

    $("#taskContentInput").val($("#initialContentValue" + (i - 1)).text());
    $("#taskCategoryInput").val($("#initialCategoryValue" + (i - 1)).text());
    $("#taskStartDateInput").val($("#initialStartDateValue" + (i - 1)).text());
    $("#taskDueDateInput").val($("#initialDueDateValue" + (i - 1)).text());
    $("#taskPriorityInput").val($("#initialPrioirtyValue" + (i - 1)).text());
  });

  $(document).on('click', '.update', function () { 
    $("#initialContentValue" + (numberOfEditingRowNumber - 1)).text($("#taskContentInput").val())
    $("#initialCategoryValue" + (numberOfEditingRowNumber - 1)).text($("#taskCategoryInput").val());
    $("#initialStartDateValue" + (numberOfEditingRowNumber - 1)).text($("#taskStartDateInput").val());
    $("#initialDueDateValue" + (numberOfEditingRowNumber - 1)).text($("#taskDueDateInput").val());
    $("#initialPrioirtyValue" + (numberOfEditingRowNumber - 1)).text($("#taskPriorityInput").val());

    $("#taskContentInput").val("");
    $("#taskCategoryInput").val("");
    $("#taskStartDateInput").val("");
    $("#taskDueDateInput").val("");
    $("#taskPriorityInput").val("");
  });

  $(document).on('click', 'input[type="checkbox"]', function () {
    if ($(this).prop("checked") == true) {
      $(this).closest("tr").css("text-decoration", "line-through");
      $(this).closest("tr").css("background-color", "aqua");
    } else if ($(this).prop("checked") == false) {
      $(this).closest("tr").css("text-decoration", "none");
      $(this).closest("tr").css("background-color", "rgba(255, 255, 255, 0)");
    }
  });
 
  $(document).on('click', '.highlight', function () {
    $(this).closest("tr").css("background-color", "rgba(255, 255, 255, 0)");
  });
  $(document).on('dblclick', '.highlight', function () {
    $(this).closest("tr").css("background-color", "beige");
  });

  $("#searchMyInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    event.preventDefault(); 
  }); 

  $("#searchMyInput").on("dblclick", function () {
    $("#searchMyInput").val("");
    event.preventDefault();
  }); 
}); 

setInterval("time.innerHTML=new Date()", 1000);


