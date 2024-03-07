import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
export default function SignUp() {
  const[showPassword,setshowPassword]=useState(false);
  return (
  <Container >
<BackgroundImage/>
 <div className='content'>
<Header login/>

<div className='body flex column a-center j-center'>
    <div className='text flex column '>
        <h1>Unlimited Movies ,Tv shows and more</h1>
        <h4>Watch anywhere. Cancel anytime</h4>
      <h6>  Ready to watch? Enter your email to create or restart membership.</h6>
    </div>
    <div className='form'>
        <input type='email' placeholder='Enter your Email' name='email'/>
        <br />
        <input type='password' placeholder='Enter Password' name='password'/>
        <button>Get Started</button>
        </div>
        <button >Login</button>
    </div>
</div> 

   </Container>
  )
}
 const Container =styled.div`

position:relative;
.content {
    position: absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
     display:grid;
     grid-template-rows: 15vh 85vh;
       .body {
        gap: 1rem;
        .text {
          gap:1rem;
           text-align:center;
           font-size:2 rem;
        h1 {
          padding:0 25rem;

        }
      }
      .form {
        display: grid;
        
        width: 60%;
        input {
        color:black;
        border:none;
        padding:1.5rem;
        font-size:1.2rem;
        border:1 px solid black;
        &:focus{
          outline:none;

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
      button
      {
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


`;
