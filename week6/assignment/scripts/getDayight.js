// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.
export default function backgroundWeather (daylight, time) { 

        // let ourTime = Date.now()

        // console.log(ourTime)

        if (daylight.sunrise < time && daylight.sunset > time ) {

            document.getElementsByClassName("weatherWrapper")[0].style.backgroundColor = "blue"

        } else if (daylight.sunrise > ourTime && daylight.sunset < time ) {

            document.getElementsByClassName("weatherWrapper")[0].style.backgroundColor = "black"
        }
    }