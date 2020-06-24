import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Table, Button} from 'react-bootstrap'
import StockTableBody from '../Components/StockTableBody'
import BuyModal from '../Components/BuyModal';
import '../Styles/PortfolioPage.css';

let PortfolioPage = () => {

    const [isModalShowing, setShow] = useState(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

    }, [isModalShowing])

    return(
        <Container id="portfoliotable">
            <Row id="tableRow">
                <Table bordered striped hover variant="dark">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Share Count</th>
                            <th>Worth</th>
                            <th>Industry</th>
                            <th>Ownership %</th>
                        </tr>
                    </thead>
                    <StockTableBody/>
                </Table>
            </Row>
            <Row id="buttonRow">
                <Col lg={4}>
                    <Button variant="secondary" onClick={handleShow}>Buy More!</Button>
                </Col>
            </Row>
            <BuyModal showModal={isModalShowing}/>
        </Container>
        )
}

export default PortfolioPage;