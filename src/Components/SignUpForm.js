import React, {Component} from 'react';
import {Form, Col} from 'react-bootstrap'

class SignUpForm extends Component {
    
    async SignUpSubmit(e) {
        e.preventDefault();
        var email = e.target["email"].value;
        var password = e.target["signUpPassword"].value;
        var firstName = e.target["firstName"].value;
        var lastName = e.target["lastName"].value;

        var formData = new FormData();
        formData.append('Email', email);
        formData.append('Password', password);
        formData.append('FirstName', firstName);
        formData.append('LastName', lastName);

        await this.SignUpDb(formData);

        if (localStorage.getItem('current_user') != null) {
            window.location = '/homepage';
        }
    }

    SignUpDb(FormData) {
        
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
            fetch('https://localhost:5001/user', req)
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

    render() {
        return (
            <div>
                <form onSubmit={this.SignUpSubmit.bind(this)} id="signUpForm">
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
            </div>
        )
    }
}

export default SignUpForm;