// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.
export default function kelvinconverter(temp, country) {
    if(country == "US") {
        return Math.round(1.8*(temp - 273) + 32) + " F°"

        } else 
        return Math.round(temp - 273.15) + " C°"
    };


// Kelvin to Celsius:   C =  K - 273 (K - 273.15 if you want to be more precise)
// Kelvin to Fahrenheit: F = 1.8(K - 273) + 32