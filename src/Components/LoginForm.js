import React, {Component} from 'react'
import {Form, Col} from 'react-bootstrap'

class LoginForm extends Component {
    
    async signIn(e) {
        e.preventDefault();
        var email= e.target["email"].value
        var password = e.target["loginPassword"].value;

        var formData = new FormData();
        formData.append('Email', email);
        formData.append('Password', password);
        await this.props.auth.SignIn(formData)
        if (JSON.parse(localStorage.getItem('current_user')) != null) {
                window.location = "/homepage";
            }
        }

    render() {
        return(
            <div>
            <form onSubmit={this.signIn.bind(this)} id="loginForm">
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
            </div>
        )
    }
}

export default LoginForm;