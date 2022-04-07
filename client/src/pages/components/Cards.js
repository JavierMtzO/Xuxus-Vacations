import React, { useState } from 'react'
import styled from 'styled-components'
import { FaHome, FaRegCalendarAlt, FaMapMarkerAlt, FaMapMarkedAlt, FaRegImages } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import { Button } from '@material-ui/core'
import Amenities from './CardsContent/Amenities'
import PropImages from './CardsContent/PropImages'
import PlacesNearby from './CardsContent/PlacesNearby'
import Location from './CardsContent/Location'
import Availability from './CardsContent/Availability'

function Cards({ backgroundImg, title, availability, images, amenities, center, places }) {
    const [showAmenities, setShowAmenities] = useState(false);
    const openAmenities = () => {
        setShowAmenities(prev => !prev);
    }
    const [showImages, setShowImages] = useState(false);
    const openImages = () => {
        setShowImages(prev => !prev);
    }
    const [showPlacesNearby, setShowPlacesNearby] = useState(false);
    const openPlacesNearby = () => {
        setShowPlacesNearby(prev => !prev);
    }
    const [showLocation, setShowLocation] = useState(false);
    const openLocation = () => {
        setShowLocation(prev => !prev);
    }
    const [showAvailability, setShowAvailability] = useState(false);
    const openAvailability = () => {
        setShowAvailability(prev => !prev);
    }
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <TextWrap>
                        <h1>{title}</h1>
                    </TextWrap>
                </ItemText>
            </Fade>
            <Fade bottom>
                <CardSection>
                    <Button onClick={openAmenities}>
                        <SingleCardLight>
                            <CardIcon>
                                <FaHome />
                            </CardIcon>
                            <CardText>
                                <p>Amenidades</p>
                            </CardText>
                        </SingleCardLight>
                    </Button>

                    <Button onClick={openImages}>
                        <SingleCardDark>
                            <CardIcon>
                                <FaRegImages />
                            </CardIcon>
                            <CardText>
                                <p>Imágenes de la propiedad</p>
                            </CardText>
                        </SingleCardDark>
                    </Button>

                    <Button onClick={openPlacesNearby}>
                        <SingleCardDark>
                            <CardIcon>
                                <FaMapMarkedAlt />
                            </CardIcon>
                            <CardText>
                                <p>Lugares cerca</p>
                            </CardText>
                        </SingleCardDark>
                    </Button>

                    <Button onClick={openLocation}>
                        <SingleCardLight>
                            <CardIcon>
                                <FaMapMarkerAlt />
                            </CardIcon>
                            <CardText>
                                <p>Ubicación</p>
                            </CardText>
                        </SingleCardLight>
                    </Button>
                    {availability ? (
                        <Button onClick={openAvailability}>
                            <SingleCardLight>
                                <CardIcon>
                                    <FaRegCalendarAlt />
                                </CardIcon>
                                <CardText>
                                    <p>Disponibilidad</p>
                                </CardText>
                            </SingleCardLight>
                        </Button>
                    ) : null}

                    <Amenities
                        showAmenities={showAmenities}
                        setShowAmenities={setShowAmenities}
                        amenities={amenities}
                    />
                    <PropImages
                        showImages={showImages}
                        setShowImages={setShowImages}
                        images={images}
                    />
                    <PlacesNearby
                        showPlacesNearby={showPlacesNearby}
                        setShowPlacesNearby={setShowPlacesNearby}
                        center={center}
                        places={places}
                    />
                    <Location
                        showLocation={showLocation}
                        setShowLocation={setShowLocation}
                        center={center}
                    />
                    <Availability
                        showAvailability={showAvailability}
                        setShowAvailability={setShowAvailability}
                    />

                </CardSection>
            </Fade>
        </Wrap >
    )
}

export default Cards

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const TextWrap = styled.div`
    background: rgba(255,255,255,0.7);
    padding: 15px;
    border-radius: 25px;
`
const CardText = styled.div`
    width: 15vw;
`

const CardSection = styled.div`
    width: 80vw;
    padding-top: 5vh;  
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const SingleCardLight = styled.div`
    width: 35vw;
    height: 20vh;
    background: rgb(255,255,255,0.9);
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    &:hover {
        background-color: lightblue;
    }
`

const SingleCardDark = styled(SingleCardLight)`
    background: rgb(151, 161, 176,0.9);
`
const CardIcon = styled.div`
    align-text: center;
    font-size: 2rem;
    color: #000;
`