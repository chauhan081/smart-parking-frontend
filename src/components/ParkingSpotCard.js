import React from "react";
import axios from "axios";

const ParkingSpotCard = ({ spot }) => {
  const bookSpot = (spotId) => {
    axios
      .post(`http://localhost:5000/book_spot/${spotId}`)
      .then(() => alert(`Spot ${spotId} booked successfully!`))
      .catch((error) => console.error("Error booking spot:", error));
  };

  return (
    <div className="spot-card">
      <h3>Spot {spot.spot_number}</h3>
      <p>Status: {spot.occupied ? "Occupied" : "Available"}</p>
      {!spot.occupied && (
        <button onClick={() => bookSpot(spot.id)}>Book Spot</button>
      )}
    </div>
  );
};

export default ParkingSpotCard;
