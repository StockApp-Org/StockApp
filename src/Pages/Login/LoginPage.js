import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './LoginPage.css';

let LoginPage = () => {
    return (
        <Container fluid id="formDiv">
            <Row>
                <Col lg={{offset: 3, span: 6}} md={{offset: 2, span: 8}} sm={12} xs={12}>
                    <Form>
                        <Form.Group>
                            <Form.Control name="email" type="email" placeholder="E-Mail"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="password" type="password" placeholder="Password"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <input type="submit" value="Login"></input>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;