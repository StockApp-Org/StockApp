/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../Components/SettingsNav'
import '../Styles/PasswordPage.css'
import Config from '../Config/config.json';

const PasswordPage = () => {
    const ApiUrlWithPort = Config.ApiUrl + ':' + Config.ApiPort;
    const currentUser = JSON.parse(localStorage.getItem('current_user'));
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [wrongPassword, setWrongPassword] = useState();

    const formData = new FormData();
    formData.append("userId", currentUser.userId);
    formData.append("password", currentPassword);
    formData.append("passwordSalt", newPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword === confirmNewPassword){
            setWrongPassword(false);
            var req = {
                method: 'PATCH',
                body: formData
            };
    
            return new Promise(resolve => {
                fetch(ApiUrlWithPort + "/user/changePassword", req)
                .then(response => response.json())
                .then(data =>{
                    if (data != null){
                        alert("Success!");
                    } 
                })
                .catch(() => {
                    alert("Wrong password!");
                });
            });
        } else {
            setWrongPassword(true);
        }

    }
    const handleChange = (e) => {
        if(e.target.name === "current"){
            setCurrentPassword(e.target.value);
        } else if (e.target.name === "new") {
            setNewPassword(e.target.value);
        } else if (e.target.name === "confirm"){
            setConfirmNewPassword(e.target.value);
        }

    }
    return (
    <div className="passwordPage">
        <h3>Change password</h3>
        <div className="passwordContent">
            <Navbar />
                <form onSubmit={handleSubmit} className="passwordForm">

                    <label>Current password</label><br></br>
                    <input type="password" name="current" onChange={handleChange}></input><br></br>
                    <label>New password</label><br></br>
                    <input type="password" name="new" onChange={handleChange}></input><br></br>
                    <label>Confirm new password</label><br></br>
                    <input type="password" name="confirm" onChange={handleChange}></input><br></br>
                    <input type="submit"></input>
                    {wrongPassword && (wrongPassword ? 
                        <p style={{color: "red"}}>Wrong password</p> : 
                        <p style={{color: "#254114"}}>Password has been updated!</p>)}
                    <br></br>
                </form>
        </div>
    </div>
)}

export default PasswordPage
