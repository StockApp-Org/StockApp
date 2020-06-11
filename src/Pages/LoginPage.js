import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../Styles/LoginPage.css';
import { Link } from 'react-router-dom'
import { Component } from 'react';

class LoginPage extends Component {

    render() {
    return (
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
                    <form onSubmit={<Link to="/homepage">Log in</Link>} id="loginForm">
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
                    <form onSubmit={console.log("Sign Up")} id="signUpForm">
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
        );
    }
}

export default LoginPage;