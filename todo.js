const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="toggleComplete(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);
        newTaskInput.value = ''; // Clear the input field
    }
}

function toggleComplete(completeButton) {
    const listItem = completeButton.parentNode;
    const taskSpan = listItem.querySelector('span');
    taskSpan.classList.toggle('completed');
    completeButton.textContent = taskSpan.classList.contains('completed') ? 'Undo' : 'Complete';
}

function deleteTask(deleteButton) {
    const listItem = deleteButton.parentNode;
    taskList.removeChild(listItem);
}