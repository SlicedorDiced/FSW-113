// import the convertTemp.js and getDaylight.js scripts with their default export
import backgroundWeather from "./getDayight.js"
import kelvinconverter from "./convertTemp.js"

// declare any variables needed
let cityName = document.querySelector('#city')

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
    document.querySelector('#goBttn').addEventListener('click', weatherCaller)


// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
    function weatherCaller() {
        getWeatherAPI() 
        .then(data => { 
            writerWeatherData(data)
        })
        .catch(function(err){
            console.warn(err)
        })
    }


// use an asynchronous call to fetch the current weather for the specified city, awaits it, 
// and returns the resulting data

   const getWeatherAPI = async() => {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&APPID=37a1776017701bf7ab75dbce929aecb7`)
        return await response.json()

   }
   
// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

function writerWeatherData(data) {
   console.log(data)
    document.querySelector('#tempData').innerHTML = kelvinconverter(data.main.temp, data.sys.country)
    document.querySelector('#humidData').innerHTML = data.main.humidity + "%"
    document.querySelector('#conditionsData').innerHTML = data.weather[0].description

    backgroundWeather(data.sys, data.dt)

}