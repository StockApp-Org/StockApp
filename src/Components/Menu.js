import React from 'react';
import '../Styles/MenuComponent.css';
import Logo from '../Images/logo.png';
import { NavLink } from 'react-router-dom'

  const Menu = (props) => {



    if (props.location.pathname === '/') return null
        return(
            <div id="MenuContainer">
                <h3>Menu</h3>
                <NavLink activeClassName="isActive" to="/homepage">Home page</NavLink>
                <NavLink activeClassName="isActive" to="/mypage">My page</NavLink>
                <NavLink activeClassName="isActive" to="/settings">Settings</NavLink>
                <NavLink activeClassName="isActive" to="/" exact={true}>Log out</NavLink>
                                               
                <img id="logo" src={Logo} alt="Logo"></img>
            </div>
        );
}

export default Menu;