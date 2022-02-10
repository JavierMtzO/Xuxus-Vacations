import React from 'react'
import styled from 'styled-components'

function Rental({ backgroundImg }) {
    return (
        <div>
            <Wrap bgImage={backgroundImg} >

            </Wrap>
        </div>
    )
}

export default Rental

const Wrap = styled.div`
    width: 100vw;
    height: 70vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
`
