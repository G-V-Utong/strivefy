/* eslint-disable react/no-unescaped-entities */
import Footer from '../../components/footer/Footer';
import { Link } from "react-router-dom";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './contact.scss'

const Contact = () => {
  return (
    <div className="about">
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
        
      <Footer/>
    </div>
  )
}

export default Contact
