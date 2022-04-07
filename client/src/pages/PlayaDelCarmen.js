import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import PdelCSlider from './components/CardsContent/components/slidersData/pdelcSlider'
import Amenities from './components/CardsContent/components/amenityData/pdelcAmenities'
import Maps from './components/CardsContent/components/mapsData/pdelcMaps'
import Places from './components/CardsContent/components/placesNearbyData/pdelcPlacesNearby'

function PlayaDelCarmen() {
    return (
        <div>
            <Header />
            <Cards
                backgroundImg="PdelC/pdelc.jpg"
                title="Penthouse sobre la 5ta avenida"
                images={PdelCSlider}
                amenities={Amenities[0]}
                center={Maps}
                places={Places}
            />
        </div>
    )
}

export default PlayaDelCarmen
