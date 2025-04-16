// src/Components/Pages/OurservicesCard.jsx
import "../../Style/OurserviceCardPage.css";
import { services } from "../Api/OurserviceApi";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Loader Component
function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
}

function OurservicesCard() {
  const { id } = useParams();
  const service = services[parseInt(id)];
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (service) {
      setLoading(false);
    }
  }, [service]);

  if (loading) {
    return <Loader />;
  }

  if (!service) {
    return (
      <div className="service-details not-found">
        <h2>Service Not Found</h2>
        <p>The service you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="service-details-wrapper">
      <div className="service-details">
        <h1 className="service-title">{service.title}</h1>
        <img
          src={`/ourservice-image/${service.title}.jpg`}
          alt={service.title}
          className="service-image"
        />
        <div className="service-content">
          <p className="description">{service.description}</p>
          <p className="about">{service.about}</p>
        </div>
      </div>
      <div className="back-button-container">
        <NavLink to="/OurServices">
          <button className="back-button">Back</button>
        </NavLink>
      </div>
    </div>
  );
}

export default OurservicesCard;
