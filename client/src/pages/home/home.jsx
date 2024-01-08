
import "./home.scss";
import "../../styles/components/_button.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../components/footer/Footer";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <>    
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

        <div className="home__container__infoContainer">
          <p>TASK MANAGEMENT</p>
          <h1>All your tasks in one place</h1>

          <div className="home__container__infoContainer__info" data-aos='fade-up' data-aos-duration='1000'>
            <div className="home__container__infoContainer__info__text">
              <h3>
                Projects & Tasks
              </h3>
              <p>
                Plan and manage simple  projects & tasks from one easy-to-use platform
              </p>
              <p>
                Your one-stop-shop for simple project management. Unleash your potentials by organizing your day
              </p>
              <div>

              </div>
              <div className="form-group">
              <div className="body__buttons">
                {currentUser && currentUser.token ? (
                   <Link to="/dashboard" className="body__buttons__primary">
                   <button className="body__buttons__primary">Go to Dashboard</button>
                  </Link>
                ) : (
                  <Link to="/signin" className="body__buttons__primary">
                    <button className="body__buttons__primary">Get started for free</button>
                  </Link>
                )}
                {/* <button className="body__buttons__primary">Get started</button> */}
              </div>
            </div>
            </div>
          <img src="/public/images/taskmanager.PNG" alt="" />
          </div>
          
        </div>
        <div className="showcase">
          <img src="/public/images/4871715.jpg" alt="showcase logo"  data-aos='fade-right' data-aos-duration='1000' />
          <div className="showcase__text" data-aos='fade-left' data-aos-duration='1000'>
            <h1>
            Seamlessly organize your life
            </h1>
            <p>
            Elevate your productivity through thoughtful organization.
            </p>
          </div>
        </div>
        <div className="showcase_rev">
          <img src="/public/images/4891584.jpg" alt="showcase logo"  data-aos='fade-right' data-aos-duration='1000' />
          <div className="showcase__text" data-aos='fade-left' data-aos-duration='1000'>
            <h1>
            Unlock efficiency
            </h1>
            <p>
            Crack the code to productivity: Unlock efficiency with Strivefy.
            </p>
          </div>
        </div>
        <div className="showcase">
          <img src="/public/images/6914347.jpg" alt="showcase logo"  data-aos='fade-right' data-aos-duration='1000' />
          <div className="showcase__text" data-aos='fade-left' data-aos-duration='1000'>
            <h1>
            Conquer your daily grind 
            </h1>
            <p>
            With Strivefy, you never have to worry about a disoroganized day.
            </p>
            <div className="form-group">
              <div className="body__buttons">
                {currentUser && currentUser.token ? (
                   <Link to="/dashboard" className="body__buttons__primary">
                   <button className="body__buttons__primary">Go to Dashboard</button>
                  </Link>
                ) : (
                  <Link to="/signin" className="body__buttons__primary">
                    <button className="body__buttons__primary">Sign up & Get started</button>
                  </Link>
                )}
                {/* <button className="body__buttons__primary">Get started</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="about">
      <div className="about__container"></div>
      <div className="about__hero">
        <h1>Contact us</h1>
        <img
          src="/public/images/contact-min.jpg"
          alt="contact picture"
          width={500}
        />
        <div className="about__hero__text">
          <p>For general enquiries please email</p>
          <h3>godswillutong@gmail.com</h3>
          <p>
            You can reach us on phone via
          </p>
          <h3>+234-816-983-0193</h3>
          <p>
            Keep in touch with us through our social media platforms
          </p>
          <div className="social_media">
          <Link to="https://github.com/G-V-Utong">
              <FaGithub size={30} />
            </Link>
            <Link to="https://www.instagram.com/g.v.utong/">
              <FaInstagramSquare size={30} />
            </Link>
            <Link to="https://twitter.com/G_VestaUtong">
              <FaXTwitter size={30} />
            </Link>
            <Link to="https://www.linkedin.com/in/godswill-utong-10252915b/">
              <FaLinkedin size={30} />
            </Link>
          </div>
        </div>
      </div>
        
      
    </div> */}
    <Footer/>
    </>

  );
};

export default Home;
