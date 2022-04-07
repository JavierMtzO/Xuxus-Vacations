import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import VideoPlaya from './videos/playa-clara.mp4'

function Video({ title, id, description, downarrow }) {
    return (
        <Wrap id={id}>
            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"

                }}>
                <source src={VideoPlaya} type="video/mp4" />
            </video>

            <Fade bottom>
                <ItemText>
                    <TextWrap>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </TextWrap>
                </ItemText>
            </Fade>
            <Fade bottom>
                <Buttons>
                    {downarrow &&
                        <DownArrow src='/images/down-arrow.svg' />
                    }
                </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Video

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
const Buttons = styled.div`
`


const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`