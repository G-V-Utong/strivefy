import './footer.scss';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="footer_container__subcontainer">
        <div className="footer">
            <div className="footer__logo">
            <Link to="/" className="">
              <img src="public/images/Footer logo.PNG" alt="Logo" height={40} />
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
