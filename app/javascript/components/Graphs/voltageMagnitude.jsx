import React, { Component, Fragment } from 'react';
import './graph-styles.css';
import './custom-styles.css';
import {
    XYPlot,
    AreaSeries,
    DiscreteColorLegend,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
} from 'react-vis';

class VoltageMagnitude extends Component {
    data = () => {
        let test = [];
        test = [{ x: 1, y: 82 }, { x: 2, y: 80 }, { x: 3, y: 81 }];

        return test;
    };

    data2 = () => {
        let test = [];
        test = [{ x: 1, y: 57 }, { x: 2, y: 60 }, { x: 3, y: 59 }];

        return test;
    };

    render() {
        return (
            <Fragment>
                <XYPlot
                    height={130}
                    width={1875}
                    style={{ strokeWidth: 0.5 }}
                    xDomain={[1, 3]}
                    yDomain={[50, 90]}
                >
                    <VerticalGridLines />
                    <XAxis style={{ strokeWidth: 0.1 }} />
                    <YAxis style={{ strokeWidth: 0.1 }} />
                    <HorizontalGridLines />
                    <AreaSeries
                        color="#557A49"
                        data={this.data()}
                        opacity={0.3}
                        style={{}}
                        curve="curveNatural"
                    />
                    <AreaSeries
                        color="#E8B73A"
                        data={this.data2()}
                        opacity={0.3}
                        style={{}}
                        curve="curveNatural"
                    />
                    <LineSeries
                        color="#E8B73A"
                        data={this.data2()}
                        style={{ strokeLinejoin: 'round', strokeWidth: 0.4 }}
                        curve="curveNatural"
                    />
                    <LineSeries
                        color="#557A49"
                        data={this.data()}
                        style={{ strokeLinejoin: 'round', strokeWidth: 0.4 }}
                        curve="curveNatural"
                    />
                </XYPlot>

                <DiscreteColorLegend
                    colors={['#557A49', '#E8B73A']}
                    items={['ECA!TRAMVOLTBUS192304', 'ECA!TRAMVOLTBUS192305']}
                    orientation="horizontal"
                />
            </Fragment>
        );
    }
}

export default VoltageMagnitude;
