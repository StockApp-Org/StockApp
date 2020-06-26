import React, {useState} from 'react';
import {Form, Col, Modal, Button} from 'react-bootstrap'
import Config from '../Config/config.json';

let SignUpForm = () => {
    
    const [signUpData, setSignUpData] = useState(null);
    const [showModal, setShow] = useState(false)
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
        setSignUpData({
            "email": e.target["email"].value,
            "password": e.target["signUpPassword"].value,
            "firstName": e.target["firstName"].value,
            "lastName": e.target["lastName"].value
        })
    }
    const handleClose = () => {
        setShow(false)
        SignUpSubmit(signUpData)
    }

    const handleDeny = () => {
        setShow(false)
        setSignUpData(null);
        var formEls = document.querySelectorAll("#signUpForm input");
        var elementArr = Array.from(formEls);
        elementArr.map(el => (
            el.value = ""
        ));
    }

    async function SignUpSubmit() {

        var formData = new FormData();
        formData.append('Email', signUpData.email);
        formData.append('Password', signUpData.password);
        formData.append('FirstName', signUpData.firstName);
        formData.append('LastName', signUpData.lastName);

        await SignUpDb(formData);

        if (localStorage.getItem('current_user') != null) {
            window.location = '/homepage';
        }
    }

    function SignUpDb(FormData) {
        
        // eslint-disable-next-line no-extend-native
        Date.prototype.addHours = function(h) {
            this.setTime(this.getTime() + (h*60*60*1000));
            return this;
        }

        var req = {
            method: 'POST',
            body: FormData
        };

        return new Promise(resolve => {
            fetch(Config.ApiUrl+':'+Config.ApiPort+'/user', req)
            .then(response => response.json())
            .then(data => {
                if(data != null) {
                    let expiresAt = JSON.stringify(new Date().addHours(6));
                localStorage.setItem('current_user', JSON.stringify({
                    userId: data.userId,
                    fullName: data.firstName + ' ' + data.lastName,
                    email: data.email,
                    personNr: data.personNr,
                    orgNr: data.orgNr,
                    imgUrl: data.imgUrl,
                    address: data.userAddress,
                    phone: data.phoneNumber,
                    shares: data.userShares
                    }));
                    localStorage.setItem('expires_at', expiresAt);
                    resolve(data);
                };
            });
        });
    };

        return (
                <React.Fragment>
                <form onSubmit={handleShow} id="signUpForm">
                    <Form.Row>
                        <Col lg={{offset: 3, span: 5}}>
                            <input type="text" name="firstName" placeholder="First Name"></input>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={{offset: 3, span: 5}}>
                            <input type="text" name="lastName" placeholder="Last Name"></input>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={{offset: 3, span: 5}}>
                            <input type="text" name="email" placeholder="E-Mail"></input>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={{offset: 3, span: 5}}>
                            <input type="password" name="signUpPassword" placeholder="Password"></input>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={{offset: 3, span: 5}}>
                            <input type="password" name="verifyPassword" placeholder="Verify Password"></input>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={{offset: 3, span: 5}}>
                            <input type="submit" value="Sign Up"></input>
                        </Col>
                    </Form.Row>
                </form>
                <Modal id="gdprModal" show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Body>
                        <h3>GDPR Consent</h3>
                        <p>
                            In accordance with European Data Protection Laws, we are required to inform you that by
                            signing up for this website, you are providing us with consent to store personal information
                            about you, such as First Name, Last Name, address of residence, phone number, e-mail address and
                            other various data.
                        </p>
                        <p>
                            You can always request a full file on the data we store in relation to your account by going to
                            the Settings page and accessing the GDPR section.
                            There you will also find an option to completely remove all of your data from the database.
                            However, this will then not allow you to use our service any further.
                        </p>
                        <p>
                            Please use the below buttons to confirm or deny your consent to the above.
                            Thank you.
                        </p>
                        <Button variant="success" onClick={handleClose}>Confirm</Button>
                        <Button variant="danger" onClick={handleDeny}>Deny</Button>
                    </Modal.Body>
                </Modal>
                </React.Fragment>
        )
}

export default SignUpForm;