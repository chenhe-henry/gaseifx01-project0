$(document).ready(function () {
  //add new task 
  $("#dataEnterForm").submit(function (event) {
    // get all values that entered
    var initialContentValue = $("#taskContentInput").val();
    var initialCategoryValue = $("#taskCategoryInput").val();
    var initialStartDateValue = $("#taskStartDateInput").val();
    var initialDueDateValue = $("#taskDueDateInput").val();
    var initialPrioirtyValue = $("#taskPriorityInput").val();
    
    // create a new row everytime when add a new task, with basic details, a checkbox, a update button and a delete button
    let $row = $("<tr>").append(`
            <td><i class="highlight far fa-star"></i></td>
            <td><div id="initialContentValue" class="dblClickToEditContent">${initialContentValue}</div><div id="updateContent"><button class="updateButton btn btn-primary">Update</button><input type="text"></div></td>
            <td><div id="initialCategoryValue" class="dblClickToEditCategory">${initialCategoryValue}</div><div id="updateCategory"><input type="text"></div></td>
            <td><div id="initialStartDateValue" class="dblClickToEditStartDate">${initialStartDateValue}</div><div id="updateStartDate"><input type="text"></div></td>
            <td><div id="initialDueDateValue" class="dblClickToEditDueDate">${initialDueDateValue}</div><div id="updateDueDate"><input type="text"></div></td>
            <td><div id="initialPrioirtyValue" class="dblClickToEditPriority">${initialPrioirtyValue}</div><div id="updatePriority"><input type="text"></div></td>
            <td><input type="checkbox"></button></td>
            <td><button class="delete btn btn-primary">Delete</button></td>
        `)
      // < td > <button class="update btn btn-primary">Update</button></td>

    // the task content cannot be empty, or it will show a alert
    if (initialContentValue !== '') {
      $('#myTable').append($row)
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
    //hide the update input field
    $("#updateContent input ").hide();
    $(".updateButton").hide();
    $("#updateCategory input ").hide();
    $("#updateStartDate input ").hide();
    $("#updateDueDate input ").hide();
    $("#updatePriority input ").hide();
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
  $("#myTable").on('dblclick', 'tr', function () {
    console.log('INDEX CLICKED' + $(this).index());
    $(".updateButton").eq($(this).index() - 1).show();
    $("#updateContent input ").eq($(this).index() - 1).show();
  });

  
  $("#myTable").on('click', '.updateButton', function () {
    //index
    console.log('update INDEX CLICKED' + $(this).index());
    $(".updateButton").hide();
    $("#updateContent input").eq($('tr').index() - 1).hide();
    var newValue = $("#updateContent input").eq($('tr').index() - 1).val();
    $("#initialContentValue").eq($('tr').index() - 1).text(newValue);
  });
  // $("#myTable").on('dblclick', 'tr', function () {
  //   $(".updateButton").eq($(this).index() - 1).show();
  //   $("#updateCategory input ").eq($(this).index() - 1).show();
  // });
  // $("#myTable").on('dblclick', 'tr', function () {
  //   $(".updateButton").eq($(this).index() - 1).show();
  //   $("#updateStartDate input ").eq($(this).index() - 1).show();
  // });
  // $("#myTable").on('dblclick', '.dblClickToEditDueDate', function () {  
  //   $("#updateDueDate input ").show();

  // });
  // $("#myTable").on('dblclick', '.dblClickToEditPriority', function () {
  //   $("#updatePriority input ").show();
  // });
  
  // $("#dataEnterForm").on('click', '#rating', function () {
  //     $("#rating i").css("color", "orange");
  // });

  //checkbox function, when ticked, the whole row will be line-through
  $(document).on('click', 'input[type="checkbox"]', function () {
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
  $(document).on('click', '.highlight', function () {        
    $(this).closest("tr").css("background-color", "rgba(255, 255, 255, 0)");   
  });
  $(document).on('dblclick', '.highlight', function () {
    $(this).closest("tr").css("background-color", "beige");
  });

  //search function, it will search and keep the whole row includes the result display on the screen, 
  // and won't do anything if there is no key words entered
  $("#searchMyInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    event.preventDefault(); 
  }); 
  //double click the search input field, clear the input field
  $("#searchMyInput").on("dblclick", function () {
    $("#searchMyInput").val("");
    event.preventDefault();
  }); 
  //end of search JQuery
}); 

//display current date and time
setInterval("linkweb.innerHTML=new Date().toLocaleString()+''+''.charAt(new Date().getDay());", 1000);


