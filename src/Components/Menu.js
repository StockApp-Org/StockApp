import React from 'react';
import '../Styles/Menu.css';
import Logo from '../Images/logo.png';

class Menu extends React.Component{


    render(){
        return(
            <div id="MenuContainer">
                <h3>Menu</h3>
                <a href="">Home</a>
                <a href="">Portfolio</a>
                <a href="">Settings</a>
                <a href="">Log out</a>
                
                <img id="logo" src={Logo} alt="Logo here"></img>
            </div>
        );
    }
}

export default Menu;