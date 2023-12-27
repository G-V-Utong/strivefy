// Importing Mongoose
const mongoose = require("mongoose");

// Defining the task schema
const taskSchema = mongoose.Schema(
  {
    task: { type: String }, // Task description
    status: {
      type: String,
      enum: ["Todo", "Pending", "Completed"], // Enumerated status values
      default: "Todo",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Referencing the 'User' model
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

// Creating the 'Task' model using the defined schema
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
