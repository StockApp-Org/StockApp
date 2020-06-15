import React, { useEffect, useState } from 'react'
import SettingsNav from '../Components/SettingsNav'
import defaultProfile from '../Images/profileDefault.png'
import '../Styles/SettingsPage.css'

const SettingsPage = () => {


    const [userData, setUserData] = useState();
    const [firstName, setSetFirstName] = useState();

    useEffect(() => {
        fetch("https://localhost:5001/user/5")
      .then(res => res.json())
      .then(result => {
            setUserData(result);
            setSetFirstName(result.firstName)
        },
        (error) => {
          console.log(error)
          });
        }
    , []);

    const handleChange = (e) => {
        
        console.log(e.target.name)
        
    };

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
                       <input name="firstName" onChange={handleChange} value={firstName}></input>
                   </div>
                   <div>
                       <label>Last name</label><br></br>
                       <input onChange={handleChange} value={userData && userData.lastName ? userData.lastName : "No info" }></input>
                   </div>
               </div>
               <label>Social security number</label><br></br>
               <input onChange={handleChange} value={userData && userData.personNr ? userData.personNr : "No info" }></input><br></br>
               <label>Address</label><br></br>
               <input onChange={handleChange}></input><br></br>
               <div className="settingsRow">
                   <div>
                       <label>Zip code</label><br></br>
                       <input onChange={handleChange}></input>
                   </div>
                   <div>
                       <label>City</label><br></br>
                       <input onChange={handleChange}></input>
                   </div>
               </div>
               <label>Phone number</label><br></br>
               <input onChange={handleChange}></input><br></br>
               <label>Email</label><br></br>
               <input onChange={handleChange} value={userData && userData.email ? userData.email : "No info" }></input>
               <input type="submit"></input>
           </form>
       </div>
   </div>
    )
}
export default SettingsPage