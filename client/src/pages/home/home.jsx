import React from "react";
import "./home.scss";
import "../../styles/components/_button.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__hero">
          <div className="home__container__hero__banner">
            <h1>
              <span>Strive</span> boldly,
              <br /> organize effortlessly,
              <br /> achieve consistently <span>&#x2713;</span>
            </h1>
            <p>
              Seamlessly master your tasks with our effortlessly organized
              management system.
            </p>
            <div className="form-group">
              <div className="body__buttons">
                {currentUser && currentUser.token ? (
                   <Link to="/dashboard" className="body__buttons__primary">
                   <button className="body__buttons__primary">Go to Dashboard</button>
                  </Link>
                ) : (
                  <Link to="/signin" className="body__buttons__primary">
                    <button className="body__buttons__primary">Get started</button>
                  </Link>
                )}
                {/* <button className="body__buttons__primary">Get started</button> */}
              </div>
            </div>
          </div>
          <div className="home__container__hero__image">
            <img src="/public/images/4894122.jpg" alt="hero_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
