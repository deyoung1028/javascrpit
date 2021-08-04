const cityName = document.getElementById("cityName")
const GET_WEATHER_URL = (`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=7854a55d120c660937735dcc91b9ec67&units=imperial`)
const getWeatherbtn = document.getElementById("getWeatherbtn")
const weatherInfoDiv = document.getElementById("weatherInfoDiv")


function getWeather() {
    console.log(cityName.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=7854a55d120c660937735dcc91b9ec67&units=imperial`)
            .then((response) => {
            return response.json()
        }).then((result) => {
            console.log(result)
       displayWeather(result)
        })   
}

 getWeatherbtn.addEventListener("click", function (){
    getWeather()
 })

 function displayWeather(result){

       const weather = `
    <h1> City:${result.name}
     <li> Temp Min:${result.main.temp_min}</li>
     <li> Temp Max:${result.main.temp_max}</li>
     <li> Pressure:${result.main.pressure}</li>
     <li> Humidity:${result.main.humidity}</li>
     <li> Feels Like:${result.main.feels_like}</li>

     `
     console.log(weather)
     weatherInfoDiv.innerHTML = weather
 }



 








