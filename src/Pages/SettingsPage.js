import React from 'react'
import SettingsNav from '../Components/SettingsNav'
import defaultProfile from '../Images/profileDefault.png'
import '../Styles/SettingsPage.css'

const SettingsPage = () => (
    <div className="settingsPageAll">

     <h3>Settings</h3>
        <div className="settingsContent">
        <SettingsNav />
            <img src={defaultProfile} style={{height: 90, width: 90}} alt="profilePicture"></img>
            <form>

                <div id="name">
                    <label>First name</label><br></br>
                    <input></input>
                </div>
                    <label>Last name</label>
                    <input></input>
                <div></div>
                <label>Social security number</label><br></br>
                <input></input><br></br>
                <input></input>
                <label>Adress</label><br></br>
                <input></input>
                <label>Zip code</label>
                <input></input>
                <label>City</label><br></br>
                <input></input>
                <label>Phone number</label><br></br>
                <input></input>
                <label>Email</label><br></br>
                <input type="submit"></input>
            </form>
        </div>
    </div>
)

export default SettingsPage