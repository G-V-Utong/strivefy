import "./registration.scss";
import "../../styles/components/_button.scss";
import { useState } from "react";

const Signin = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
      });
    
      const handleSubmit = () => {
    
      }
    
      const handleChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      }
      console.log(state.email, state.password, state.confirmPassword, state.username);
      
  return (
    <div>
      <div className="signup-form">
        <div className="signup-form__wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h4>Sign In</h4>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={state.email}
                id=""
                placeholder="Enter Email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Password"
                value={state.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group"> 
            <div className="body__buttons">
            <button className="body__buttons__primary">Sign in</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;