import React from 'react';
import Navbar from '../Components/SettingsNav'
import Config from '../Config/config.json'
import '../Styles/GdprPage.css';

let GdprPage = () => {

    const ApiUrlWithPort = Config.ApiUrl+':'+Config.ApiPort;
    const userId = JSON.parse(localStorage.getItem('current_user')).userId;

    return (
        <div className="preferencesPage">
        <h3>Preferences</h3>
        <div className="gdprContent">
            <Navbar /> 
            <div>
                <a href={ApiUrlWithPort+'/User/Download/'+userId}>Download Your Data</a>
            </div>
        </div>
    </div>
    )
}

export default GdprPage;