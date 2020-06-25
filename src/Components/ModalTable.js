/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Container, Table, Button} from 'react-bootstrap';
import Config from '../Config/config.json';

let ModalTable = () => {

    const ApiUrlWithPort = Config.ApiUrl + ':' + Config.ApiPort;
    const userId = JSON.parse(localStorage.getItem('current_user')).userId;
    const [shareData, setShareData] = useState([]);
    const [buyCount, updateCount] = useState(0);

    const GetShareData = () => {

        return new Promise(resolve => {
            fetch(ApiUrlWithPort + '/Data/Shares')
            .then(response => response.json())
            .then(data => {
                setShareData(data)
                resolve(data)
            })
        })
    }

    useEffect(() => {
        GetShareData();
    }, [buyCount])

    const PurchaseShare = (shareId, amount) => {
        
        var req = {
            method: "PUT"
        }

        document.getElementById("shareAmountInput_" + shareId).value = "";

        return new Promise(resolve => {
            fetch(ApiUrlWithPort + '/Data/Buy?userId=' + userId + "&shareId=" + shareId + "&amount=" + amount, req)
            .then(response => response.json())
            .then(data => {
                updateCount(buyCount + 1);
                resolve(data)
            })
        })
    }

    return(
        <Container>
            <Table id="buyTable" striped hover variant="dark">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Industry</th>
                        <th>Share Price</th>
                        <th>Shares Available</th>
                    </tr>
                </thead>
                <tbody>
                {
                    shareData.map(row => (
                        <tr>
                            <td>{row.companyName}</td>
                            <td>{row.industryName}</td>
                            <td>{row.sharePrice}</td>
                            <td>{row.availableShares}</td>
                            <td>
                                <input type="number" id={"shareAmountInput_" + row.shareId}/>
                                <Button variant="secondary" onClick={() => PurchaseShare(row.shareId, document.getElementById("shareAmountInput_" + row.shareId).value)}>Buy</Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </Container>
    )
}

export default ModalTable;