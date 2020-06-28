/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Navbar from '../Components/SettingsNav'
import '../Styles/PreferencesPage.css'
import Preferences from '../Components/Preferences'
import { useState } from 'react'
import Config from '../Config/config.json'

const PreferencesPage = () => {

    const ApiUrlWithPort = Config.ApiUrl + ':' + Config.ApiPort;
    const [preferences, setPreferences] = useState([]);
    
    useEffect(() => {
        GetIndustries();
    },[]);
    
    const GetIndustries = () => {
        return new Promise(resolve => {
            fetch(ApiUrlWithPort+'/Industry')
            .then(response => response.json())
            .then(data => {
                setPreferences(data);
                resolve(data);
            })
        })
    }
return (
    <div className="preferencesPage">
        <h3>Preferences</h3>
        <div className="preferencesContent">
            <Navbar />
            <div id="list">
            <Preferences preferences={preferences}/>
            </div>          
        </div>
    </div>
)};
export default PreferencesPage