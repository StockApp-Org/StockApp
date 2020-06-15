import React, {Component} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../Styles/LoginPage.css';
import { Link } from 'react-router-dom'

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signedIn: 0
        }
    }
    
    signIn(e) {
        e.preventDefault();
        var email= e.target["email"].value
        var password = e.target["loginPassword"].value;

        var formData = new FormData();
        formData.append('Email', email);
        formData.append('Password', password);

        var req = {
            method: 'POST',
            //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        };

        fetch("https://localhost:5001/user/SignIn", req)
        .then(response => response.json())
        .then(data => {
            if (data !== 0) {
                this.setState({signedIn: data});
                this.props.history.push({
                    pathname: '/homepage',
                    userId: data
                }
                );
            }
            else {
                
            }
        });
    }

    render() {
    return (
        <Container className="loginPageContainer">
                <Container>
                    <Row>
                        <Col lg={5} className="header" id="loginHeader">
                            <h1>User Login</h1>
                        </Col>
                        <Col lg={2}></Col>
                        <Col lg={5} className="header" id="signUpHeader">
                            <h1>Sign Up</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} id = "loginDiv" className="form-div border top-padding-5">
                            <form onSubmit={this.signIn.bind(this)} id="loginForm">
                            <Link to="/homepage"> Home page</Link>
                                <Form.Row>
                                    <Col lg={{offset: 3, span: 5}}>
                                    <input type="text" name="email" placeholder="E-Mail"></input>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col lg={{offset: 3, span: 5}}>
                                        <input type="password" name="loginPassword" placeholder="Password"></input>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col lg={{offset: 3, span: 5}}>
                                        <input type="submit" value="Login"></input>
                                    </Col>
                                </Form.Row>
                            </form>
                            <a href="/">Forgot your password? Click here!</a>
                        </Col>
                        <Col lg={2}></Col>
                        <Col lg={5} id="signUpDiv" className="form-div border top-padding-5 display-block">
                            <form method="POST" id="signUpForm">
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
                        </Col>
                    </Row>
                </Container>
        </Container>
        );
    }    
}

export default LoginPage;