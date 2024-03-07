import React from 'react'
import styled from "styled-components";
import Background  from './BackgroundComponent';
import Navbar from './Navbar';

export default function MainPage() {
  return (
    <Container>
      <div>
        <Background/>
        <Navbar/>
        </div>

    </Container>
  )
}
 const Container=styled.div`
 
 `;
