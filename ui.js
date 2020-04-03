class UI {
    constructor() {
        // UI variables
        this.location = document.getElementById("location");
        this.weatherDesc = document.getElementById("weather-desc");
        this.weatherIcon = document.getElementById("weather-icon");
        this.temperature = document.getElementById("temperature");
        this.humidity = document.getElementById("humidity");
        this.feelsLikeTemperature = document.getElementById("feels-like-temp");
        this.dewPoint = document.getElementById("dew-point");
        this.windSpeed = document.getElementById("wind-speed");

    }
    showResultsLocation(locationInfo) {
        console.log(locationInfo);
        console.log(locationInfo.name);
        this.location.innerHTML = `${locationInfo.name}, ${locationInfo.country}`;
    }

    showWeatherInfo(weatherInfo) {
        this.weatherDesc.innerHTML = `${weatherInfo.WeatherText}`;
        this.temperature.innerHTML = `${weatherInfo.Temperature.Metric.Value} &#8451;`;
        this.humidity.innerHTML = `Humidity: ${weatherInfo.RelativeHumidity}`
        console.log(weatherInfo.RealFeelTemperatureShade);
        this.feelsLikeTemperature.innerHTML = `Real Feel Temperature: ${weatherInfo.RealFeelTemperature.Metric.Value} &#8451`;
        this.dewPoint.innerHTML = `Dew Point: ${weatherInfo.DewPoint.Metric.Value} &#8451;`;
        this.windSpeed.innerHTML = `Wind Speed: ${weatherInfo.Wind.Speed.Metric.Value} kph`;
        this.showIconFromSkycons('PARTLY_CLOUDY_NIGHT'); // just hard coded, accuWeather doesn't provide icon name for skycons
        console.log(weatherInfo);
    }

    // show icon from Skycons
    showIconFromSkycons(icon) { // n.b it's not still set to use, we need darsky api to use it or to hard code
        console.log(icon);
        var skycons = new Skycons({ color: "black" });
        const icon1 = icon.replace(/-/g, '_').toUpperCase();
        skycons.add(document.getElementById("w-icon"), Skycons[icon1]);

        skycons.play();
    }
}

