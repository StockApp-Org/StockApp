import React from 'react'
import {Form, Col} from 'react-bootstrap'

let LoginForm = (props) => {
    
    async function signIn(e) {
        e.preventDefault();
        var email= e.target["email"].value
        var password = e.target["loginPassword"].value;

        var formData = new FormData();
        formData.append('Email', email);
        formData.append('Password', password);
        await props.auth.SignIn(formData)
        if (JSON.parse(localStorage.getItem('current_user')) != null) {
                window.location = "/homepage";
            }
        }

        return(
            <form onSubmit={signIn} id="loginForm">
                <Form.Row>
                    <Col lg={{offset: 3, span: 5}}>
                    <input id="loginEmail" type="text" name="email" placeholder="E-Mail"></input>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col lg={{offset: 3, span: 5}}>
                        <input id="loginPassword" type="password" name="loginPassword" placeholder="Password"></input>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col lg={{offset: 3, span: 5}}>
                        <input type="submit" value="Login"></input>
                    </Col>
                </Form.Row>
            </form>

        )
}

export default LoginForm;