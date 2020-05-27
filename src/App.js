import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import LoginPage from './Pages/Login/LoginPage';

let App = () => {
  return (
    <Container fluid>
      <LoginPage/>
    </Container>
  );
}

export default App;
