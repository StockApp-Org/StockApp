import React from 'react';

const Preferences = (props) => {



const sectors = props.preferences.map(item => <li key={item.industryId}><label><input type="checkbox"></input>{item.name}</label></li>);


    return(
            <ul>
                {sectors}
            </ul>
    );
}

export default Preferences;