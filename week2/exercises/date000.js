const now = Date()

const today = new Date()

const day = Date.now().toLocaleString()

const par = Date.parse("April 9, 1995").toLocaleString()

const gmt = Date(Date.UTC())

document.querySelector('#container0').innerText = now
document.querySelector('#container1').innerText = today
document.querySelector('#container2').innerText = day
document.querySelector('#container3').innerText = par
document.querySelector('#container4').innerText = gmt