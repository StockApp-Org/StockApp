import React from 'react';
import {Container, Table} from 'react-bootstrap'
import StockTableBody from '../Components/StockTableBody'
import '../Styles/PortfolioPage.css';

let PortfolioPage = () => {

    return(
        <Container id="portfoliotable">
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
        </Container>
        )
}

export default PortfolioPage;