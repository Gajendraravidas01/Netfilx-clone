import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import {Link, useNavigate} from 'react-router-dom'

const Header = (props) => {
    const navigate = useNavigate();
  return (
    <Container className='flex a-center j-between'>
        <div className="logo">
            <Link to={"/register"}>
                <img src={logo} alt="logo" />
            </Link>
        </div>
        <button onClick={() => navigate(props.login ? "/login" : "/register")}>{props.login ? "Log In" : "sign In"}</button>
    </Container>
  )
}

export default Header;
const Container = styled.div`
    padding: 0 4rem;
    .logo {
        img {
        height: 5rem;
        }
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
    }
`;