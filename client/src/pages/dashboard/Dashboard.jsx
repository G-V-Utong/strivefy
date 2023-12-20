import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import './dashboard.scss'
import "../../styles/components/_button.scss";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        
        <div className="dashboard__left">
          <Sidebar />
        </div>
        <div className="dashboard__right">
        <h2>Task Status Dashboard</h2>
          <div className="taskcount">
            <div className="todo box">Hello</div>
            <div className="pending box">Hello</div>
            <div className="done box">Hello</div>
          </div>
          <div className="body__buttons">
            <Link to='/taskmanager' className="body__buttons__primary">
            <button className="body__buttons__primary">Create task</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
