import React, { useState } from 'react';
import Navbar from '../Components/SettingsNav'
import Config from '../Config/config.json'
import Button from 'react-bootstrap/Button'
import '../Styles/GdprPage.css';
import { Redirect } from 'react-router-dom';


let GdprPage = () => {

    const ApiUrlWithPort = Config.ApiUrl+':'+Config.ApiPort;
    const user =  JSON.parse(localStorage.getItem('current_user'));
    
    
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [loggedOut, setLoggedOut] = useState(false);
    
    
    const [deleteUserActive, setDeleteUserActive] = useState();
    
    if (!user){
        return <Redirect push to="/" />
    } 
    
    const userId = user.userId;
    
    const handleChange = e => {

            if(e.target.name === "pw"){
                setPassword(e.target.value);
            } else if (e.target.name === "cpw"){
                setConfirmPassword(e.target.value);
            }
        }
   

    const handleClick = () => setDeleteUserActive(true);


    
    const deleteUser = () => {
        var formData = new FormData();
        formData.append("userId", userId)
        formData.append("password", password);
        let userAddress = "";
        if (user.address[0]){
            userAddress = user.address[0].userId;
        }
        formData.append("passwordSalt", userAddress);

        var req = {
            method: 'DELETE',
            body: formData
        };
        
            fetch(ApiUrlWithPort+"/user/delete", req)
            .then(response => response.json())
            .then(data => {
                setLoggedOut(true);
                localStorage.removeItem('current_user');
                localStorage.removeItem('expires_at');
            })
            .catch(err => {
                alert("Wrong password!");
            });
    }



    const handleSubmit = e => {
        e.preventDefault();

        if (password === confirmPassword){
            deleteUser();
        } else {
            alert("Passwords don't match");
        }
    }

    
    return loggedOut ? <Redirect push to="/" /> : (
        <div className="preferencesPage">
        <h3>GDPR</h3>
        <div className="gdprContent">
            <Navbar /> 
            <div className="links">
                <ul>
                    <li>
                         <Button variant="secondary">
                            <a href={ApiUrlWithPort+'/User/Download/'+userId}>Download Your Data</a>
                         </Button>
                    </li>
                    <li>
                        <Button id="deleteFormBtn" variant="secondary" onClick={handleClick}>Delete your user</Button>
                    </li>
                </ul>
            </div>
             {
             deleteUserActive && 
             <>
             <form className="deleteForm" onSubmit={handleSubmit}>
                 <label>Password: </label><input name="pw" type="password"onChange={handleChange}></input>
                 <label>Confirm password: </label><input type="password" name="cpw" onChange={handleChange}></input>
                 <Button variant="danger" type="submit">Delete</Button>
             </form>
              </>}
        </div>
    </div>
    )
}

export default GdprPage;