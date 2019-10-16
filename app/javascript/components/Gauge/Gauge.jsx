import React, { Component, Fragment } from 'react';
import GaugeChart from 'react-gauge-chart';
import './gauge.scss';

class Gauge extends Component {
    render() {
        return (
            <GaugeChart
                id="gauge-chart2"
                colors={['#e03434', '#d67627', '#32ba2d']}
                percent={0.9308}
                animate={false}
                cornerRadius={1}
                arcPadding={0.01}
                arcsLength={[5, 3, 3]}
                arcWidth={0.175}
                needleColor={'#000000'}
                needleBaseColor={'#000000'}
            />
        );
    }
}

export default Gauge;
