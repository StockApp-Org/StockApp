import React, { useState } from 'react';
import Navbar from '../Components/SettingsNav'
import Config from '../Config/config.json'
import '../Styles/GdprPage.css';
import { Redirect } from 'react-router-dom';


let GdprPage = () => {

    const ApiUrlWithPort = Config.ApiUrl+':'+Config.ApiPort;
    const user =  JSON.parse(localStorage.getItem('current_user'));

    const userId = user.userId;
    
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [loggedOut, setLoggedOut] = useState(false);


    const [deleteUserActive, setDeleteUserActive] = useState();

    
    const handleChange = e => {

            if(e.target.name === "pw"){
                setPassword(e.target.value);
            } else if (e.target.name === "cpw"){
                setConfirmPassword(e.target.value);
            }
        }
        console.log(password);
        console.log(confirmPassword);
   

    const handleClick = () => setDeleteUserActive(true);


    
    const deleteUser = () => {
        var formData = new FormData();
        formData.append("userId", userId)
        formData.append("password", password);
        let userAddress = "";
        if (user.address[0]){
            userAddress = user.address[0].userId;
        }
        console.log(userAddress);
        formData.append("passwordSalt", userAddress);
        console.log(user.address[0])

        var req = {
            method: 'DELETE',
            body: formData
        };
        console.log(user.address);
        
            fetch(ApiUrlWithPort+"/user/delete", req)
            .then(response => response.json())
            .then(data => {
                setLoggedOut(true);
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
                        <a href={ApiUrlWithPort+'/User/Download/'+userId}>Download Your Data</a>
                    </li>
                    <li>
                        <button onClick={handleClick}>Delete your user</button>
                    </li>
                </ul>
            </div>
             {
             deleteUserActive && 
             <>
             <form className="deleteForm" onSubmit={handleSubmit}>
                 <label>Password: </label><input name="pw" onChange={handleChange}></input>
                 <label>Confirm password: </label><input name="cpw" onChange={handleChange}></input>
                 <input type="submit"></input>
             </form>
              </>}
        </div>
    </div>
    )
}

export default GdprPage;