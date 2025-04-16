import "../Style/OurServices.css"
import React from "react";
import { NavLink } from "react-router-dom";
import { services } from "../Components/Api/OurserviceApi";

function OurServices() {
  console.log("Rendering service:", services);
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
            <NavLink to={`/OurServices/${index}`}>
              <button className="cardButton">Read More..</button>
            </NavLink>
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
