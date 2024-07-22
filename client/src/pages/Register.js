import React, { useState } from 'react'
import styled from 'styled-components'
import Background from '../components/Background'
import Header from '../components/Header'
import {firebaseAuth} from '../utils/Firebase_config'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate();

  const[showpassword,setShowPassword] = useState(false);

  const[FormValues, setFormValues] = useState({
    email : "",
    password : "",
  })

  const handlesignIN = async() => {
    try {
      const{email,password} = FormValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password);
    } catch (error) {
      console.log("Something went wrong on signIn",error)
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container showpassword = {showpassword}>
      <Background/>
      <div className="content">
        <Header login/>
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, Tv shows and more</h1>
            <h4>Watch anywhere. Cancel anytime</h4>
            <h6>Ready to watch? Enter your email to create or restart membership</h6>
          </div>
          <div className="form">
            <input type="email" name="email" id="email" placeholder='Email Address' value={FormValues.email} onChange={(e) => setFormValues({...FormValues,[e.target.name]: e.target.value})} />
            {
              showpassword && <input type="password" name="password" id="password" placeholder='Password' value={FormValues.password} onChange={(e) => setFormValues({...FormValues,[e.target.name]: e.target.value})} />
            }
            {
              !showpassword && <button onClick={() => setShowPassword(true) }>Get Start</button>
            }
            
          </div>
          <button onClick={handlesignIN}>Sign Up</button>
        </div>
      </div>
    </Container>
  )
}

export default Register;

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showpassword }) =>
          showpassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
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
    }
  }
`