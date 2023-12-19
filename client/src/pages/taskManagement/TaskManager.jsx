import React from "react";
import "./taskManager.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const TaskManager = () => {
  return (
    <div className="taskmanager">
      <div className="taskmanager__left">
        <Sidebar />
      </div>
    </div>
  );
};

export default TaskManager;
