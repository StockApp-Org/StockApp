import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/MenuComponent.css'

const SettingsPage = () => (
    <div>
        <navbar className="settingsNavbar">
            <NavLink exact={true} activeClassName="isActive" to="/settings">My profile</NavLink>
            <NavLink activeClassName="isActive" to="/passwordchange">Change Password</NavLink>
            <NavLink activeClassName="isActive" to="/prefrences">Preferences</NavLink>
        </navbar>
    </div>
)

export default SettingsPage