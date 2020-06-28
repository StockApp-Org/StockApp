import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/LoginPage.css';
import SignUpForm from '../Components/SignUpForm'
import LoginForm from '../Components/LoginForm';

let LoginPage = (props) => {
    
    return (
        <Container className="loginPageContainer">
            <Row>
                <Col lg={5} id="loginDiv" className="form-div top-padding-5">
                    <Row>
                        <Col lg={{offset: 2, span: 6}}>
                            <h1>User Login</h1>
                        </Col>
                    </Row>
                    <Row>
                        <LoginForm auth={props.auth}/>
                    </Row>
                    <Row>
                        <a href="/">Forgot your password? Click here!</a>
                    </Row>
                </Col>
                <Col lg={2}>
                </Col>
                <Col lg={5} id="signUpDiv" className="form-div top-padding-5">
                    <Row>
                        <Col lg={{offset: 2, span: 5}}>
                            <h1>Sign Up</h1>
                        </Col>
                    </Row>
                    <Row>
                        <SignUpForm/>
                    </Row>
                </Col>
            </Row>
        </Container>
        );
}    

export default LoginPage;