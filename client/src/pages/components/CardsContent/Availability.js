import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import Fade from 'react-reveal/Fade'
import Agenda from './components/Agenda'

function Availability({ showAvailability, setShowAvailability }) {
    return (
        <>
            {showAvailability ? (
                < Background >
                    <Fade bottom>
                        <ModalWrapper>
                            <ModalExit>
                                <CloseModalButton
                                    aria-label='Close amenities'
                                    onClick={() => setShowAvailability(prev => !prev)}
                                />
                            </ModalExit>
                            <ModalContent>
                                <ModalText>
                                    <h1> Disponibilidad </h1>
                                </ModalText>
                                <Agenda />
                            </ModalContent>

                        </ModalWrapper>
                    </Fade>
                </Background >
            ) : null
            }
        </>
    )
}

export default Availability

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
