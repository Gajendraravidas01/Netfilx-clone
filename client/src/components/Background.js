import React from 'react'
import styled from 'styled-components';
import background from '../assets/login.jpg'

const Background = () => {
  return (
    <Container>
        <img src={background} alt='background'/>
    </Container>
  )
}

export default Background;
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    img {
        height: 100vh;
        width: 100vw;
    }
`