import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Menu from './Components/Menu'
import Header from './Components/Header'
import Footer from './Components/Footer'

const notFound = () => (<><h1>404</h1><Link to="/">Go back</Link></>)

const App = () => {
    return (
      <div className="router">
       <BrowserRouter>
       <Header />
          <div className="menuWithPageContainer">
                <Menu />
                    <div className="pageContent">
                        <Switch>
                            <Route path="/" component={LoginPage} exact={true} />
                            <Route path="/homepage" component={HomePage} exact={true}/>
                            <Route path="/homepage" component={HomePage} exact={true}/>
                            <Route component={notFound}/>
                        </Switch>
                   </div>
          </div>
       <Footer />
         
      </BrowserRouter>
      </div>
    );
}

export default App;
