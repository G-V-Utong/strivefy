import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import history from "../history";

const initialState = {
  isLoading: false,
  currentUser: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    registerFailure: (state, action) => {
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;

export const register = (user) => async (dispatch) => {
  const formdata = new FormData();

  try {
    formdata.append("username", user.username);
    formdata.append("password", user.password);
    formdata.append("email", user.email);

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await axios.post(
      "http://localhost:4000/auth/register",
      user,
      config
    );

    if(response){
      dispatch(registerSuccess(response.data));
      console.log(response.data);
      history.push('/signin');
      window.location.reload()
    }else{
      dispatch(registerFailure())
      console.log('failed')
    }
  } catch (error) {
    dispatch(registerFailure())
  }
};

export const signin = user => async(dispatch)=>{
  try {
    const response = await axios.post(
      "http://localhost:4000/auth/signin",
      user,
    );

    if(response) {
      localStorage.setItem('auth', JSON.stringify(response.data));
      dispatch(loginSuccess(response.data));
      history.push('/dashboard');
      window.location.reload();
    } else {
      dispatch(loginFailure())
    }
  } catch (error) {
    dispatch(loginFailure())
  }
}