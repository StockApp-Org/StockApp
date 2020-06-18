import React, { useEffect, useState } from 'react'
import SettingsNav from '../Components/SettingsNav'
import defaultProfile from '../Images/profileDefault.png'
import '../Styles/SettingsPage.css'

const SettingsPage = () => {

    const [userDataArr, setUserDataArr] = useState([JSON.parse(localStorage.getItem('current_user'))]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [addressState, setAddress] = useState([""]);   
    const [personNr, setPersonNr] = useState("");
    const [zipCodeState, setZipCode] = useState("");
    const [cityState, setCity] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    
    useEffect(() => {
            const user = userDataArr[0];
            const {addressRow1, zipCode, city} = user.address[0];
            const full = user.fullName.split(' ');
            setZipCode(zipCode);
            setAddress(addressRow1);
            setCity(city);
            setEmail(user.email);
            setPhoneNumber(user.phone);
            setPersonNr(user.personNr);
            setFirstName(full[0]);
            setLastName(full[1]);
            console.log(user.address);
        },[userDataArr]);
        
        const handleChange = (e) => {
            const u = userDataArr[0];
            if (e.target.name === "addressRow1" || e.target.name === "city" || e.target.name === "zipCode"){
                u.address[0][e.target.name] = e.target.value
            } else if (e.target.name === "firstName") {
                u["fullName"] = `${e.target.value} ${lastName}`;
            } else if (e.target.name === "lastName"){
                u["fullName"] = `${firstName} ${e.target.value}`;
            }
            else {
                u[e.target.name] = e.target.value;
            }
            setUserDataArr([u]);
            console.log(u);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
    <div className="settingsPageAll">
    <h3>Settings</h3>
       <div className="settingsContent">
       <SettingsNav />
           <img src={defaultProfile} style={{height: 90, width: 90}} alt="profilePicture"></img>
           <form onSubmit={handleSubmit}>
               <div className="settingsRow">
                   <div>
                       <label>First Name</label><br></br>
                       <input onChange={handleChange} name="firstName" value={firstName}></input>
                   </div>
                   <div>
                       <label>Last name</label><br></br>
                       <input onChange={handleChange} name="lastName" value={lastName}></input>
                   </div>
               </div>
               <label>Person number</label><br></br>
               <input onChange={handleChange} name="personNr" value={personNr}></input><br></br>
               <label>Address</label><br></br>
               <input onChange={handleChange} value={addressState} name="addressRow1"></input><br></br>
               <div className="settingsRow">
                   <div>
                       <label>Zip code</label><br></br> 
                       <input onChange={handleChange} name="zipCode" value={zipCodeState}></input>
                   </div>
                   <div>
                       <label>City</label><br></br>
                       <input onChange={handleChange} name="city" value={cityState}></input>
                   </div>
               </div>
               <label>Phone number</label><br></br>
               <input onChange={handleChange} name="phoneNumber" value={phoneNumber}></input><br></br>
               <label>Email</label><br></br>
               <input onChange={handleChange} value={email}></input>
               <input type="submit"></input>
           </form>
       </div>
   </div>
    )
}
export default SettingsPage