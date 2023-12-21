import React, { useState } from "react";
import './addtask.scss';
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/taskSlice";

const AddTask = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => ({...state}));
    const { currentUser } = auth;
  const [state, setState] = useState({
    task: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(state.task, currentUser._id, currentUser));
    setState({
        task: ''
    });
  }

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

          <button className="button">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
