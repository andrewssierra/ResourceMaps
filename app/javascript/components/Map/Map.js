import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import icon from '../../images/marker2.png';

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
            center: [47.78037, -119.078581],
            zoom: 7,
            zoomControl: true
        });

        L.tileLayer(
            'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            {
                maxZoom: 20,
                maxNativeZoom: 17
            }
        ).addTo(this.map);

        var thisIcon = new L.Icon({
            iconUrl: icon,
            iconSize: [12, 12] // size of the icon
        });
        L.marker([46.996085, -121.077026], { icon: thisIcon }).addTo(this.map);
        L.marker([47.658, -117.426], { icon: thisIcon }).addTo(this.map);

        var latlngs = [[46.996085, -121.077026], [47.658, -117.426]];
        var polyline = L.polyline(latlngs, { color: '#8fc31f' }).addTo(
            this.map
        );
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
