import "./registration.scss";

const Signup = () => {
  return (
    <div>
      <div className="signup-form">
        <form className="form" action="">
          <div className="signup-form__wrapper">
            <div className="form-group">
              <input type="text" placeholder="Enter your full name" />
            </div>

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
              <button>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
