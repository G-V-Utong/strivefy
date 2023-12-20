import React from "react";
import Header from "./components/header/header";
import Signup from "./components/registration/signup";
import "./App.css";
import "./styles/main.scss";
import Signin from "./components/registration/signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import TaskManager from "./pages/taskManagement/TaskManager";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
