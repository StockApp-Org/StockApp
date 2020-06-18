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
            if(!user.address[0]){
                const emptyAddress = {
                    addressRow1: "",
                    zipCode: "",
                    city: ""
                }
                user.address[0] = emptyAddress;
            }
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
    };

    const handleSubmit = (e) => {

        patchInfoUser();
        patchInfoUserAddress();

        e.preventDefault();
    };
    const patchInfoUser = () => {
        var formData = new FormData();
        formData.append("userId", userDataArr[0].userId)
        formData.append("email",  email);
        formData.append("phoneNumber", phoneNumber);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("personNr", personNr);


        var req = {
            method: 'PATCH',
            body: formData
        };

        fetch("https://localhost:5001/user", req)
        .then(response => response.json())
        .then(data => console.log(data, "patch"))
        ;
    }    
    const patchInfoUserAddress = () => {
        var formData = new FormData();
        formData.append("userId", userDataArr[0].userId)
        formData.append("addressRow1", addressState);
        formData.append("city", cityState);
        formData.append("zipCode", zipCodeState);

        var req = {
            method: 'PATCH',
            body: formData
        };

        try{
            fetch("https://localhost:5001/user/address", req)
            .then(response => console.log(response))
            .then(data => console.log(data, "patch address"))
            ;
        } catch(err){
            console.log(err.message);
        }

    }
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
               <input onChange={handleChange} name="phone" value={phoneNumber}></input><br></br>
               <label>Email</label><br></br>
               <input onChange={handleChange} name="email" value={email}></input>
               <input type="submit"></input>
           </form>
       </div>
   </div>
    )
}
export default SettingsPage