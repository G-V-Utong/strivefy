// Importing necessary dependencies
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Checking if there are previously stored tasks in local storage
const initialTask = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : null;

// Initial state for the task slice
const initialState = {
  TaskData: initialTask,
  AllTasks: {},
};

// Creating the task slice
export const taskSlice = createSlice({
  name: "Task",
  initialState,

  reducers: {
    // Reducer for successful task addition
    taskAddedSuccessfully: (state, action) => {
      state.TaskData = action.payload;
    },
    // Reducer for task addition failure
    taskAddFailure: (state) => {
      return state;
    },
    // Reducer for successful retrieval of all tasks
    getAllTaskSuccess: (state, action) => {
      state.AllTasks = action.payload;
    },
    // Reducer for failure in retrieving all tasks
    getAllTaskFailure: (state) => {
      return state;
    },
    // Reducer for successful task edit
    editTaskSuccess: (state, action) => {
      state.TaskData = action.payload;
    },
    // Reducer for successful task deletion
    deleteSuccess: (state, action) => {
      state.TaskData = action.payload;
    },
    // Reducer for task deletion failure
    deletefail: (state) => {
      return state;
    },
  },
});

// Exporting actions from the task slice
export const {
  taskAddFailure,
  taskAddedSuccessfully,
  getAllTaskFailure,
  getAllTaskSuccess,
  deleteSuccess,
  deletefail,
  editTaskSuccess,
} = taskSlice.actions;

// Exporting the task reducer
export default taskSlice.reducer;

// Thunk action creator for adding a task
export const addTask = (task, id) => async (dispatch) => {
  const taskData = {
    task,
    id,
  };
  const response = await axios.post("http://localhost:4000/task/add", taskData);

  if (response) {
    // Storing the task data in local storage
    localStorage.setItem("task", JSON.stringify(response.data));

    dispatch(taskAddedSuccessfully(response.data));
    toast.success("Task added successfully");
    window.location.reload();
  } else {
    dispatch(taskAddFailure());
  }
};

// Thunk action creator for getting all tasks
export const getAllTasks = (token, id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      id,
    },
  };

  try {
    const response = await axios.get(
      "http://localhost:4000/task/tasks",
      config
    );

    if (response) {
      dispatch(getAllTaskSuccess(response.data));
    }
  } catch (error) {
    if (error.response.status === 400) {
      dispatch(getAllTaskFailure());
    }
  }
};

export const arrowClick = (item, string) => async () => {
  let taskData = {
    id: item._id,
    status: item.status,
    string,
  };

  try {
    let response = await axios.put(
      `http://localhost:4000/task/${taskData.id}`,
      taskData
    );

    if (response) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};

// Thunk action creator for deleting a task
export const deleteItem = (id) => async (dispatch) => {
  let res = await axios.delete(`http://localhost:4000/task/${id}`);

  if (res) {
    dispatch(deleteSuccess());
    toast.success("Task deleted successfully");
    window.location.reload();
  } else {
    dispatch(deletefail());
  }
};
