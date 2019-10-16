import React, { Component, Fragment } from 'react';
import './graph-styles.css';
import './custom-styles.css';
import {
    XYPlot,
    LineSeries,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis
} from 'react-vis';

class Graph extends Component {
    data = () => {
        let test = [];
        for (let i = 0; i < 500; i++) {
            test[i] = { x: i, y: Math.random() * 11 };
        }
        return test;
    };

    updateData = () => {
        let test = this.state.data;
        test.splice(0, 50);
        test.map(obj => {
            obj.x = obj.x - 50;
        });
        for (let i = 450; i < 500; i++) {
            test.push({ x: i, y: Math.random() * 11 });
        }
        return test;
    };

    constructor(props) {
        super(props);
        this.state = { data: this.data() };
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({ data: this.updateData() }),
            2000
        );
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <Fragment>
                <div className="App">
                    <XYPlot
                        height={430}
                        width={610}
                        stroke="#76a667"
                        style={{ strokeWidth: 0.5 }}
                    >
                        <VerticalGridLines />
                        <XAxis style={{ strokeWidth: 0.5 }} />
                        <YAxis style={{ strokeWidth: 0.5 }} />
                        <HorizontalGridLines />
                        <LineSeries
                            data={this.state.data}
                            style={{ strokeWidth: 1 }}
                        />
                    </XYPlot>
                </div>
            </Fragment>
        );
    }
}

export default Graph;
