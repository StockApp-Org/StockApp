import React from 'react';
import './Styles/App.css';
import {Container} from 'react-bootstrap';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Menu from './Components/Menu'

const notFound = () => (<><h1>404</h1><Link to="/">Go back</Link></>)

const App = () => {
    return (
      <div className="router">
       <BrowserRouter>
       <Menu />
       <Container className="pageContent">
          <Switch>
              <Route path="/" component={LoginPage} exact={true} />
              <Route path="/homepage" component={HomePage} exact={true}/>
              <Route path="/homepage" component={HomePage} exact={true}/>
              <Route component={notFound}/>
          </Switch>
       </Container>
         
      </BrowserRouter>
      </div>
    );
}

export default App;
