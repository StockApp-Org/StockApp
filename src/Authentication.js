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
            fetch("https://localhost:5001/user/SignIn", req)
            .then(response => response.json())
            .then(data => {
                if(data != null) {
                let expiresAt = JSON.stringify(new Date().addHours(6));
                localStorage.setItem('current_user', JSON.stringify({
                    userId: data.userId,
                    fullName: data.firstName + ' ' + data.lastName,
                    email: data.email,
                    personNr: data.personNr,
                    orgNr: data.orgNr,
                    imgUrl: data.imgUrl,
                    address: data.userAddress,
                    phone: data.phoneNumber,
                    shares: data.userShares
                    }));
                    localStorage.setItem('expires_at', expiresAt);
                    resolve(data);
                }
            });
        });
    };
}