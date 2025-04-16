import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../Style/headder.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Headder() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector(".header-grid");

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        header.style.transform = "translateY(-100%)"; // Hide
      } else {
        header.style.transform = "translateY(0)"; // Show
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-grid" ref={menuRef}>
      <div className="logo">
        <NavLink to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
          <img src="src/assets/clickhive.png" className="clickhive-icon" />
        </NavLink>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </div>

      {/* Navigation */}
      <nav className={`Routes ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/OurServices" className="nav-link" onClick={() => setMenuOpen(false)}>Our Services</NavLink></li>
          {/* <li><NavLink to="/OurWork" className="nav-link" onClick={() => setMenuOpen(false)}>Our Work</NavLink></li> */}
          <li><NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          {/* <li><NavLink to="/aboutus" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</NavLink></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Headder;
