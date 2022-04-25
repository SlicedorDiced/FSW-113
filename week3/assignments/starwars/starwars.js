// declare any necessary variables
let dataLabel1 = document.querySelector('#dataLabel1');
let dataValue1 = document.querySelector('#dataValue1');

let dataLabel2 = document.querySelector('#dataLabel2');
let dataValue2 = document.querySelector('#dataValue2');

const queryType = document.querySelector('#queryType');
const itemID = document.querySelector('#itemID');
// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function fetchData() {

    getFromSWAPI()
       
}

function getFromSWAPI() {
    // assign values to any necessary variables 
    fetch(`https://swapi.dev/api/${queryType.value}/${itemID.value}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}


// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.



updateInfo = responseJSON => { // this responseJSON is all the DATA being requested from the API endpoints
console.log(responseJSON);
// console.log(responseJSON.climate);
  
// let keys = Object.keys(responseJSON) 
// console.log(dataLabel1); 
// console.log(dataValue1);
//console.log(keys)
console.log(queryType.value)
    if (queryType.value == "people") {
        dataLabel1.textContent = "Name"
        dataValue1.textContent = responseJSON.name
        // console.log(dataLabel1);
        //  console.log(dataValue1);
        dataLabel2.textContent = "Hair Color"
        dataValue2.textContent = responseJSON.hair_color
    }  else if (queryType.value == "planets") {
        dataLabel1.textContent = "Name"
        dataValue1.textContent = responseJSON.name
        // console.log(dataLabel1);
        // console.log(dataValue1);
        dataLabel2.textContent = "Climate"
        dataValue2.textContent = responseJSON.climate
    } else {
        dataLabel1.textContent = "Name"
        dataValue1.textContent = responseJSON.name

        dataLabel2.textContent = "Crew"
        dataValue2.textContent = responseJSON.crew
    }
}


// var inputValue = document.getElementById("myTextInputID").value;