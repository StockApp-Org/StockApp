import React, { useState } from 'react';
import Navbar from '../Components/SettingsNav'
import Config from '../Config/config.json'
import '../Styles/GdprPage.css';

let GdprPage = () => {

    const ApiUrlWithPort = Config.ApiUrl+':'+Config.ApiPort;
    const userId = JSON.parse(localStorage.getItem('current_user')).userId;

    const [deleteUserActive, setDeleteUserActive] = useState();
    const handleClick = () => setDeleteUserActive((
        <>
            <form className="deleteForm" onSubmit={handleSubmit}>
                <label>Password: </label><input></input>
                <label>Confirm password: </label><input></input>
                <input type="submit"></input>
            </form>
        </>
    ));

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="preferencesPage">
        <h3>GDPR</h3>
        <div className="gdprContent">
            <Navbar /> 
            <div>
                <ul>
                    <li>
                        <a href={ApiUrlWithPort+'/User/Download/'+userId}>Download Your Data</a>
                    </li>
                    <li>
                        <button onClick={handleClick}>Delete your user</button>
                    </li>
                </ul>
            </div>
                        {deleteUserActive && deleteUserActive}
        </div>
    </div>
    )
}

export default GdprPage;