import React, { useState } from 'react'
import Navbar from '../Components/SettingsNav'
import '../Styles/PasswordPage.css'

const PasswordPage = () => {
    const currentUser = JSON.parse(localStorage.getItem('current_user'));
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [wrongPassword, setWrongPassword] = useState();

    const formData = new FormData();
    formData.append("userId", currentUser.userId);
    formData.append("password", newPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword === confirmNewPassword){
            setWrongPassword(false);
            var req = {
                method: 'PATCH',
                body: formData
            };
    
            return new Promise(resolve => {
                fetch("https://localhost:5001/user/changePassword", req)
                .then(response => response.json())
                .then(data =>{
                    if (data != null){
                        console.log(data);
                    }
                })
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
                <form onSubmit={handleSubmit}>

                    <label>Current password</label><br></br>
                    <input name="current" onChange={handleChange}></input><br></br>
                    <label>New password</label><br></br>
                    <input name="new" onChange={handleChange}></input><br></br>
                    <label>Confirm new password</label><br></br>
                    <input name="confirm" onChange={handleChange}></input><br></br>
                    <input type="submit"></input>
                    {wrongPassword ? 
                        <p style={{color: "red"}}>Wrong password</p> : 
                        <p style={{color: "#254114"}}>Password has been updated!</p>}
                    <br></br>
                </form>
        </div>
    </div>
)}

export default PasswordPage