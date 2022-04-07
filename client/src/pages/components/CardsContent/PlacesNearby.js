import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import Fade from 'react-reveal/Fade'
import Places from './components/Places'

function PlacesNearby({ showPlacesNearby, setShowPlacesNearby, center, places }) {
    return (
        <>
            {showPlacesNearby ? (
                < Background >
                    <Fade bottom>
                        <ModalWrapper>
                            <ModalExit>
                                <CloseModalButton
                                    aria-label='Close amenities'
                                    onClick={() => setShowPlacesNearby(prev => !prev)}
                                />
                            </ModalExit>
                            <ModalContent>
                                <ModalText>
                                    <h1> Lugares cerca </h1>
                                </ModalText>
                                <Wrap>
                                    <PlaceNearby>
                                        <h1>{places[0].titulo}</h1>
                                        <p>{places[0].descripcion}</p>
                                    </PlaceNearby>
                                    <Places
                                        center={center[1]}
                                        home={center[0]}
                                        zoom={places[0].zoom}
                                    />
                                </Wrap>
                                <Wrap>
                                    <PlaceNearby>
                                        <h1>{places[1].titulo}</h1>
                                        <p>{places[1].descripcion}</p>
                                    </PlaceNearby>
                                    <Places
                                        center={center[2]}
                                        home={center[0]}
                                        zoom={places[1].zoom}
                                    />
                                </Wrap>
                                <Wrap>
                                    <PlaceNearby>
                                        <h1>{places[2].titulo}</h1>
                                        <p>{places[2].descripcion}</p>
                                    </PlaceNearby>
                                    <Places
                                        center={center[3]}
                                        home={center[0]}
                                        zoom={places[2].zoom}
                                    />
                                </Wrap>
                            </ModalContent>
                        </ModalWrapper>
                    </Fade>
                </Background >
            ) : null
            }
        </>
    )
}

export default PlacesNearby

const Background = styled.div`
    width: 100vw;
    height: 101vh;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top:-28vh;
    left:-10vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
const Wrap = styled.div`
    width: 80%;   
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4vh;
`
const PlaceNearby = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`
const ModalWrapper = styled.div`
    width: 85vw;
    height: 90vh;   
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    display: flex;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    flex-direction: column;
`
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ModalText = styled.div`
    padding-bottom: 4vh;
`
const ModalExit = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    width: 32px;
    height: 32px;
    padding: 0;
    z-indez: 10;
`
