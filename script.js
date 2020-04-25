//set a global variable to help locating the input id and td
var numberOfRows = 0;
var numberOfEditingRowNumber = 0;

$(document).ready(function () {
  //add new task
  $("#dataEnterForm").submit(function (event) {
    // get all values that entered
    var initialContentValue = $("#taskContentInput").val();
    var initialCategoryValue = $("#taskCategoryInput").val();
    var initialStartDateValue = $("#taskStartDateInput").val();
    var initialDueDateValue = $("#taskDueDateInput").val();
    var initialPrioirtyValue = $("#taskPriorityInput").val();

    // create a new row everytime when add a new task, with basic details, a checkbox, a edit button and a delete button
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
        `);

    // the task content cannot be empty, or it will show a alert
    if (initialContentValue !== "") {
      $("#myTable").append($row);
    } else {
      alert("You must write something!");
    }
    event.preventDefault();

    // the input field will be empty after adding new task, so that ready for another task
    $("#taskContentInput").val("");
    $("#taskCategoryInput").val("");
    $("#taskStartDateInput").val("");
    $("#taskDueDateInput").val("");
    $("#taskPriorityInput").val("");
  });
  //end of #dataEnterForm JQuery

  //the delete button function, every time delete the current row
  $("#myTable").on("click", ".delete", function () {
    var readyToDelete = confirm(`Do you want to delete this task?`);
    if (readyToDelete === true) {
      $(this).closest("tr").remove();
    }
  });
  //end of delete button JQuery

  // the edit function, let the input field to collect the td value in different rows
  $(document).on("click", ".edit", function (event) {
    // convert the event.target.id from a string to a num
    const i = parseInt(event.target.id) + 1;
    numberOfEditingRowNumber = i;

    $("#taskContentInput").val($("#initialContentValue" + (i - 1)).text());
    $("#taskCategoryInput").val($("#initialCategoryValue" + (i - 1)).text());
    $("#taskStartDateInput").val($("#initialStartDateValue" + (i - 1)).text());
    $("#taskDueDateInput").val($("#initialDueDateValue" + (i - 1)).text());
    $("#taskPriorityInput").val($("#initialPrioirtyValue" + (i - 1)).text());
  });

  //the update function, put the input field value back into the table, and clean up the input field after updating
  $(document).on("click", ".update", function () {
    $("#initialContentValue" + (numberOfEditingRowNumber - 1)).text(
      $("#taskContentInput").val()
    );
    $("#initialCategoryValue" + (numberOfEditingRowNumber - 1)).text(
      $("#taskCategoryInput").val()
    );
    $("#initialStartDateValue" + (numberOfEditingRowNumber - 1)).text(
      $("#taskStartDateInput").val()
    );
    $("#initialDueDateValue" + (numberOfEditingRowNumber - 1)).text(
      $("#taskDueDateInput").val()
    );
    $("#initialPrioirtyValue" + (numberOfEditingRowNumber - 1)).text(
      $("#taskPriorityInput").val()
    );

    $("#taskContentInput").val("");
    $("#taskCategoryInput").val("");
    $("#taskStartDateInput").val("");
    $("#taskDueDateInput").val("");
    $("#taskPriorityInput").val("");
  });

  //checkbox function, when ticked, the whole row will be line-through
  $(document).on("click", 'input[type="checkbox"]', function () {
    if ($(this).prop("checked") == true) {
      $(this).closest("tr").css("text-decoration", "line-through");
      $(this).closest("tr").css("background-color", "aqua");
    } else if ($(this).prop("checked") == false) {
      $(this).closest("tr").css("text-decoration", "none");
      $(this).closest("tr").css("background-color", "rgba(255, 255, 255, 0)");
    }
  });
  //end of checkbox JQuery

  //there is a star before every task, double click to highlight, and click to back to the background-color
  $(document).on("click", ".highlight", function () {
    $(this).closest("tr").css("background-color", "rgba(255, 255, 255, 0)");
  });
  $(document).on("dblclick", ".highlight", function () {
    $(this).closest("tr").css("background-color", "beige");
  });

  //search function, it will search and keep the whole row includes the result display on the screen,
  // and won't do anything if there is no key words entered
  $("#searchMyInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#searchTitle").text(`Search Results for   `);
    $("#searchResult").text(`"${value}"`);
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    event.preventDefault();
  });
  //double click the search input field, clear the input field
  $("#searchMyInput").on("dblclick", function () {
    $("#searchMyInput").val("");
    $("#searchTitle").text("");
    $("#searchResult").text("");
    event.preventDefault();
  });
  //end of search JQuery
});

//display current date and time
setInterval("time.innerHTML=new Date()", 1000);

//
