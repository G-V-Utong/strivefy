import { useState } from "react";
import "./addtask.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import { BsSend } from "react-icons/bs";

// Functional component for adding tasks
const AddTask = () => {
  // Redux hooks for dispatching actions and accessing authentication state
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  // State to manage the input value for the task
  const [state, setState] = useState({
    task: "",
  });

  // Handling input changes and updating the state
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // Handling form submission to add a task
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatching addTask action with task details and user ID
    dispatch(addTask(state.task, currentUser.id));
    // Resetting the task input field after submission
    setState({
      task: "",
    });
  };

  // JSX for the AddTask component
  return (
    <div>
      <div className="addtask">
        <div className="addtask_container">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Add your task"
            onChange={handleChange}
            value={state.task}
          />

          <div className="buttons_container">
            <button className="buttons"><BsSend size={20} /></button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
