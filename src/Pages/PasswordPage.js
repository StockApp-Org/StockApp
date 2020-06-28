/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../Components/SettingsNav'
import Button from 'react-bootstrap/Button'
import '../Styles/PasswordPage.css'
import Config from '../Config/config.json';
import Message from '../Components/Message';

const PasswordPage = () => {

    const ApiUrlWithPort = Config.ApiUrl + ':' + Config.ApiPort;
    const currentUser = JSON.parse(localStorage.getItem('current_user'));
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [wrongPassword, setWrongPassword] = useState();
    const [success, setSuccess] = useState(null);

    const formData = new FormData();
    formData.append("userId", currentUser.userId);
    formData.append("password", currentPassword);
    formData.append("passwordSalt", newPassword);

    const resetForm = () => {
        var formEls = document.querySelectorAll("#passwordChangeForm input");
        var elementArr = Array.from(formEls);
        elementArr.map(el => (
            el.value = ""
        ));
    }

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
                        setSuccess(true);
                        resetForm();
                        resolve(1);
                    } 
                })
                .catch(() => {
                    setSuccess(false);
                    resetForm();
                    resolve(-1);
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
                <form onSubmit={handleSubmit} id="passwordChangeForm" className="passwordForm">

                    <label>Current password</label><br></br>
                    <input type="password" name="current" onChange={handleChange}></input><br></br>
                    <label>New password</label><br></br>
                    <input type="password" name="new" onChange={handleChange}></input><br></br>
                    <label>Confirm new password</label><br></br>
                    <input type="password" name="confirm" onChange={handleChange}></input><br></br>
                    <Button variant="secondary" type="submit">Update</Button>
                    <br></br>
                </form>
                {(success === false ? 
                    <Message show={true}
                            title={"Wrong password!"}
                            message={"Either the new passwords are not mathching or you have mistyped your current password"}/>
                    : (success === true ?
                    <Message show={true}
                            title={"Sucecess!"}
                            message={"The password has been updated."}/>
                            :
                            <br></br>))}
        </div>
    </div>
)}

export default PasswordPage
