import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Table, Button, Modal} from 'react-bootstrap'
import StockTableBody from '../Components/StockTableBody'
import ModalTable from '../Components/ModalTable';
import '../Styles/PortfolioPage.css';

let PortfolioPage = () => {

    const [isModalShowing, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
    }, [isModalShowing])

    return(
        <Container id="portfoliotable">
            <Row id="tableRow">
                <Table id="currentShareTable" striped hover variant="dark">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Share Count</th>
                            <th>Worth</th>
                            <th>Industry</th>
                            <th>Ownership %</th>
                        </tr>
                    </thead>
                    <StockTableBody closed={isModalShowing}/>
                </Table>
            </Row>
            <Row id="buttonRow">
                <Col lg={4}>
                    <Button variant="secondary" onClick={handleShow}>Buy More!</Button>
                </Col>
            </Row>
            <Modal
                size="xl"
                centered backdrop="static"
                show={isModalShowing}
                onHide={handleClose}
                dialogClassName="shareModal"
                scrollable={true}
                >
                <Modal.Body>
                    <ModalTable/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
        )
}

export default PortfolioPage;