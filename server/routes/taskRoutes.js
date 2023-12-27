// Import necessary modules
const express = require("express");
const router = express.Router();

// Import task controller containing functions for handling task-related operations
const taskController = require("../controllers/taskController");

// Define routes for task operations
router.route("/add").post(taskController.addTask); // POST request to add a new task
router.route("/tasks").get(taskController.getAllTasks); // GET request to retrieve all tasks
router.route("/edit/:id").put(taskController.editTask); // PUT request to edit/update a task

// Define routes for specific task by ID
router
  .route("/:id")
  .put(taskController.statusChange) // PUT request to change the status of a task
  .delete(taskController.deleteTask); // DELETE request to delete a task

module.exports = router;
