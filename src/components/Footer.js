import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: cyan;
  text-align: center;
  width: 100%;
  padding: 1rem;
  min-width: 480px;
`;

function Footer() {
  return (
    <Container>
      Soy un Footer
    </Container>
  );
}

export default Footer;
