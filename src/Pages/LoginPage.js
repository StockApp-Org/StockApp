import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../Styles/LoginPage.css';
import HomePage from './HomePage';
import MyPage from './MyPage'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from '../App';


let LoginPage = () => {

    
    const signIn = () =>{
        ReactDOM.render(
            <Router>
            <Switch>
                <Route path="/Home" exact component={HomePage}/>
                <Route path="/Portfolio" exact component={MyPage} />
                <Route path="/MyPage" exact component={MyPage} />
                <Route path="/Settings" exact component={MyPage} />
            </Switch>
            <App newPage={<HomePage/>}/>
            </Router>,
            document.getElementById('root')
        );
    }

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
                    <form onSubmit={signIn} id="loginForm">
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
                    <form onSubmit={signIn} id="signUpForm">
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

export default LoginPage;