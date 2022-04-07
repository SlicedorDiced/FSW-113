// modify this script to populate the month select you create in the HTML page from an array of month names 
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button
// Month Array and select options with input for year 
const monthSelect = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December']
const monthOption = document.querySelector('#month')

for (let i = 0; i < monthSelect.length; i++) {
    if(new Date().getMonth() == i)
        monthOption.options[i] = new Option(monthSelect[i],i+1,false,true)
    else 
        monthOption.options[i] = new Option(monthSelect[i],i+1)
    // month = monthSelect[i]
}

document.querySelector('#year-input').value = new Date().getFullYear() //automatically fill in year in input when page loads with currenct date

function printCalendar() {
    document.querySelector('#calendarDays').innerHTML = " " // we start off with a clean calander everytime we run the function
                                                            // so is like removing the old one when we ask for a new one
        var selectedDateString = `${document.querySelector('#month').value}/1/${document.querySelector('#year-input').value}`
        // var selectedYear = document.querySelector('#year-input').value;  this line 6, and 7 are replaced by line 5
        // var selectedMonth = monthOption.value
    // modify this script to use the first day of the month the user selects in place of the const today
const today = new Date(selectedDateString) // build new date string 'month/day/year
const month = today.getMonth()
let days
switch (month) {
    case 1:
        days = 28
        break
    case 3:
    case 5:
    case 8: 
    case 10:
        days = 30
        break
    default:
        days = 31
}
//Grey space boxes before dates
let x
const weekday = today.getDay()
for (x = 0; x < weekday; x++){
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
}
//create date boxes with dates
let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while ( dt < days)
// month name at top
const monthName = today.toLocaleDateString('default', {month:'long'})
const year = today.getFullYear()
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`
// grey boxes no dates after
const remainder = (7 - ((x + dt) % 7))
let y = 0
while ( y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}

};

// go button event listener with printcalander function

    document.querySelector('#gobtn').addEventListener('click', function(){
        printCalendar()
    })

printCalendar()
// here we request that a default calander display automatically once script is loaded at the end