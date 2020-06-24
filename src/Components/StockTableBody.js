import React, {useState, useEffect} from 'react';
import Config from '../Config/config.json'

let StockTableBody = () => {

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
    }, [])

    return(
        <tbody>
        {
            shareData.map(row => (
                <tr>
                    <td>{row.companyName}</td>
                    <td>{row.shareCount}</td>
                    <td>{row.netWorth + ".00"}</td>
                    <td>{row.industryName}</td>
                </tr>
            ))   
        }
        </tbody>
    )
}

export default StockTableBody;