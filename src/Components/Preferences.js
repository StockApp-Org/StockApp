import React from 'react';

const Preferences = (props) => {



const sectors = props.preferences.map(item => <li key={item}><label><input type="checkbox"></input>{item}</label></li>);


    return(
            <ul>
                {sectors}
            </ul>
    );
}

export default Preferences;