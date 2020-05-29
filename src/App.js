import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import LoginPage from './Pages/Login/LoginPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false
    };
  }

  render() {
    console.log(this.signedIn);
    return (
      <Container fluid>
        <LoginPage/>
      </Container>
    );
  }
}

export default App;
