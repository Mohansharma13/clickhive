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

    // Attach listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
      <header className="header-grid" ref={menuRef}>
      <div className="logo">
        <NavLink to="/" className="logo-link">
        <img src="src/assets/icon-clickhive.png" className="clickhive-icon"/>
          {/* <h1>Click Hive</h1>
          <h1 className="ads">Ads</h1> */}
        </NavLink>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </div>

      {/* Navigation */}
      <nav className={`Routes ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/OurServices" className="nav-link">Our Services</NavLink></li>
          <li><NavLink to="/OurWork" className="nav-link">Our Work</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
          <li><NavLink to="/aboutus" className="nav-link">About Us</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Headder;
