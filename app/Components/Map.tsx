import React from 'react';
import { Map } from 'react-map-gl';

export const MapView: React.FC = () => {
    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoiYmFyYmFyb3NzbyIsImEiOiJja3VsbWRiancwNXVqMzFwMTZlbXh3Y3Q1In0.4BKvUDl3t6OSJbdMmu7tkg" // Replace with your Mapbox token
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        />
    );
};
