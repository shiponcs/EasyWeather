class AccuWeather {
    constructor() {
        this.apiKey = "cHki3yKS9uMRaFPIHKhYGRX3aCekwPrJ";
        this.locationId = "27822";
    }

    changeLocationId(nId) {
        this.locationId = nId;
    }

    getCityInfo(city) {
        let cityInformation = new Object();
        return new Promise((resolve, reject) => {
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${city}&language=en-us&details=true`)
                .then(resp => resp.json())
                .then(resp => {
                    console.log(resp);
                    cityInformation.key = resp[0].Key;
                    cityInformation.name = resp[0].EnglishName;
                    cityInformation.country = resp[0].Country.EnglishName;
                    resolve(cityInformation);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }
    getCurrentWeather() {
        const currentCondition = `http://dataservice.accuweather.com/currentconditions/v1/${this.locationId}?apikey=${this.apiKey}&language=en-us&details=true`

        return new Promise((resolve, reject) => {
            fetch(currentCondition)
                .then(resp => {
                    return resp.json();
                })
                .then(resp => {
                    resolve(resp);
                })
                .catch(err => reject(resp));
        });

    }
}