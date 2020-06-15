import React, { useEffect, useState } from 'react'
import SettingsNav from '../Components/SettingsNav'
import defaultProfile from '../Images/profileDefault.png'
import '../Styles/SettingsPage.css'

const SettingsPage = () => {


    const [userData, setUserData] = useState();
    useEffect(() => {
        fetch("https://localhost:5001/user/5")
      .then(res => res.json())
      .then(result => {
            setUserData(result);
        },
        (error) => {
          console.log(error)
          });
        }
    , [])

    return (
        
    <div className="settingsPageAll">

    <h3>Settings</h3>
       <div className="settingsContent">
       <SettingsNav />
           <img src={defaultProfile} style={{height: 90, width: 90}} alt="profilePicture"></img>
           <form>

               <div className="settingsRow">
                   <div>
                       <label>First Name</label><br></br>
                       <input value={userData && userData.firstName ? userData.firstName : "No info"}></input>
                   </div>
                   <div>
                       <label>Last name</label><br></br>
                       <input value={userData && userData.lastName ? userData.lastName : "No info" }></input>
                   </div>
               </div>
               <label>Social security number</label><br></br>
               <input value={userData && userData.personNr ? userData.personNr : "No info" }></input><br></br>
               <label>Adress</label><br></br>
               <input></input><br></br>
               <div className="settingsRow">
                   <div>
                       <label>Zip code</label><br></br>
                       <input></input>
                   </div>
                   <div>
                       <label>City</label><br></br>
                       <input></input>
                   </div>
               </div>
               <label>Phone number</label><br></br>
               <input></input><br></br>
               <label>Email</label><br></br>
               <input value={userData && userData.email ? userData.email : "No info" }></input>
               <input type="submit"></input>
           </form>
       </div>
   </div>
    )
}
export default SettingsPage