import React from 'react'
import SettingsNav from '../Components/SettingsNav'

const SettingsPage = () => (
    <div>
        <SettingsNav />


        <div className="settingsContent">
            <img src="" alt="profilePicture"></img>
            <form>
                <input></input>
                <label>First name</label>
                <input></input>
                <label>Last name</label><br></br>
                <input></input>
                <label>Social security number</label><br></br>
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