import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './LoginPage.css';
import HomePage from '../Home/HomePage';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.signIn = this.signIn.bind(this);
    }

    signIn = () =>{
        ReactDOM.render(<HomePage/>, document.getElementById("root"));
    }

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
                    <form onSubmit={this.signIn} id="loginForm">
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
            <Row>
                <Col>
                    <input type="button" onClick={this.signIn}></input>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default LoginPage;