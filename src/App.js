import React from 'react';
import './Styles/App.css';
import {Container} from 'react-bootstrap';

let App = ({newPage}) => {
    return (
          <Container fluid>
            {newPage}
           </Container>
    );
}

export default App;
