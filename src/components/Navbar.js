import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: green;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1rem;
  opacity: 0.9;
  min-width: 480px;
`;

function Navbar() {
  return (
    <Container>
      Soy un Navbar
    </Container>
  );
}

export default Navbar; 
