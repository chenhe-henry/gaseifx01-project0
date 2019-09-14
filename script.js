// add new todo function
// document.write(Date());

// const todoList = function() {
//     var item = document.getElementById("todoInput").value;
//     var text = document.createTextNode(item);
//     var newItem = document.createElement("li");
//     newItem.appendChild(text);
//     document.getElementById("List").appendChild(newItem);
// }
// let id = 0
$(document).ready(function () {
  //add new task 
  $("#form").submit(function (event) {

    var contentValue = $("#taskContentInput").val();
    // $("#newTaskContent").html(`${contentValue}`);

    var categoryValue = $("#taskCategoryInput").val();
    // $("#newTaskCategory").html(`${categoryValue}`);

    var startDateValue = $("#taskStartDateInput").val();
    // $("#newTaskStartDate").html(` ${startDateValue}`);

    var dueDateValue = $("#taskDueDateInput").val();
    // $("#newTaskDueDate").html(`${dueDateValue}`);

    var prioirtyValue = $("#taskPriorityInput").val();
    // $("#newTaskPriority").html(`${prioirtyValue}`);

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
    if (dueDateValue === '') {
      alert(`Good, you need to ${contentValue} now!`);
    } else {
      alert(`Good, you need to ${contentValue} now\nRemember to finish that before ${dueDateValue}!`);
    };
    // if (contentValue === '') {
    //     alert("You must write something!");
    // }

    $('#myTable').append($row)

    // var deleteButton =<button>&times;</button>;
    // $("ul").eq(0).append(value)
    event.preventDefault();
  });
  //alert when add a new task
  // $("#submitNewTask").click(function () {
  //     alert(`Good, you got something need to do now\nRemember to finish that before the due day!`);
  //     // $("#completeCheck").append('<li><button id="checkBox">Checkbox</button></li>');
  //     // $("#updateButton").append('<li><button class="btn btn-primary">Update</button></li>');
  //     // $("#deleteButton").append('<li><button class="btn btn-primary">Delelte</button></li>');
  // });
  $("#myTable").on('click', '.delete', function () {
    var readyToDelete = confirm(`Do you want to delete this task?`);
    if (readyToDelete === true) {
      $(this).closest('tr').remove();
    }

  });
  $(document).on('click', 'input[type="checkbox"]', function () {
    if ($(this).prop("checked") == true) {
      $(this).closest("tr").css("text-decoration", "line-through");
    }
    else if ($(this).prop("checked") == false) {
      $(this).closest("tr").css("text-decoration", "none");
    }
  });


  // $("button").click(function () {
  //     $("#div1").remove();
  // });
  // $("#checkBox").click(function () {
  //     $("h1").css("background-color", "red");
  // })
  //search function 
  $("#searchMyInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    event.preventDefault();
  });

  // $('.delete').on('click', function(){
  //     console.log('hello')
  //     $(this).closest('tr').remove(); 
  // })  
}); //document.ready





// todoList();
// Add products to <table>
