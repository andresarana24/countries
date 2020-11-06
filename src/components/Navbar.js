import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: green;
  position: sticky;
  top: 0;
  z-index: 10;
  opacity: 0.9;
  height: 2.5rem;
  width: 100%;
  /* width: 100%;
  padding: 1rem;
  min-width: 480px; */
`;

function Navbar() {
  return (
    <Container>
      Soy un Navbar
    </Container>
  );
}

export default Navbar; 
