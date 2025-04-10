import { NavLink } from "react-router-dom";
import "../../Style/footer.css";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-brand">
          <img src="src/assets/icon-clickhive.png" className="clickhive-icon"/>
          <h2>Click Hive</h2>
          <p>Your Digital Growth Partner</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/OurServices">Services</NavLink></li>
            <li><NavLink to="/OurWork">Our Work</NavLink></li>
            <li><NavLink to="/aboutus">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: clickhiveads@gmail.com</p>
          <p>Phone: +91 8595042651</p>
          <p>Delhi, India</p>
        </div>
        {/* Social Media */}
        <div className="footer-socials">
        <h4>Follow Us</h4>
        <div className="footer-icon-div">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <IoLogoFacebook className="icons" />
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram className="icons" />
            </a>
            <a href="https://www.linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icons" />
            </a>
        </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Click Hive. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
