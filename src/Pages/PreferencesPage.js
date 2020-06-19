import React, { useEffect } from 'react'
import Navbar from '../Components/SettingsNav'
import '../Styles/PreferencesPage.css'
import Preferences from '../Components/Preferences'
import { useState } from 'react'

const PreferencesPage = () => {

    const [preferences, setPreferences] = useState([]);
    const [inputData, setInputData] = useState();
    useEffect(() => {
        setPreferences(["Construction", "Health Care", "Energy", "Materials", "Financials", "Telecom", "Information Technology", "Real Estate"])
    },[]);
    

    const handleClick = () => {
        setPreferences(preferences.concat(inputData));
    }
    const handleChange = (e) => {
        setInputData(e.target.value);
    };
return (
    <div className="preferencesPage">
        <h3>Preferences</h3>
        <div className="preferencesContent">
            <Navbar />
            <div id="list">
            <Preferences preferences={preferences}/>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>Add new sector</button>
            </div>          
        </div>
    </div>
)};
export default PreferencesPage