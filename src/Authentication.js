import Config from './Config/config.json'

export default class Authentication {

    SignIn = (formData) => {

        // eslint-disable-next-line no-extend-native
        Date.prototype.addHours = function(h) {
            this.setTime(this.getTime() + (h*60*60*1000));
            return this;
        }

        var req = {
            method: 'POST',
            body: formData
        };

        return new Promise(resolve => {
            fetch(Config.ApiUrl+":"+Config.ApiPort+"/user/SignIn", req)
            .then(response => response.text())
            .then(data => {
                if(data !== "" && data != null) {
                let expiresAt = JSON.stringify(new Date().addHours(6));
                var jsonData = JSON.parse(data);
                localStorage.setItem('current_user', JSON.stringify({
                    userId: jsonData.userId,
                    fullName: jsonData.firstName + ' ' + jsonData.lastName,
                    email: jsonData.email,
                    personNr: jsonData.personNr,
                    orgNr: jsonData.orgNr,
                    imgUrl: jsonData.imgUrl,
                    address: jsonData.userAddress,
                    phone: jsonData.phoneNumber,
                    shares: jsonData.userShares
                    })
                    );
                    localStorage.setItem('expires_at', expiresAt);
                }
                resolve(data);
            });
        });
    };
}