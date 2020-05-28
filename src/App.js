import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import LoginPage from './Pages/Login/LoginPage';

let App = () => {
  return (
    <Container fluid>
      <header>
        <Container fluid>
          <h1>WeStock - Manage your portfolio</h1>
        </Container>
      </header>
      <LoginPage/>
    </Container>
  );
}

export default App;
