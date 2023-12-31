const User = require('../../database/model/user.model');
const Task = require('../../database/model/task.model');

const addTask = async (req, res) => {
	const { task, id } = req.body;
    
	try {
		console.log(task);
    	console.log(id);
		if (!task) return res.status(400).send('please enter the task');
		if (task.length < 3) res.status(400).send('add minimum 3 characters');
		const taskDetail = await new Task({
			task,
			createdBy: id,
		});
		await taskDetail.save();
		return res.status(200).send(taskDetail);
	} catch (error) {
		return res.status(400).send('task addition failed');
	}
};

const getAllTasks = async (req, res) => {
	const { id } = req.query;
	try {
		let tasklist = await Task.find({ createdBy: id });
		return res.status(200).send(tasklist);
	} catch (error) {
		return res.status(400).send(error);
	}
};

const editTask = async (req, res) => {};

const statusChange = async (req, res) => {
	const { id, string } = req.body;

	try {
		let task = await Task.findById({ _id: id });
		if (string === 'right') {
			if (task.status === 'Todo') {
				task.status = 'Pending';
				task.save();
				return res.send(task);
			} else if (task.status === 'Pending') {
				task.status = 'Completed';
				task.save();
				return res.send(task);
			}
		} else {
			if (task.status === 'Completed') {
				task.status = 'Pending';
				task.save();
				return res.send(task);
			} else if (task.status === 'Pending') {
				task.status = 'Todo';
				task.save();
				return res.send(task);
			} 
		}
	} catch (error) {}
};

const deleteTask = async (req, res) => {
	const { id } = req.params;
	try {
		let response = await Task.findByIdAndDelete(id);
		return res.status(200).send(response);
	} catch (error) {
		return res.status(400).send('deleteFailed');
	}
};

module.exports = {
	addTask,
	getAllTasks,
	editTask,
	statusChange,
	deleteTask,
};