import { useState } from "react";
import "./addtask.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/taskSlice";

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
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="add your task"
            onChange={handleChange}
            value={state.task}
          />

          <div className="body__buttons">
            <button className="body__buttons__secondary">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
