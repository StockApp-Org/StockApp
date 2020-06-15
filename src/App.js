import React from 'react';
<<<<<<< HEAD
import './Styles/App.css';
import {Container} from 'react-bootstrap';
=======
import './App.css';
import Container from 'react-bootstrap/Container';
>>>>>>> eba02eb9358b2a56431dd0183bc17ac5ccde1f97
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Menu from './Components/Menu'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SettingsPage from './Pages/SettingsPage'
import PasswordPage from './Pages/PasswordPage'
import PreferencesPage from './Pages/PreferencesPage'

const notFound = () => (<><h1>404</h1><Link to="/">Go back</Link></>)
const MenuWithRouter = withRouter(Menu)
const App = () => {
    return (
      <div className="router">
       <Header />
       <BrowserRouter>
<<<<<<< HEAD
       <Menu />
       <Container className="pageContent">
          <Switch>
              <Route path="/" component={LoginPage} exact={true} />
              <Route path="/homepage" component={HomePage} exact={true}/>
              <Route path="/homepage" component={HomePage} exact={true}/>
              <Route component={notFound}/>
          </Switch>
       </Container>
=======
          <div className="menuWithPageContainer">
              <MenuWithRouter />
                    <div className="pageContent">
                        <Switch>
                            <Route path="/" component={LoginPage} exact={true} />
                            <Route path="/homepage" component={HomePage} exact={true}/>
                            <Route path="/settings" component={SettingsPage} exact={true}/>
                            <Route path="/passwordchange" component={PasswordPage} exact={true}/>
                            <Route path="/prefrences" component={PreferencesPage} exact={true}/>
                            <Route component={notFound}/>
                        </Switch>
                   </div>
          </div>
       <Footer />
>>>>>>> eba02eb9358b2a56431dd0183bc17ac5ccde1f97
         
      </BrowserRouter>
      </div>
    );
}

export default App;
