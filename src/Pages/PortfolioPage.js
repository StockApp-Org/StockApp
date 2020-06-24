import React, {useState} from 'react';
import {Container, Table} from 'react-bootstrap'
import StockTableBody from '../Components/StockTableBody'

let PortfolioPage = () => {

    return(
        <Container>
            <Table bordered striped hover variant="dark">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Share Count</th>
                        <th>Worth</th>
                        <th>Industry</th>
                    </tr>
                </thead>
                <StockTableBody/>
            </Table>
        </Container>
        )
}

export default PortfolioPage;