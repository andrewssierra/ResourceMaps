import React from 'react';
import Map from './Map/index';
import GridLayout from 'react-grid-layout';
import RGL, { WidthProvider } from 'react-grid-layout';
import './Map/index.css';

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
                        key="b"
                        data-grid={{
                            x: 0,
                            y: 0,
                            w: 6,
                            h: 10,
                            minW: 2,
                            maxW: 8
                        }}
                        style={{
                            backgroundColor: '#1f1d1d'
                        }}
                    >
                        b
                    </div>
                    <div
                        key="c"
                        data-grid={{ x: 4, y: 6, w: 12, h: 10 }}
                        style={{
                            backgroundColor: '#1f1d1d',
                            resize: 'both',
                            overflow: 'auto'
                        }}
                    >
                        c
                    </div>
                    <div
                        key="a"
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
                        <Map />
                    </div>
                </GridLayout>
            </div>
        );
    }
}
export default MyFirstGrid;
