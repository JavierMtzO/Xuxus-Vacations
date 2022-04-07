import React from 'react'
import styled from 'styled-components'
import { FaUsers, FaDoorOpen, FaBed, FaBath, FaWifi, FaCarAlt, FaTv, FaUtensilSpoon } from 'react-icons/fa'

function AmenitiesContent({ amenities }) {
    return (
        <Wrap>
            <Description>
                <h3>Descripción de la propiedad</h3>
                <p> {amenities.first}</p>
                <p> {amenities.second}</p>
            </Description>
            <FirstItems>
                <Column>
                    <PropertyAmenity>
                        <CardIcon> <FaUsers /> </CardIcon>
                        <ColumnText><p>Hasta {amenities.guests} huéspedes</p></ColumnText>
                    </PropertyAmenity>
                    <PropertyAmenity>
                        <CardIcon> <FaUtensilSpoon /> </CardIcon>
                        <ColumnText><p>Cocina</p></ColumnText>
                    </PropertyAmenity>
                </Column>
                <Column>
                    <PropertyAmenity>
                        <CardIcon> <FaDoorOpen /> </CardIcon>
                        <ColumnText><p>{amenities.bedrooms} recámaras</p></ColumnText>
                    </PropertyAmenity>
                    <PropertyAmenity>
                        <CardIcon> <FaWifi /> </CardIcon>
                        <ColumnText><p>WiFi</p></ColumnText>
                    </PropertyAmenity>
                </Column>
                <Column>
                    <PropertyAmenity>
                        <CardIcon> <FaBed /> </CardIcon>
                        <ColumnText><p>{amenities.beds} camas</p></ColumnText>
                    </PropertyAmenity>
                    <PropertyAmenity>
                        <CardIcon> <FaCarAlt /> </CardIcon>
                        <ColumnText><p>Estacionamiento</p></ColumnText>
                    </PropertyAmenity>
                </Column>
                <Column>
                    <PropertyAmenity>
                        <CardIcon> <FaBath /> </CardIcon>
                        <ColumnText><p>{amenities.bathrooms} baños</p></ColumnText>
                    </PropertyAmenity>
                    <PropertyAmenity>
                        <CardIcon> <FaTv /> </CardIcon>
                        <ColumnText><p>TV</p></ColumnText>
                    </PropertyAmenity>
                </Column>
            </FirstItems>
        </Wrap>
    )
}

export default AmenitiesContent

const Wrap = styled.div`
    width: 100%;   
    height: 75vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Description = styled.div`
    width: 80%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const FirstItems = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`
const Column = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;    
`
const PropertyAmenity = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
const CardIcon = styled.div`
    align-text: center;
    width: 30%;
    font-size: 2rem;
    color: #000;
`
const ColumnText = styled.div`
    font-size: 0.8rem;
    width: 70%;
`
