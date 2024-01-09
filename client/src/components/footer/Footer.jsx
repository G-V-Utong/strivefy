import "./footer.scss";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_container__subcontainer">
        <div className="footer">
          <div className="footer__logo">
            <Link to="/" className="">
              <img src="/images/Footer logo.PNG" alt="Logo" height={40} />
            </Link>
          </div>
          <div className="footer__info">
            <div className="footer__info__subcontainer">
              <h3>Features</h3>
              <ul>
                <li>How It Works</li>
                <li>Help Center</li>
                <li>Integration</li>
                <li>Status</li>
              </ul>
            </div>
            <div className="footer__info__subcontainer">
              <h3>Resources</h3>
              <ul>
                <li>Productivity Methods</li>
                <li>Channel Partners</li>
                <li>Developer API</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer__info__subcontainer">
              <h3>Company</h3>
              <ul>
                <Link to="/about">
                  <li>About Us</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="footer__links">
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
        <hr />
        <p>
          &copy; 2023 Godswill Utong @Strivefy • Built with ReactJs, NodeJs &
          MongoDB
        </p>
      </div>
    </div>
  );
};

export default Footer;
