import React, { Component, Fragment } from 'react';
import './graph-styles.css';
import './custom-styles.css';
import {
    XYPlot,
    VerticalBarSeries,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    DiscreteColorLegend
} from 'react-vis';

class TramComponents extends Component {
    data = () => {
        let test = [];
        for (let i = 0; i < 250; i++) {
            test[i] = { x: i, y: Math.floor(Math.random() * 11) + 80 };
        }
        return test;
    };

    constructor(props) {
        super(props);
        this.state = { data: this.data() };
    }

    render() {
        return (
            <Fragment>
                <XYPlot
                    stackBy="y"
                    height={130}
                    width={1875}
                    stroke="#76a667"
                    style={{ strokeWidth: 0.5 }}
                >
                    <VerticalGridLines />
                    <XAxis style={{ strokeWidth: 0.5 }} />
                    <YAxis style={{ strokeWidth: 0.5 }} />
                    <HorizontalGridLines />
                    <VerticalBarSeries
                        data={this.state.data}
                        color="#557A49"
                        opacity=".85"
                    />
                    <VerticalBarSeries
                        data={this.state.data}
                        color="#E8B73A"
                        opacity=".85"
                    />
                    <VerticalBarSeries
                        data={this.state.data}
                        color="#6ECEDE"
                        opacity=".85"
                    />
                    <VerticalBarSeries
                        data={this.state.data}
                        color="#ED833D"
                        opacity=".85"
                    />
                </XYPlot>
                <DiscreteColorLegend
                    colors={['#557A49', '#E8B73A', '#6ECEDE', '#ED833D']}
                    items={[
                        'ECA!TRAMSDP',
                        'ECA!TRAMLOL',
                        'ECA!TRAMMWAV',
                        'ECA!TRAMMVARAV'
                    ]}
                    orientation="horizontal"
                />
            </Fragment>
        );
    }
}

export default TramComponents;
