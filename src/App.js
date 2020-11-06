import React from 'react';
import Navbar from './components/Navbar';
import List from './components/List';
import Detail from './components/Detail';
import Footer from './components/Footer';
import styled from 'styled-components';

const RootContainer = styled.div`
  height: 100%;
  background-color: lime;
  display: flex;
  flex-direction: column;
  min-width: 360px;
  
  /* background: yellow;
  margin: auto; */

/* background-color: deepSkyBlue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

const InnerContainer = styled.div`
  background-color: beige;
  display: flex;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;


  /* background-color: beige;
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: center; */
`;

function App() {
  return (
    <RootContainer>
      <Navbar />
      <InnerContainer>
        <List />
        <Detail />
      </InnerContainer>
      <Footer />
    </RootContainer>
  );
}

export default App;
