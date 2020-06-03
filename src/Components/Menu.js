import React from 'react';
import '../Styles/Menu.css';
import Logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

class Menu extends React.Component{

  

    render(){
        return(
            
            <div id="MenuContainer">
                
                <h3>Menu</h3>
                <Link to="/Home" >LINK test</Link>
                <Link to="/Portfolio" >LINK test</Link>
                <Link to="/MyPage" >LINK test</Link>
                <Link to="/Settings" >LINK test</Link>
                <button onClick={this.handleLogOut}>Log out</button>
                <img id="logo" src={Logo} alt="Logo here"></img>
            </div>
        );
    }
}

export default Menu;