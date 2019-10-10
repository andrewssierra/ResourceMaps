import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    float: ${props => props.float};
    left: ${props => props.left};
    top: ${props => props.top};
`;

export default class Map extends React.Component {
    componentDidMount() {
        this.map = L.map('map', {
            center: [46.996085, -121.077026],
            zoom: 8,
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
        return (
            <Wrapper
                width="calc(100% - 18px)"
                height="calc(100% - 35px)"
                left="9px"
                float="center"
                id="map"
            />
        );
    }
}
