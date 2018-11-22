import React, { Component } from 'react';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

class BizMap extends Component {
    render() {
        return (
            <div>
                <Map center={[33.7901, -118.1937]} zoom={12} width={500} height={330} >
                    <Marker anchor={[33.7901, -118.1937]} payload={1} onClick={({ event, anchor, payload }) => { }} />

                    <Overlay anchor={[33.7901, -118.1937]} offset={[120, 79]}>
                        <img src='pigeon.jpg' width={240} height={158} alt='' />
                    </Overlay>
                </Map>
            </div>
        );
    }
}
    export default BizMap;  