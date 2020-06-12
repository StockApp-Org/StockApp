import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Menu from './Components/Menu'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SettingsPage from './Pages/SettingsPage'

const notFound = () => (<><h1>404</h1><Link to="/">Go back</Link></>)
const MenuWithRouter = withRouter(Menu)
const App = () => {
    return (
      <div className="router">
       <Header />
       <BrowserRouter>
          <div className="menuWithPageContainer">
              <MenuWithRouter />
                    <div className="pageContent">
                        <Switch>
                            <Route path="/" component={LoginPage} exact={true} />
                            <Route path="/homepage" component={HomePage} exact={true}/>
                            <Route path="/settings" component={SettingsPage} exact={true}/>
                            <Route path="/passwordchange" component={SettingsPage} exact={true}/>
                            <Route path="/prefrences" component={SettingsPage} exact={true}/>
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
