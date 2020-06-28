import React, {useState} from 'react';
import '../Styles/Message.css';
import {Modal, Button} from 'react-bootstrap';

const Message = (props) => {

    const [showing, setShowing] = useState(props.show);
    const handleClose = () => setShowing(false);

    return (
    <Modal 
                size="sm"
                centered backdrop="static"
                show={showing}
                onHide={handleClose}
                dialogClassName={props.className}
                scrollable={true}
                >
                <Modal.Body>
                <h3>{props.title}</h3>
                <p>{props.message}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button id="modalCloseBtn" variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
    )
}

export default Message;