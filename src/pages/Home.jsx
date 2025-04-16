import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Home.css";

// Assets
// import heroVideo from "../assets/bg-video-final.mp4"; 
import heroVideo from "../assets/bg-final.mp4"
import heroVideoMobile from "../assets/mobile-view-final.mp4";
import Image1 from "../assets/intergation.jpg";
import Image2 from "../assets/workinghard.jpg";

// Components
import QuoteCarousel from "../Components/UI/quotes";

const clintslogo=["src/assets/clintslogo/Caramelly Logo.jpg",
                  "src/assets/clintslogo/hitachi.webp",
                "You Can Be Next.."]

function Home() {
  // Track whether the user is on a mobile device
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home">

      {/* Hero Section with Video Background */}
      <div className="main-hero">
        <video
          className="video-bg"
          autoPlay
          muted
          loop
          playsInline
          key={isMobile ? "mobile" : "desktop"}
        >
          <source src={isMobile ? heroVideoMobile : heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Text and Call to Action */}
        <div className="left-hero">
          <div className="hero-upper">
            <h1>Turning Clicks Into Customers</h1>
          </div>
          <div className="hero-mid">
            <h1>Click Hive</h1>
          </div>
          <div className="hero-lower">
            <h1>Where Creativity Meets Conversion.</h1>
          </div>
          <NavLink to="/ourservices" className="hero-button">
            Our Services
          </NavLink>
        </div>

        {/* Empty right hero block for layout/styling */}
        <div className="right-hero"></div>
      </div>

      {/* About Section - What We Do */}
      <div className="aboutus">
        <div className="what-we-do">
          <div className="what-left">
            <h1 className="what-heading">
              What <span className="highlighted-text">we</span>
              <span className="do">
                do<span className="question">?</span>
              </span>
            </h1>
            <p className="what-subtext">
              Want to expand your business? <br />
              <b>Join</b> ClickHive to kickstart your marketing reach
            </p>
          </div>

          {/* Digital Services Sections */}
          <div className="digital">
            {/* First Column */}
            <div className="what-center">
              <h2>Digital.</h2>
              <div className="underline"></div>
              <p className="italic">We create super-rich experiences online!</p>
              <p className="text-section">
                ClickHive is a full-scale Digital Marketing Agency based in New Delhi, India.
                We blend years of experience and knowledge to create performance-driven and creative solutions.
              </p>
              <NavLink to="/aboutus" className="link">
                ABOUT US
              </NavLink>
            </div>

            {/* Second Column */}
            <div className="what-right">
              <h2>And More Digital.</h2>
              <div className="underline"></div>
              <p className="italic">Marketing brands with care</p>
              <p className="text-section">
                What is marketing if it's not performance-driven? <br />
                We create digital experiences that stick and achieve results. 
                Trust us to make your brand visible and desired through focused marketing.
              </p>
              <NavLink to="/ourservices" className="link">
                OUR SERVICES
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Posters Section */}
      <div className="posters">
        <div className="seo-optimization">
          <h1>SEO Optimization</h1>
        </div>

        <div className="four-posters">
          <div className="upper2">
            <div className="upper2left">
              <h1>Social Media Marketing</h1>
            </div>
            <div className="upper2right">
              <h1>Analytics</h1>
            </div>
          </div>

          <div className="lower2">
            <div className="lower2left">
              <h1>Website Design & Development</h1>
            </div>
            <div className="lower2right">
              <h1>Performance Marketing</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Solutions Section */}
      <div className="solution">
        {/* Section 1: Image Right */}
        <div className="connected-section alternate">
          <div className="connected-text">
            <h2>Integrated Digital Solutions</h2>
            <h4><em>Insights, Metrics and Analytics - Everything is connected!</em></h4>
            <p>
              In a connected digital world, our approach to communication combines creativity and technology.
              From mobile to social media, everything works together under one roof.
            </p>
          </div>
          <div className="connected-image">
            <img src={Image1} alt="Everything is connected" />
          </div>
        </div>

        {/* Section 2: Image Left */}
        <div className="connected-section">
          <div className="connected-image">
            <img src={Image2} alt="Everything is connected" />
          </div>
          <div className="connected-text">
            <h2>Creative Digital Strategies</h2>
            <h4><em>Data. Design. Delivery – Perfectly Aligned!</em></h4>
            <p>
              Our strategies fuse design and data. From SEO to paid ads, we deliver precision-built,
              result-oriented marketing strategies that offer a superior user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <section className="our-clients-section">
        <h2 className="clients-title">Our Clients</h2>
        <p className="clients-subtitle">We're just getting started — your brand could be next!</p>

        {/* Placeholder Logos */}
        <div className="clients-logos">
          {clintslogo.map((item) => (
            <div className="client-logo placeholder" key={item}>
              <div className="logoimage"><img src={item} alt={item}/></div>
            </div>
          ))}
        </div>

        <p className="clients-footer">We’re proud to be new and driven — let’s grow together.</p>
      </section>

      {/* Quotes Carousel */}
      <QuoteCarousel />
    </div>
  );
}

export default Home;
