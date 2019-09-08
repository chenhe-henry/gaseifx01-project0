
// overall structure:
// 1. main
//   - navbar
//   - header
//   - add new task
//   - Calendar(optional)
//   - main table
// 2. footer

// ---------------------------------------
// add new task 
var myTask = document.getElementById("myTask");
var addNew = document.getElementById("addNew");
var close = document.getElementsByClassName("close")[0];
addNew.onclick = function() {
  myTask.style.display = "block";
}
close.onclick = function() {
  myTask.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == myTask) {
    myTask.style.display = "none";
  }
}
// ---------------------------------------