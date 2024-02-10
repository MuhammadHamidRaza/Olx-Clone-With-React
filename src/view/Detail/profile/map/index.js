import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from './marker.png'; 
import './style.css'

function MapComponent  (props) {
  const { latitude, longitude } = props.address;
  console.log(latitude,longitude);
  const position = [latitude, longitude]; 
  const markers = [
    { id: 1, position: [latitude, longitude], popupContent: 'Kharadar Police Choki' },
  ];

  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className='map-container'>
    <MapContainer className='map' center={position} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker with Popup */}
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={customIcon}>
          <Popup>{marker.popupContent}</Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default MapComponent;
