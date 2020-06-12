import React from 'react'
import Navbar from '../Components/SettingsNav'
import '../Styles/PasswordPage.css'

const PasswordPage = () => (
    <div className="passwordPage">
        <h3>Change password</h3>
        <div className="passwordContent">
            <Navbar />
                <form>

                    <label>Current password</label><br></br>
                    <input></input><br></br>
                    <label>New password</label><br></br>
                    <input></input><br></br>
                    <label>Confirm new password</label><br></br>
                    <input></input><br></br>
                    <input type="submit"></input><br></br>
                </form>
        </div>
    </div>
)

export default PasswordPage