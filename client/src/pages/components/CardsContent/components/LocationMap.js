import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import env from "react-dotenv";
import styled from 'styled-components'

const containerStyle = {
    width: '70vw',
    height: '70vh',
};


function LocationMap({ center }) {
    return (
        <Wrap>
            <LoadScript
                googleMapsApiKey={env.API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center[0]}
                    zoom={18}
                >
                    <Marker
                        position={center[0]}
                    />

                </GoogleMap>
            </LoadScript >
        </Wrap>
    )
}

export default LocationMap

const Wrap = styled.div`
    width: 100%;   
    height: 75vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
`