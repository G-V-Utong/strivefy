import "./registration.scss";
import "../../styles/components/_button.scss";

const Signin = () => {
  return (
    <div>
      <div className="signup-form">
        <div className="signup-form__wrapper">
          <form className="form" action="">
            <h4>Sign In</h4>

            <div className="form-group">
              <input
                type="email"
                name="Email"
                id=""
                placeholder="Enter Email"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="Enter password"
                id=""
                placeholder="Enter Password"
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
