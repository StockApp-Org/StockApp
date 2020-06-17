import React, {Component} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../Styles/LoginPage.css';
import SignUpForm from '../Components/SignUpForm'
import LoginForm from '../Components/LoginForm';

class LoginPage extends Component {
    
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
                            <LoginForm auth={this.props.auth}/>
                        </Col>
                        <Col lg={2}></Col>
                        <Col lg={5} id="signUpDiv" className="form-div border top-padding-5 display-block">
                            <SignUpForm/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <a href="/">Forgot your password? Click here!</a>
                        </Col>
                    </Row>
                </Container>
        </Container>
        );
    }    
}

export default LoginPage;