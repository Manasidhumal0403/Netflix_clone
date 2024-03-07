import React from 'react';
import styled from 'styled-components';
// import "./Navbar.css";
import Logo from "./logo.png";

export default function Navbar(props) {
  return (
    <Container className='logo' >
      <div>
        <img 
        className='logo'
        src={Logo} alt='logo'/>
       <button>SignUp</button>
   
      </div>
      
    </Container>
      
  );
}
const Container=styled.div`
 
.logo {
  display: flex;
  display:grid;
  background-color: black;
  color: white;
  position: absolute;
  left: 10px; /* Adjust this value based on your preference */
  top: 40px; /* Adjust this value based on your preference */
  width: 100px; /* Adjust the width of your logo */
  /* height: auto; Maintain the aspect ratio of your logo */
}
button{
  color: white;
  background-color: red;
  border: none;
  font-size: 25px; 

  
}


`;

