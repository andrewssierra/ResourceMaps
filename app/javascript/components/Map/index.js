import React from 'react';
import L from 'leaflet';
import styles from './Map.css';
import 'leaflet/dist/leaflet.css';
import { watchFile } from 'fs';

export default class Map extends React.Component {
    componentDidMount() {
        this.map = L.map('map', {
            center: [38.380422, -101.342848],
            zoom: 4,
            zoomControl: true
        });

        L.tileLayer(
            'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            {
                detectRetina: true,
                maxZoom: 20,
                maxNativeZoom: 17
            }
        ).addTo(this.map);
    }

    render() {
        return <div id="map"></div>;
    }
}
