import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: yellow;
  width: 100%;
  max-width: 480px;
  min-width: 360px;
  margin-right: 0px;

  height: 150vh; /* provisional */

  @media screen and (min-width: 680px){
    width: 50%;
    margin-right: 5%
  }
  /* background-color: yellow;
  width: 50%;
  height: 150vh;
  max-width: 480px;

  @media screen and (max-width: 680px) {
    min-width: 480px;
  } */
`;

function List() {
  return <Container>Soy un List</Container>;
}

export default List;
