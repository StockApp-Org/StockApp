/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import {Container, Row, Col, Toast, Button} from 'react-bootstrap';
import '../Styles/HomePage.css';
import  { Pie, Cell, PieChart, Label, ResponsiveContainer } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import defaultProfile from '../Images/profileDefault.png'

let HomePage = (props) => {

    const colors = scaleOrdinal(schemeCategory10).range();
    const user = JSON.parse(localStorage.getItem('current_user'));
    const [showToast, setShowToast] = useState(true);
    const toggleToast = () => setShowToast(!showToast);
    const [pieData, setPieData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        GetUserShareData(user.userId);
    }, []);

    const GetUserShareData = (userId) => {
        return new Promise(resolve => {
            fetch("https://localhost:5001/Data/User/"+userId)
            .then(response => response.json())
            .then(data => {
                setData(data);
                var pieData = data.map(e => ({ name: e.companyName, value: e.shareCount}));
                setPieData(pieData);
                });
            resolve(1);
            }
        )
    }

    const renderLabelContent = (props) => {
        const { value, name, x, y, midAngle } = props;
        return (
          
          <g transform={`translate(${x}, ${y})`} textAnchor={ (midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
            <text fill="#ffebcd" x={0} y={0}>{`${name}: ${value}`}</text> 
          </g>
        );
    }

    return (
        <Container fluid className="allPageContent">
        <Row id="MainRow">
            <Col id="mainContentColumn">
                    <Row>
                        <Col lg={3} md={5} sm={12}>
                            <Toast show={showToast} onClose={toggleToast} delay={3000} autohide>
                                <Toast.Header>
                                    <h5>Hello {user.fullName}</h5>
                                </Toast.Header>
                            </Toast>
                        </Col>
                    </Row>
                <Row id="mainContentRow">
                    <Col lg={6} md={8}>
                        <Container id="MyInfoContainer">
                            <Row id="headerRow">
                                <Col lg={4}>
                                    <h4>My Profile</h4>
                                </Col>
                                <Col lg={{offset: 6, span: 2}}>
                                    <Button variant="secondary">
                                        <NavLink exact={true} to="/settings">Edit</NavLink>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <img src={user.imgUrl == null ? defaultProfile : user.imgUrl} id="profileImg" alt=""></img>
                                </Col>
                                <Col lg={8}>
                                    <Row>
                                        <Col>
                                            <h3>{user.fullName}</h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Person Nr/Organisationas Nr:</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>{user.personNr}/{user.orgNr}</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Container fluid>
                                    <Row>
                                        <h3>Contact Details</h3>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Email Address:</p>
                                        </Col>
                                        <Col>
                                            <p>{user.email}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Telephone:</p>
                                        </Col>
                                        <Col>
                                            <p>{user.phone}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Address:</p>
                                        </Col>
                                        <Col>
                                            <p>{user.address[0] && user.address[0].addressRow1}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Zip Code:</p>
                                        </Col>
                                        <Col>
                                            <p>{user.address[0] && user.address[0].zipCode}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>City:</p>
                                        </Col>
                                        <Col>
                                            <p>{user.address[0] && user.address[0].city}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={6} md={8}>
                            <Container id="portfolioOverviewSection">
                                <Row>
                                    <Col lg={5}>
                                        <h4>My Portfolio</h4>
                                    </Col>
                                    <Col lg={{offset: 5, span: 2}}>
                                        <Button variant="secondary">Details</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} className="pieChart">
                                    <ResponsiveContainer>
                                    <PieChart width={600} height={400}>
                                        <Pie
                                        data={pieData}
                                        dataKey="value"
                                        cx={400}
                                        cy={175}
                                        startAngle={180}
                                        endAngle={-180}
                                        innerRadius={60}
                                        outerRadius={100}
                                        label={renderLabelContent}
                                        labelLine={false}
                                        isAnimationActive={true}
                                        >
                                        {
                                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((entry, index) => (
                                            <Cell key={index} fill={colors[index % 10]}/>
                                            ))
                                        }
                                        <Label value="Your Stock" position="center"/>
                                        </Pie>
                                    </PieChart>
                                    </ResponsiveContainer>
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
