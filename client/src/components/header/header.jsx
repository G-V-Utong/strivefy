import "./header.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../../redux/authSlice";
import history from "../../history";
import "../../styles/components/_button.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem("auth");
    history.push("/signin");
    window.location.reload();
  };

  return (
    <div className="header_container">
      <div className="header_container__subcontainer">
        <nav className="header">
          <div className="header__logo">
            <Link to="/" className="">
              <img src="public/images/Main logo.PNG" alt="Logo" height={40} />
            </Link>
          </div>
          <div className="header__menu">
            <ul className="header__menu__list">
              {auth.currentUser && auth.currentUser.token ? (
                <>
                  <li className="header__menu__listitem">
                    <Link to="/" className="">
                      Home
                    </Link>
                  </li>
                  <li className="header__menu__listitem">
                    <Link to="/dashboard" className="">
                      Dashboard
                    </Link>
                  </li>
                  <li className="header__menu__listitem">
                    <Link to="/about" className="">
                      About Us
                    </Link>
                  </li>
                  <li className="header__menu__listitem">
                    <Link to="/contact" className="">
                      Contact
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="header__menu__listitem">
                    <Link to="/" className="">
                      Home
                    </Link>
                  </li>
                  <li className="header__menu__listitem">
                    <Link to="/about" className="">
                      About Us
                    </Link>
                  </li>
                  <li className="header__menu__listitem">
                    <Link to="/contact" className="">
                      Contact
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="header__buttons">
            {auth.currentUser && auth.currentUser.token ? (
              <Link to="/signin" className="" onClick={handleClick}>
                <button className="header__buttons__primary">Sign out</button>
              </Link>
            ) : (
              <>
                <Link to="/signin" className="">
                  <button className="header__buttons__secondary">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup" className="">
                  <button className="header__buttons__primary">Sign Up</button>
                </Link>
              </>
            )}
            {/* <button className="header__buttons__secondary">Sign In</button>
        <button className="header__buttons__primary">Sign Up</button> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
