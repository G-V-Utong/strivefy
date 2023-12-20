import React, { useState } from "react";

const AddTask = () => {
  const [state, setState] = useState({
    task: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="addtask">
        <form action="">
          <input
            type="text"
            name="task"
            placeholder="add your task"
            onChange={handleChange}
            value={state.task}
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
