import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage';

const notFound = () => (<><h1>404</h1><Link to="/">Go back</Link></>)

class App extends Component {

  render() {
    return (
       <BrowserRouter>
          <Switch>
              <Route path="/" component={LoginPage} exact={true}/>
              <Route path="/homepage" component={HomePage}/>
              <Route path="/homepage" component={HomePage}/>
              <Route path="/homepage" component={HomePage}/>
              <Route component={notFound}/>
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
