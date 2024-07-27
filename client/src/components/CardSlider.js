import React, { useRef, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components'
import Card from './Card';

const CardSlider = ({data,title}) => {

    const listRef = useRef();
    const [sliderposition, setSliderPosition] = useState(0);
    const [showcontrols, setShowControls] = useState(false);
    const handleDirection = (direction) => {
      console.log(direction);
      let distance = listRef.current.getBoundingClientRect().x - 70;
      console.log(distance);
      if(direction === 'left' && sliderposition > 0){
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
        setSliderPosition(sliderposition -1 );
        
      }
      if(direction === 'right' && sliderposition < 4){
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        setSliderPosition(sliderposition + 1);

      }
    };
  return (
    <Container
      className="flex column"
      showcontrols={showcontrols}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showcontrols ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider flex" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`slider-action right ${
            !showcontrols ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  )
}

export default CardSlider

const Container = styled.div`
gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`