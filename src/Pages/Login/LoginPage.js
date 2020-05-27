import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './LoginPage.css';

let LoginPage = () => {
    return (
        <Row>
            <Col id="loginDiv" className="formDiv" lg={{offset: 1, span: 4}} md={{offset: 1, span: 4}} sm={{offset: 1, span: 10}} xs={{offset: 1, span: 10}}>
                <form>
                    <Row>
                        <Col lg={{offset: 2, span: 8}} sm={{offset: 1, span: 6}}>
                            <span><input type="text" name="email" id="email"></input></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{offset: 2, span: 9}} sm={{offset: 1, span: 6}}>
                            <input type="password" name="password" id="password"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{offset: 2}} sm={{offset: 1}}>
                            <input type="submit" value="Sign In"></input>
                        </Col>
                    </Row>
                </form>
            </Col>
            <Col id="signupDiv" className="formDiv" lg={{offset: 1, span: 4}} md={{offset: 1, span: 4}} sm={12} xs={12}>
                <form>
                    <Row>
                    <Col lg={3} md={3} sm={3}>
                        <label for="email">E-Mail</label>
                    </Col>
                    <Col lg={9} md={9} sm={9}>
                        <input type="text" name="email" id="email"></input>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={3} md={3} sm={3}>
                        <label for="password">Password</label>
                    </Col>
                    <Col lg={9} md={9} sm={9}>
                        <input type="password" name="password" id="password"></input>
                    </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    );
}

export default LoginPage;