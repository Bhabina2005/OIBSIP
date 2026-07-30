// ==========================================
// Get HTML Elements
// ==========================================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

// ==========================================
// Add Task Button
// ==========================================

addTaskBtn.addEventListener("click", addTask);

// Add task using Enter key
taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});

// ==========================================
// Add Task Function
// ==========================================

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");
        return;

    }

    // Create list item
    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>

        <div class="button-group">

            <button class="complete-btn">✔</button>

            <button class="edit-btn">✏</button>

            <button class="delete-btn">🗑</button>

        </div>
    `;

    // ==========================================
    // Complete Button
    // ==========================================

    const completeBtn = li.querySelector(".complete-btn");

    completeBtn.addEventListener("click", function () {

        li.classList.toggle("completed");

        updateStats();

    });

    // ==========================================
    // Edit Button
    // ==========================================

    const editBtn = li.querySelector(".edit-btn");

    editBtn.addEventListener("click", function () {

        const span = li.querySelector("span");

        const updatedTask = prompt("Edit your task:", span.textContent);

        if (updatedTask !== null && updatedTask.trim() !== "") {

            span.textContent = updatedTask.trim();

        }

    });

    // ==========================================
    // Delete Button
    // ==========================================

    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {

        li.remove();

        updateStats();

    });

    // Add task to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Update statistics
    updateStats();

}

// ==========================================
// Update Statistics
// ==========================================

function updateStats() {

    const tasks = document.querySelectorAll("#taskList li");

    const completed = document.querySelectorAll("#taskList li.completed");

    totalTasks.textContent = tasks.length;

    completedTasks.textContent = completed.length;

    pendingTasks.textContent = tasks.length - completed.length;

}