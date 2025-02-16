import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const ParkingMap = ({ spots = [] }) => {
  return (
    <div>
      {spots.map((spot) => (
        <p key={spot.id}>{spot.name}</p>
      ))}
    </div>
  );
};


export default ParkingMap;
