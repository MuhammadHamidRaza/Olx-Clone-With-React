// import './style.css';

// function MapComponent({location}) {


// }
// // apiKey: 'AIzaSyAWleTAMOPAcHeWptvRkOm_D20sjkOltHI',

// const mapStyle = 'https://api.maptiler.com/maps/satellite/style.json?key=&callback=initMap';
import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://api.maptiler.com/maps/satellite/style.json?key=&callback=initMap`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      // Initialize your map here
      initMap();
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      document.head.removeChild(script);
    };
  }, []);
  let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

  // Define the initMap function
  window.initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('google-map'), {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });

    // Additional map configuration or markers can be added here
  };

  return <div id="google-map" style={{ width: '100%', height: '100vh' }}></div>;
};

export default MapComponent;
