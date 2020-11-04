import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: yellow;
  width: 50%;
  height: 150vh;
  max-width: 480px;

  @media screen and (max-width: 680px) {
  min-width: 480px;
  }

`;

function List() {
  return (
    <Container>
      Soy un List
    </Container>
  );
}

export default List;
