import React from 'react';
import Navbar from './components/Navbar';
import List from './components/List';
import Detail from './components/Detail';
import Footer from './components/Footer';

import styled from 'styled-components';

const Container = styled.div`
  background-color: deepSkyBlue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InnerContainer = styled.div`
  background-color: beige;
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <InnerContainer>
        <List />
        <Detail />
      </InnerContainer>
      <Footer />
    </Container>
  );
}

export default App;
