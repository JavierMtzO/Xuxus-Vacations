import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Video from './Video'

function Home() {
    return (
        <Container>
            <Video
                title="Xuxus Vacations"
                id="home"
                description="Propiedades vacacionales en la Riviera Maya"
                downarrow="true"
            />
            <Section
                title="Tulum"
                id="tulum"
                description="Hermosa y espaciosa casa con alberca privada y amenidades de primer nivel"
                backgroundImg="Tulum/tulum.jpg"
                leftButtonTxt="Airbnb"
                linkAirbnb="https://www.airbnb.com/rooms/49708234?check_in=2022-06-24&check_out=2022-06-26&guests=1&adults=2&s=67&unique_share_id=3aaecabd-4d29-40b0-a0f1-29b87f5dd00a"
                rightButtonTxt="Ver propiedad"
                downarrow="true"
            />
            <Section
                title="Playa del Carmen"
                id="playadelcarmen"
                description="Departamento penthouse con rooftop y alberca privada"
                backgroundImg="PdelC/pdelc.jpg"
                leftButtonTxt="Airbnb"
                linkAirbnb="https://www.airbnb.com/rooms/47046360?check_in=2022-06-24&check_out=2022-06-26&guests=1&adults=2&s=67&unique_share_id=0f232396-7dd2-494f-be8a-ddb38f00bdfe"
                rightButtonTxt="Ver propiedad"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
