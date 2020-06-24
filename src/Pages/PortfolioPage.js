import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Table, Button, Modal} from 'react-bootstrap'
import StockTableBody from '../Components/StockTableBody'
import BuyModal from '../Components/BuyModal';
import '../Styles/PortfolioPage.css';

let PortfolioPage = () => {

    const [isModalShowing, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        console.log(isModalShowing)
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
            <Modal show={isModalShowing} onHide={handleClose}>
                <Modal.Title>
                    <h4>This is a header</h4>
                </Modal.Title>
                <Modal.Body>
                    <p>This is a body</p>
                </Modal.Body>
                <Modal.Footer>
                    <p>This is a footer</p>
                </Modal.Footer>
            </Modal>
        </Container>
        )
}

export default PortfolioPage;