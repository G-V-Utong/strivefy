// Importing necessary dependencies
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../history";

// Checking if there is a previously authenticated user in local storage
const initialUser = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

// Initial state for the authentication slice
const initialState = {
  isLoading: false,
  currentUser: initialUser,
  error: null,
};

// Creating the authentication slice
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Reducer for successful login
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    // Reducer for login failure
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    // Reducer for successful registration
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    // Reducer for registration failure
    registerFailure: (state, action) => {
      state.error = action.payload;
    },
    // Reducer for successful logout
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
});

// Exporting actions from the authentication slice
export const {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

// Exporting the authentication reducer
export default authSlice.reducer;

// Thunk action creator for user registration
export const register = (user) => async (dispatch) => {
  const formdata = new FormData();

  try {
    // Appending user data to form data
    formdata.append("firstName", user.firstName);
    formdata.append("lastName", user.lastName);
    formdata.append("password", user.password);
    formdata.append("email", user.email);

    // Configuring headers for the request
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    // Sending a POST request to register the user
    const response = await axios.post(
      "http://localhost:4000/auth/register",
      user,
      config
    );

    // Handling the response
    if (response) {
      dispatch(registerSuccess(response.data));
      console.log(response.data);
      // Redirecting to the sign-in page after successful registration
      history.push("/signin");
      window.location.reload();
    } else {
      dispatch(registerFailure());
      console.log("failed");
    }
  } catch (error) {
    dispatch(registerFailure());
  }
};

// Thunk action creator for user sign-in
export const signin = (user) => async (dispatch) => {
  try {
    // Sending a POST request to sign in the user
    const response = await axios.post(
      "http://localhost:4000/auth/signin",
      user
    );

    // Handling the response
    if (response) {
      // Storing the authentication data in local storage
      localStorage.setItem("auth", JSON.stringify(response.data));
      dispatch(loginSuccess(response.data));
      // Redirecting to the dashboard after successful sign-in
      history.push("/dashboard");
      window.location.reload();
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};
