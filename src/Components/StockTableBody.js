/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import Config from '../Config/config.json'

let StockTableBody = ({closed}) => {

    const GetUserShareData = (userId) => {
        return new Promise(resolve => {
            fetch(ApiUrlWithPort+'/Data/User/'+userId)
            .then(response => response.json())
            .then(data => {
                if (data!= null) {
                    setShareData(data);
                    resolve(data)
                }
            })
        })
    }

    const ApiUrlWithPort = Config.ApiUrl + ':' + Config.ApiPort;
    const UserId = JSON.parse(localStorage.getItem('current_user'))["userId"];
    const [shareData, setShareData] = useState([]);

    useEffect(() => {
        GetUserShareData(UserId);
    }, [closed])

    return(
        <tbody>
        {
            shareData.map(row => (
                <tr>
                    <td>{row.companyName}</td>
                    <td>{row.shareCount}</td>
                    <td>{row.netWorth}</td>
                    <td>{row.industryName}</td>
                    <td>{row.sharePercent + " %"}</td>
                </tr>
            ))   
        }
        </tbody>
    )
}

export default StockTableBody;