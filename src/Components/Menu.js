import React from 'react';
import Logo from '../Images/logo.png';
import '../Styles/MenuComponent.css';
import { NavLink } from 'react-router-dom'

  const Menu = (props) => {

    function SignOut() {
        localStorage.removeItem('current_user');
        localStorage.removeItem('expires_at');
    }

    if (props.location.pathname === '/') return null
        return(
            <div id="MenuContainer">
                <h3>Menu</h3>
                <NavLink activeClassName="menuActive" to="/homepage">Home page</NavLink>
                <NavLink activeClassName="menuActive" to="/mypage">My page</NavLink>
                <NavLink activeClassName="menuActive" to="/settings">Settings</NavLink>
                <NavLink activeClassName="menuActive" to="/" onClick={SignOut} exact={true}>Log out</NavLink>
                                               
                <img id="logo" src={Logo} alt="Logo"></img>
            </div>
        );
}

export default Menu;
