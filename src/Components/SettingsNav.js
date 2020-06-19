import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/MenuComponent.css'

const SettingsPage = () => (
        <div className="settingsNavbar">
            <NavLink exact={true} activeClassName="settingsNavbarActive" to="/settings">My profile</NavLink>
            <NavLink activeClassName="settingsNavbarActive" to="/passwordchange">Change Password</NavLink>
            <NavLink activeClassName="settingsNavbarActive" to="/prefrences">Preferences</NavLink>
        </div>
)

export default SettingsPage