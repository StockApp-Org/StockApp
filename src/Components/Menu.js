import React from 'react';
import '../Styles/Menu.css';
import Logo from '../Images/logo.png';
import { Link } from 'react-router-dom'

class Menu extends React.Component{

    render(){
        return(
            <div id="MenuContainer">
                <h3>Menu</h3>
                <Link to="/homepage">Home page</Link>
                <Link to="/mypage">My page</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/">Log out</Link>
                                               
                <img id="logo" src={Logo} alt="Logo here"></img>
            </div>
        );
    }
}

export default Menu;