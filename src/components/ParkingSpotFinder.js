import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParkingSpotFinder = () => {
  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch parking spots
    axios.get('http://localhost:5000/api/parking-spots')
      .then(response => {
        setParkingSpots(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="parking-container">
      {parkingSpots.map(spot => (
        <div className="parking-card" key={spot.id}>
          <h3>{spot.name}</h3>
          <p>{spot.address}</p>
          <p>{spot.availability ? 'Available' : 'Not Available'}</p>
          <a href="#" className="btn">Reserve Spot</a>
        </div>
      ))}
    </div>
  );
};

export default ParkingSpotFinder;
