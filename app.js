// get instance of AccuWeather class
const accuWeather = new AccuWeather();
// get instance of UI
const ui = new UI();

window.onload = responsive;

window.onresize = responsive;
function responsive() {
    if(window.innerWidth <= 600) ui.responseToMobileViewPort();
    else ui.undoResponseToMobileViewPort();
}

document.getElementById("city-name").addEventListener('keyup', getCityName);


function getCityName(e) {
    if (e.keyCode === 13) {
        console.log(e.target.value);
        accuWeather.getCityInfo(e.target.value)
            .then(resp => {
                console.log(resp);
                ui.showResultsLocation(resp);
                accuWeather.changeLocationId(resp.key);
                getCurrentCondition(resp);
            })
            .catch(err => alert(err));
    }
}

function getCurrentCondition(cityInfo) {
    accuWeather.getCurrentWeather()
        .then(resp => {
            console.log(resp);
            ui.showWeatherInfo(resp[0]);
        });
}
