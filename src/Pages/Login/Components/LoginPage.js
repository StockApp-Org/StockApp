import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../Styles/LoginPage.css';
import HomePage from '../../Home/Components/HomePage';
import Person from '../../../Objects/Person';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.signIn = this.signIn.bind(this);
    }

    signIn = () =>{
        ReactDOM.render(<HomePage Person={new Person("Daniel", 26, '../../../Objects/default-user.png')}/>, document.getElementById("root"));
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
        );
    }
}

export default LoginPage;