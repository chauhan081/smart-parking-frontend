import React, { useState, useEffect } from "react";
import ParkingMap from "./ParkingMap";
import "./ParkingSpots.css";
import { FaCar, FaCheckCircle, FaTimesCircle, FaMoon, FaSun } from "react-icons/fa";
import axios from "axios";

const ParkingSpots = () => {
  const [spots, setSpots] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/spots")
      .then((response) => setSpots(response.data))
      .catch((error) => console.error("Error fetching parking spots:", error));
  }, []);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="header">
        <h1>Smart Parking Spot Finder</h1>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <div className="content">
        <div className="parking-list">
          <h2>Available Parking Spots</h2>
          <div className="card-container">
            {spots.map((spot) => (
              <div key={spot.id} className={`card ${spot.occupied ? "occupied" : "available"}`}>
                <FaCar className="car-icon" />
                <h3>Spot {spot.spot_number}</h3>
                <p>
                  Status: {spot.occupied ? (
                    <span className="occupied-text"><FaTimesCircle /> Occupied</span>
                  ) : (
                    <span className="available-text"><FaCheckCircle /> Available</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="map-container">
          <ParkingMap />
        </div>
      </div>
    </div>
  );
};

export default ParkingSpots;
