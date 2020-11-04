import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red;
  width: 50%;
  max-width: 480px;

  @media screen and (max-width: 680px){
    visibility: hidden;
    width: 0%;
  }

  @media screen and (min-width: 1190px){
    max-width: 680px;
    margin-left: 20px;
    width: 680px;
    background-color: gray;
  }
`; 

function Detail() {
  return (
    <Container>
    </Container>
  );
}

export default Detail;
