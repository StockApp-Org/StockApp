import React, {useState} from 'react';
import {Container, Row, Col, Toast} from 'react-bootstrap';
import Menu from '../../Menu/Components/Menu';
import '../Styles/HomePage.css';

let HomePage = (props) => {

    const p = props.Person;
    const {Name, Age, ImgUrl} = p;
    console.log({ImgUrl});
    const [showToast, setShowToast] = useState(true);
    const toggleToast = () => setShowToast(!showToast);

    return (
    <Container>
        <h1>Home Page</h1>
        <Row>
            <Col lg={2}>
                <Menu />
            </Col>
            <Col lg={10}>
                <Container>
                    <Row>
                        <Col lg={3} md={5} sm={12}>
                            <Toast show={showToast} onClose={toggleToast}>
                                <Toast.Header>
                                    <h5>Hello {Name}</h5>
                                </Toast.Header>
                            </Toast>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
    )
};

export default HomePage;