import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import LoginPage from './Pages/LoginPage';

class App extends Component {

  render() {
    return (
      <Container fluid>
        <LoginPage/>
      </Container>
    );
  }
}

export default App;
