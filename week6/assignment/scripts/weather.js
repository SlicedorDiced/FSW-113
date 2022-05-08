// import the convertTemp.js and getDaylight.js scripts with their default export

// declare any variables needed
let cityLocation, temp, humidity, conditions, dayLight;

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
    document.querySelector('#goBttn').addEventListener('click', weatherCaller)



// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
    function weatherCaller() {
        getWeatherAPI() 
        .then(function(data){
            writerWeatherData(data)
        })
        .catch(function(err){
            console.warn(err)
        })
    }


// use an asynchronous call to fetch the current weather for the specified city, awaits it, 
// and returns the resulting data

   const getWeatherAPI = async() => {
       const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=37a1776017701bf7ab75dbce929aecb7`)
        data = await response.json()
        return data   // do something wit the response data go look at star wars api assignment
   }

   
// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

const backgroundWeather = () => {

}
