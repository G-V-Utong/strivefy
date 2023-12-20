import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import './dashboard.scss'

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__left">
          <Sidebar />
        </div>
        <div className="dashboard__right">
          <div className="taskcount">
            <div className="todo">Hello</div>
            <div className="doing"></div>
            <div className="done"></div>
          </div>
          <div className="createButton">
            <Link to='/taskmanager' className="button">
              Create Task
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
