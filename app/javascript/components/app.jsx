import React from 'react';
import Map from './Map/Map';
import Graph from './BarGraph/Graph';
import Gauge from './Gauge/Gauge';
import GridLayout from 'react-grid-layout';
import RGL, { WidthProvider } from 'react-grid-layout';
import Card from './Card';

import './index.scss';
const ReactGridLayout = WidthProvider(RGL);

class MyFirstGrid extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#141414' }}>
                <GridLayout
                    className="layout"
                    cols={12}
                    rowHeight={37}
                    width={1900}
                    isResizable={true}
                >
                    <div
                        key="gauge"
                        data-grid={{
                            x: 0,
                            y: 0,
                            w: 2,
                            h: 10
                        }}
                        style={{
                            backgroundColor: '#1f1d1d'
                        }}
                    >
                        <div className="title">TRAM</div>
                        <Gauge />
                    </div>
                    <div
                        key="graph"
                        data-grid={{
                            x: 2,
                            y: 0,
                            w: 4,
                            h: 10
                        }}
                        style={{
                            backgroundColor: '#1f1d1d'
                        }}
                    >
                        <div className="title">System Frequency</div>
                        <Graph />
                    </div>
                    <div
                        key="map"
                        data-grid={{
                            x: 6,
                            y: 0,
                            w: 6,
                            h: 10,
                            minW: 2,
                            maxW: 8
                        }}
                        style={{
                            backgroundColor: '#1f1d1d',
                            resize: 'both',
                            overflow: 'auto'
                        }}
                    >
                        <div className="title">Transmission System</div>
                        <Map />
                    </div>
                    <div
                        key="a"
                        data-grid={{ x: 0, y: 10, w: 3, h: 2 }}
                        style={{
                            backgroundColor: '#1f1d1d',
                            resize: 'both',
                            overflow: 'auto'
                        }}
                    >
                        <Card
                            title="Tram - Source-Destination-Path"
                            content="32.51"
                        />
                    </div>
                    <div
                        key="b"
                        data-grid={{ x: 3, y: 10, w: 3, h: 2 }}
                        style={{
                            backgroundColor: '#1f1d1d',
                            resize: 'both',
                            overflow: 'auto'
                        }}
                    >
                        <Card title="Tram - MW Available" content="40.30" />
                    </div>
                    <div
                        key="c"
                        data-grid={{ x: 6, y: 10, w: 3, h: 2 }}
                        style={{
                            backgroundColor: '#1f1d1d',
                            resize: 'both',
                            overflow: 'auto'
                        }}
                    >
                        <Card title="Tram - MVar Available" content="10.23" />
                    </div>
                    <div
                        key="d"
                        data-grid={{ x: 9, y: 10, w: 3, h: 2 }}
                        style={{
                            backgroundColor: '#1f1d1d',
                            resize: 'both',
                            overflow: 'auto'
                        }}
                    >
                        <Card title="Tram - Loss of Loads" content="10.04" />
                    </div>
                    <div
                        key="e"
                        data-grid={{ x: 14, y: 15, w: 12, h: 8 }}
                        style={{
                            backgroundColor: '#1f1d1d',
                            resize: 'both',
                            overflow: 'auto'
                        }}
                    >
                        e
                    </div>
                </GridLayout>
            </div>
        );
    }
}
export default MyFirstGrid;
