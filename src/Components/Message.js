import React from 'react';
import '../Styles/Message.css';

const Message = (props) => {
    return(
        <div className={props.className + " message"}>
            <h3>{props.title}</h3>
            <p>{props.message}</p>
        </div>
    );
}

export default Message;