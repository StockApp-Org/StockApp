import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './LoginPage.css';

let LoginPage = () => {
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
                    <form method="POST" id="loginForm">
                        <Form.Row>
                            <input type="text" name="email" placeholder="E-Mail"></input>
                        </Form.Row>
                        <Form.Row>
                            <input type="password" name="loginPassword" placeholder="Password"></input>
                        </Form.Row>
                        <Form.Row>
                            <input type="submit" value="Login"></input>
                        </Form.Row>
                    </form>
                </Col>
                <Col lg={2}></Col>
                <Col lg={5} id="signUpDiv" className="form-div border top-padding-5">
                    <form method="POST" id="signUpForm">
                        <Form.Row>
                            <input type="text" name="email" placeholder="E-Mail"></input>
                        </Form.Row>
                        <Form.Row>
                            <input type="password" name="signUpPassword" placeholder="Password"></input>
                        </Form.Row>
                        <Form.Row>
                            <input type="password" name="verifyPassword" placeholder="Verify Password"></input>
                        </Form.Row>
                        <Form.Row>
                            <input type="submit" value="Sign Up"></input>
                        </Form.Row>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;