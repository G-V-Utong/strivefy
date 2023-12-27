import Header from "./components/header/header";
import Signup from "./components/registration/signup";
import "./App.css";
import "./styles/main.scss";
import Signin from "./components/registration/signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import TaskManager from "./pages/taskManagement/TaskManager";
import Dashboard from "./pages/dashboard/Dashboard";
import AboutUs from "./pages/About Us/AboutUs";
import Contact from "./pages/contact/Contact";

// App component that serves as the entry point for the React application
function App() {
  return (
    <div>
      {/* Using React Router for navigation */}
      <Router>
        {/* Including the header component */}
        <Header />
        {/* Defining routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
