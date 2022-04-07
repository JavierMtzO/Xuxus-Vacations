import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import TulumSlider from './components/CardsContent/components/slidersData/tulumSlider'
import Amenities from './components/CardsContent/components/amenityData/tulumAmenities'
import Maps from './components/CardsContent/components/mapsData/tulumMaps'
import Places from './components/CardsContent/components/placesNearbyData/tulumPlacesNearby'

function Tulum() {
    return (
        <div>
            <Header />
            <Cards
                backgroundImg="Tulum/tulum.jpg"
                title="Casa en MunTulum"
                availability={true}
                images={TulumSlider}
                amenities={Amenities[0]}
                center={Maps}
                places={Places}
            />
        </div>
    )
}

export default Tulum
