/* eslint-disable no-useless-escape */
import React, {useState} from 'react';
import {Form, Col, Modal, Button} from 'react-bootstrap'
import Config from '../Config/config.json';

let SignUpForm = () => {
    
    const [signUpData, setSignUpData] = useState(null);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [showModal, setShow] = useState(false)

    const checkInput = () => {

        if (emailValid && passwordValid) {
            return true
         } else {
             return false;
         }
    }

    const validateEmail = (input) => {
        var el = document.getElementById("signUpEmail");
        console.log(el);
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(input).toLowerCase())) {
            setEmailValid(true)
            el.classList.toggle("not-failed")
        }
        else {
            setEmailValid(false)
            el.classList.toggle("failed")
        }
    }

    const validatePassword = (ogPassword ,confirmPassword) => {
        
        var els = Array.from(document.getElementsByClassName("signUpPassword"));

        if(ogPassword === confirmPassword) {
            setPasswordValid(true);
            els.map(el => (
                el.classList.toggle("not-failed")
            ))
        }
        else {
            setPasswordValid(false);
            els.map(el => (
                el.classList.toggle("failed")
            ))
        }
    }
    

    const handleShow = (e) => {
        e.preventDefault();
        
        setSignUpData({
            "email": e.target["email"].value,
            "password": e.target["signUpPassword"].value,
            "confirmPassword": e.target["verifyPassword"].value,
            "firstName": e.target["firstName"].value,
            "lastName": e.target["lastName"].value
        });

        if(checkInput()) {
            setShow(true);
        }
        else {
            document.getElementById("signUpForm").classList.add("shake-animation");
            setTimeout(() => {
                document.getElementById("signUpForm").classList.remove("shake-animation");
            }, 1000);
        }

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
                            <input type="text" id="signUpEmail" onBlur={validateEmail} name="email" placeholder="E-Mail"></input>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={{offset: 3, span: 5}}>
                            <input type="password" className="signUpPassword" name="signUpPassword" placeholder="Password"></input>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={{offset: 3, span: 5}}>
                            <input type="password" className="signUpPassword" onBlur={validatePassword} name="verifyPassword" placeholder="Verify Password"></input>
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