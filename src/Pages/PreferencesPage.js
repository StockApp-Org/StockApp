import React from 'react'
import Navbar from '../Components/SettingsNav'
import '../Styles/PreferencesPage.css'

const PreferencesPage = () => (
    <div className="preferencesPage">
        <h3>Preferences</h3>
        <div className="preferencesContent">
            <Navbar />
            <form>
                <input type="checkbox"></input>
                <labe>Something here</labe><br></br>
                <input type="checkbox"></input>
                <labe>Something here</labe><br></br>
                <input type="checkbox"></input>
                <labe>Something here</labe><br></br>
                <input type="submit"></input>
            </form>
        </div>
    </div>
)

export default PreferencesPage