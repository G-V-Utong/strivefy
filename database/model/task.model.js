const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
	{
		task: { type: String },
		status: {
			type: String,
			enum: ['Todo', 'Pending', 'Completed'],
			default: 'Todo',
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamp: true }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;