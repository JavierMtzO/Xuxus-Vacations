import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import env from "react-dotenv";

const containerStyle = {
    width: '25vw',
    height: '20vh',
};

function Places({ center, home, zoom }) {
    return (
        <LoadScript
            googleMapsApiKey={env.API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
            >
                <Marker
                    icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
                    position={center}
                />
                <Marker
                    position={home}
                />

            </GoogleMap>
        </LoadScript >
    )
}

export default Places