// Get the task input and task list table elements
const taskInput = document.getElementById('taskInput');
const taskListTable = document.getElementById('taskListTable');

// Load tasks from local storage if available
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to display tasks in the table
function displayTasks() {
    taskListTable.innerHTML = '';
    tasks.forEach((task, index) => {
        const row = taskListTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = task;
        cell2.innerHTML = `
            <button class="btn btn-info btn-sm mr-2" onclick="editTask(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
        `;
    });
}

// Function to add a new task to the table
function addTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue !== '') {
        tasks.push(taskValue);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        taskInput.value = '';
    }
}

// Function to edit a task in the table
function editTask(index) {
    const newTaskValue = prompt('Edit Task:', tasks[index]);
    if (newTaskValue !== null) {
        tasks[index] = newTaskValue.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

// Function to delete a task from the table
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Display tasks when the page loads
displayTasks();
