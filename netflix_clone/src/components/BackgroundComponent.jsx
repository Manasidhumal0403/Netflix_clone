import React from 'react';
import styled from 'styled-components';
import backgroundImage from './login.jpg'; // Rename the imported image
export default function BackgroundComponent() {
  return (
    <Container className='background'>
      <img src={backgroundImage} alt='background'/> {/* Use the renamed image variable */}
    </Container>
  )
}
const Container = styled.div`
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background-size: cover;
}

//  height:100%;
//  width: 100%;
//  margin:0;
//  padding:0;
//  position:fixed;
//  img {
//     height:100vh:
//     width:100vw;
//  }

 `;

 
