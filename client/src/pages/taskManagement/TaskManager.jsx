import React from "react";
import "./taskManager.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import AddTask from "../../components/taskManager/AddTask";
import TaskList from "../../components/taskManager/TaskList";

const TaskManager = () => {
  return (
    <div className="taskmanager">
      <div className="taskmanager__left">
        <Sidebar />
      </div>
      <div className="taskmanager__right">
        <div className="taskmanager__addtask">
          <AddTask />
        </div>
        <div className="taskmanager__tasklist">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
