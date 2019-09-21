# gaseifx01-project0

## Project Heading
My To Do List
## Live game link
https://chen-gastudent.github.io/gaseifx01-project0/
## Description
A simple "To do list", which allows you to add, edit, delete, highlight, check and search todos.
## Screenshots
## Features
### Add new task
You can add new tasks with task content, category, start date, due date, priority.

Only the task content is Mandatory when add a new task. It won't add anything if there is no content.
### Edit/Update task
You can edit the task you have already entered. 

Click the edit button, all the information of the task will show in the input field again, you can edit here, and click update task button to update, the updated task will replace the old todo row.
### Delete task
You can delete the todo row with delete button, and it will pop up an alert to confirm if you really want to delete it.
### Check task and highlight task
You can tick the check box to mark the task is complete or not. After tick the check box, the background color of the row will change, and the row will be line-through, untick the check box, everything will be back to normal again.

You can highlight the whole row if you double click the star icon before the task content. And singal click the star, the table row will back to normal color again.
### Search 
You can key in some keywords to search when you have mulitple tasks, it will keep the whole row which contains the keyword you entered. 

The keywords will keep in the input field, until you double click the input field to clear that.
## Tech used
* HTML
* CSS
* JQuery
## V2 wishlist
* All the data can be stored.
* Can sort the tasks by any selected attribute, e.g. priority, category or due date. 
* All the completed tasks can be automatically listed in the bottom of the todo list.
* Compare between due date and the date today, should have a overdue alarm or overdue warning function.
## Any known bugs
* When update the task, after you edit the task input and click the update button, the correspending todo will be updated, and the input field will be reset to empty as designed. But if you click update button again at this time, the empty values will update to the todo.