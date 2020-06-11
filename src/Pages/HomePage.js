import React, {useState} from 'react';
import {Container, Row, Col, Toast, Button} from 'react-bootstrap';
import Menu from '../Components/Menu';
import '../Styles/HomePage.css';
import img from '../Data/ProfilePics/DSC_0066.JPG';
import Person from '../Objects/Person';

let HomePage = (props) => {

    const p = props.Person;
    // const {Name, Age, ImgUrl} = p;
    const [showToast, setShowToast] = useState(true);
    const toggleToast = () => setShowToast(!showToast);
    // Dummy Person Object for testing
    p.setId("19931211-5299");

    console.log(p);

    return (
    <Container id="mainHomeContainer">
        <h1>Home Page</h1>
        <Row id="MainRow">
            <Col lg={2}>
            </Col>
            <Col id="mainContentColumn" lg={10}>
                <Container id="toastContainer">
                    <Row>
                        <Col lg={3} md={5} sm={12}>
                            <Toast show={showToast} onClose={toggleToast}>
                                <Toast.Header>
                                    <h5>Hello</h5>
                                </Toast.Header>
                            </Toast>
                        </Col>
                    </Row>
                </Container>
                <Row id="mainContentRow">
                    <Col lg={6} md={8}>
                        <Container id="MyInfoContainer">
                            <Row id="headerRow">
                                <Col lg={4}>
                                    <h4>Min Profil</h4>
                                </Col>
                                <Col lg={{offset: 4, span: 4}}>
                                    <Button variant="secondary">Redigera</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <img id="profileImg" src={p.ImgUrl.img} alt=""></img>
                                </Col>
                                <Col lg={8}>
                                    <Row>
                                        <Col>
                                            <h3>{p.Name}</h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Person Nr/Organisationas Nr:</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>{p.Id}</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={6} md={8}>
                            <Container id="portfolioOverviewSection">
                                <Row>
                                    <Col lg={5}>
                                        <h4>Min Portfölj</h4>
                                    </Col>
                                    <Col lg={{offset: 3, span: 4}}>
                                        <Button variant="secondary">Detaljerad Översikt</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    )
};

export default HomePage;