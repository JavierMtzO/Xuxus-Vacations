import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <Wrap>
            <Fade bottom>
                <Slider className='slider'>
                    <LeftArrow>
                        <FaArrowAltCircleLeft className='arrow' onClick={prevSlide} />
                    </LeftArrow>
                    <SliderImage>
                        {
                            slides.map((slide, index) => {
                                return (
                                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                        {index === current && (
                                            <img src={slide.image} alt={slide.alt} />
                                        )}
                                    </div>
                                )
                            })
                        }
                    </SliderImage>
                    <RightArrow>
                        <FaArrowAltCircleRight className='arrow' onClick={nextSlide} />
                    </RightArrow>
                </Slider>
            </Fade>
        </Wrap>
    )
}

export default ImageSlider

const Wrap = styled.div`
    width: 100%;   
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
`
const Slider = styled.div`
    padding-top: 5.5vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`
const LeftArrow = styled.div`
    align-text: center;
    font-size: 3rem;
    color: #000;
    cursor: pointer;
    user-select: none;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`
const RightArrow = styled.div`
    font-size: 3rem;
    color: #000;
    cursor: pointer;
    user-select: none;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`
const SliderImage = styled.div`
`