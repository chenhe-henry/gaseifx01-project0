$(document).ready(function () {
  //add new task 
  $("#dataEnterForm").submit(function (event) {
    // get all values that entered
    var contentValue = $("#taskContentInput").val();
    var categoryValue = $("#taskCategoryInput").val();
    var startDateValue = $("#taskStartDateInput").val();
    var dueDateValue = $("#taskDueDateInput").val();
    var prioirtyValue = $("#taskPriorityInput").val();
    // create a new row everytime when add a new task, with basic details, a checkbox, a update button and a delete button
    let $row = $("<tr>").append(`
            <td>${contentValue}</td>
            <td>${categoryValue}</td>
            <td>${startDateValue}</td>
            <td>${dueDateValue}</td>
            <td>${prioirtyValue}</td>
            <td><input type="checkbox"></button></td>
            <td><button class="btn btn-primary">Update</button></td>
            <td><button class="delete btn btn-primary">Delete</button></td>
        `)
    // the task content cannot be empty, or it will show a alert
    if (contentValue !== '') {
      $('#myTable').append($row)
    } else { 
        alert("You must write something!");
    }
    event.preventDefault();
  });
  //end of #dataEnterForm JQuery
  
  //the delete button function, every time delete the current row
  $("#myTable").on('click', '.delete', function () {
    var readyToDelete = confirm(`Do you want to delete this task?`);
    if (readyToDelete === true) {
      $(this).closest('tr').remove();
    }
  });
  //end of delete button JQuery

  //checkbox function, when ticked, the whole row will be line-through
  $(document).on('click', 'input[type="checkbox"]', function () {
    if ($(this).prop("checked") == true) {
      $(this).closest("tr").css("text-decoration", "line-through");
    } else if ($(this).prop("checked") == false) {
      $(this).closest("tr").css("text-decoration", "none");
    }
  });
  //end of checkbox JQuery

  //search function, it will search and keep the whole row includes the result display on the screen, 
  // and won't do anything if there is no key words entered
  $("#searchMyInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    event.preventDefault();
  }); 
  //end of search JQuery
}); 

