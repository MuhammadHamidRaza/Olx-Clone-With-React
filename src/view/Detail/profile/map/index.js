// import './style.css';
// import React, { useState } from 'react';

// function MapComponent({location}) {
// }
// // apiKey: 'AIzaSyAWleTAMOPAcHeWptvRkOm_D20sjkOltHI',
// export default MapComponent;
import { useState, useEffect } from 'react';
useEffect(() => {
    fetchCoordinates()
}, [])

import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const fetchCoordinates = async () => {
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=YOUR_GOOGLE_MAPS_API_KEY`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            return { lat, lng };
        } else {
            throw new Error('Location not found');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
    }
};



const MapComponent = withGoogleMap(({ location }) => (
    <GoogleMap
        defaultZoom={15}
        defaultCenter={location}
    >
        <Marker position={location} />
    </GoogleMap>
));

export default MapComponent;
