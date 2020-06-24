import React, {useState, useEffect} from 'react';
import {Modal} from 'react-bootstrap';

let BuyModal = ({showModal}) => {
    const [show, setShow] = useState(showModal);
    const handleClose = () => setShow(false);

    useEffect(() => {
        console.log(showModal);
    }, [showModal])

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Title>
                <h4>This is a header</h4>
            </Modal.Title>
            <Modal.Body>
                <p>This is a body</p>
            </Modal.Body>
            <Modal.Footer>
                <p>This is a footer</p>
            </Modal.Footer>
        </Modal>
    )
}

export default BuyModal;