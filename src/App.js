import React from 'react';
import './Styles/App.css';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Menu from './Components/Menu'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SettingsPage from './Pages/SettingsPage'
import PasswordPage from './Pages/PasswordPage'
import PreferencesPage from './Pages/PreferencesPage'
import Authentication from './Authentication';

const notFound = () => (<><h1>404</h1><Link to="/">Go back</Link></>)
const MenuWithRouter = withRouter(Menu)
const auth = new Authentication();
const App = () => {
    return (
      <div className="router">
       <Header />
       <BrowserRouter>
          <div className="menuWithPageContainer">
              <MenuWithRouter auth={auth}/>
                    <div className="pageContent">
                        <Switch>
                            <Route path="/" render={() => <LoginPage auth={auth}/>} exact={true} />
                            <Route path="/homepage" component={HomePage} exact={true}/>
                            <Route path="/settings" component={SettingsPage} exact={true}/>
                            <Route path="/passwordchange" component={PasswordPage} exact={true}/>
                            <Route path="/prefrences" component={PreferencesPage} exact={true}/>
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
