import '../Styles/Slider.css'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
// import zIndex from '@mui/material/styles/zIndex'
import { useState } from 'react'
import { slides } from '../../src/data.js'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <div className="Slider">
      <ArrowCircleLeftOutlinedIcon
        style={{
          fontSize: '45px',
          color: 'teal',
          position: 'absolute',
          margin: 'auto',
          top: 0,
          bottom: 0,
          left: '7px',
          cursor: 'pointer',
          opacity: '0.3',
          transition: 'opacity 0.3s',
          zIndex: 100,
          // marginLeft: ' 20px',
        }}
        // Add the :hover selector
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.3'
        }}
        // Handle Click Slider
        direction="left"
        onClick={() => handleClick('left')}
      />
      <ArrowCircleRightOutlinedIcon
        style={{
          fontSize: '45px',
          color: 'teal',
          position: 'absolute',
          margin: 'auto',
          top: 0,
          right: '7px',
          bottom: 0,
          cursor: 'pointer',
          opacity: '0.3',
          zIndex: 100,
          marginRight: '5px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.3'
        }}
        // Handle Click Slider
        direction="right"
        onClick={() => handleClick('right')}
      />
      <div className="Slider__Container">
        {slides.map((slide, index) => (
          <section
            key={index}
            className="Slider__Wrapper"
            style={{
              backgroundColor: slide.backgroundColor,
              '--slideIndex': slideIndex,
            }}
          >
            <div className="Slider__Image">
              <img src={slide.imageSrc} alt="" />
            </div>
            <div className="Slider__Info">
              <h2 className="Slider__Info-Title">{slide.title}</h2>
              <p className="Slider__Info-Desc">{slide.description}</p>
              <button>{slide.buttonText}</button>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
export default Slider
