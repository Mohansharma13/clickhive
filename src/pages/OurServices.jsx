import "../Style/OurServices.css"

import React from "react";
import { NavLink } from "react-router-dom";

import { FaChartLine, FaGlobe, FaLaptopCode, FaBullhorn, FaSearch, FaPalette } from "react-icons/fa";

function OurServices() {
  const services = [
    {
      icon: <FaChartLine />,
      title: "Performance Marketing",
      description: "Drive measurable growth with data-driven strategies and ROI-focused campaigns.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Boost your visibility on search engines and improve organic traffic.",
    },
    {
      icon: <FaGlobe />,
      title: "Social Media Marketing",
      description: "Build brand presence across all major platforms and engage your audience.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Design & Development",
      description: "Craft responsive, fast, and visually stunning websites tailored for conversion.",
    },
    {
      icon: <FaBullhorn />,
      title: "Brand Strategy",
      description: "Create a unique brand voice and strategy that stands out in the digital crowd.",
    },
    {
      icon: <FaPalette />,
      title: "Creative Content",
      description: "We design compelling visuals and write engaging content to inspire action.",
    },
  ];

  return (
    <div className="our-services-page">
      <header className="services-hero">
        <h1>Our Services</h1>
        <p>At ClickHive, we turn creativity into results — here’s how we help your brand grow.</p>
      </header>

      <section className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <footer className="services-footer">
        <h3>Want to work with us?</h3>
        <p>Let’s discuss your goals and build a custom strategy together.</p>
        <NavLink to="/contact" className="get-started-button">
          Get Started
        </NavLink>
      </footer>
    </div>
  );
}

export default OurServices;
