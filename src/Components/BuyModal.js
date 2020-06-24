import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

let BuyModal = ({showModal}) => {
    const [show, setShow] = useState(showModal);
    const handleClose = () => setShow(false);

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <h4>This is a header</h4>
            </Modal.Header>
            <Modal.Body>
                <p>This is a body</p>
            </Modal.Body>
            <Modal.Foote>
                <p>This is a footer</p>
            </Modal.Foote>
        </Modal>
    )
}

export default BuyModal;