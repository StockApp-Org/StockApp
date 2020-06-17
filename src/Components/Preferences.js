import React from 'react';

const Preferences = (props) => {
    console.log(localStorage.getItem('current_user'))



const sectors = props.preferences.map(item => <li key={item}><label><input type="checkbox"></input>{item}</label></li>);


    return(
            <ul>
                {sectors}
            </ul>
    );
}

export default Preferences;