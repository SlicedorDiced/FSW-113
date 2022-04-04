const today = new Date('1/1/2021')
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

// Month Array and select options with input for year 
const monthSelect = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December']


let objSelect = document.querySelector('#month')

for (let i = 0; i < monthSelect.length; i++) {
    objSelect.options[i] = new Option(monthSelect[i])
    // month = monthSelect[i]
}



// I have been stuck here trying to print calender from selected list and year input.
// print select input function
// function printCalendar() {
//     var selectedYear = document.querySelector('#year-input');
   
// };
// const goButton = document.querySelector('#gobtn').addEventListener('click', printCalendar)


// modify this script to populate the month select you create in the HTML page from an array of month names 
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 