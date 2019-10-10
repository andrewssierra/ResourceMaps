import React, { Component, Fragment } from 'react';
import GaugeChart from 'react-gauge-chart';
import './gauge.scss';

class Gauge extends Component {
    render() {
        return (
            <GaugeChart
                id="gauge-chart2"
                colors={['#e03434', '#d67627', '#32ba2d']}
                nrOfLevels={15}
                percent={0.9308}
            />
        );
    }
}

export default Gauge;
