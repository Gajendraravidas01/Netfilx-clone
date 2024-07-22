import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/home.jpg'
import MovieLogo from '../assets/homeTitle.webp'
import { FaPlay } from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { getGenres } from '../store';

const Home = () => {
  const navigate = useNavigate();

  const[isScrolled , setIsScroll] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
  },[])

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled = {isScrolled}/>
      <div className="hero">
        <img src={backgroundImage} alt="backGroundimg"
        className='background-image'
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button onClick={() => navigate('/player')} className='flex j-center a-center'><FaPlay/> Play</button>
            <button className='flex j-center a-center'><AiOutlineInfoCircle/> More Info</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`