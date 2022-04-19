const movies = [
    { name: 'Avatar', year: 2009, gross: 2847246203 },
    { name: 'Endgame', year: 2019, gross: 2797501328 },
    { name: 'Titanic', year: 1997, gross: 2201647264 },
    { name: 'The Force Awakens', year: 2015, gross: 2068455677 },
    { name: 'Infinity War', year: 2018, gross: 2048359754 },
    { name: 'Jurassic World', year: 2015, gross: 1670516444 },
    { name: 'The Lion King', year: 2019, gross: 1657870986 },
    { name: 'The Avengers', year: 2012, gross: 1518815515 },
    { name: 'Furious 7', year: 2015, gross: 1515255622 },
    { name: 'Frozen II', year: 2019, gross: 1450026933 }
]
// print list of top 10 movies
//declared function
// let obj = document.querySelector('#top10Movies')
// let top10Movies = '<ol>'
// movies.forEach(function(movie) {
//     top10Movies += `<li>${movie.name} (${movie.year}) :$${movie.gross.toLocaleString()} </li> `
// })
// top10Movies += '</ol>'
// document.querySelector('#top10Movies').innerHTML = top10Movies
// arrow function
let obj = document.querySelector('#top10Movies')
movies.forEach( movie => updateDOM(`<li>${movie.name} (${movie.year}): $${movie.gross.toLocaleString()} </li> `, true ))
//              -----------NEXT---------------
// let movies2B = '<ol>'
// ary2BMovies.forEach(function(movie ){
//     movies2B += `<li>${movie.name} (${movie.year}): $${movie.gross.toLocaleString()}</li>`
// })
// movies2B += '</ol>'
// document.querySelector('#movies2B').innerHTML = movies2B
// - - - - - - - - -  - - NEXT -- - - - - - - -
//arrow function
obj = document.querySelector('#movies2B')
const ary2BMovies = movies.filter( movie => movie.gross >= 2000000000 )
ary2BMovies.forEach( movie => updateDOM(`<li>${movie.name} (${movie.year}): $${movie.gross.toLocaleString()}</li>`, true))
// const moviesDTL  = movies.forEach(function(movie) {
//
// })
// const movieNames = movies.map(function(item) {
//     return item.name
// })
//declared
// let movieNames = '<ol>'
// movies.map(function(movie){
//     movieNames += `<li>${movie.name}</li>`
// }).sort()
// movieNames += '</ol>'
// document.querySelector('#alphaMovies').innerHTML = movieNames
// arrow
obj = document.querySelector('#alphaMovies') // here with this line in all above what we do is assign the alphamMovies object to the obj variable
movies.map(movie => updateDOM(`<li>${movie.name}</li>`, true)).sort()
// - - - - - - - -  - - - NEXT - - - - - - - - -  -
// const faveMovie = movies.find(function(item) {
//     return item.name === 'The Lion King'
// })
//declared
// const faveMovie = movies.find(function(item){
//     return item.id === 'RBWPX'
// })
// document.querySelector('#faveMovie').innerHTML = faveMovie.name
// arrow
obj = document.querySelector('#faveMovie')
const faveMovie = movies.find(item => item.id === 'RBWPX')
updateDOM(faveMovie.name, false)
// -------------- NEXT - -- -- - - - - - - - - - -
// // declared
// const oldMovies = movies.some(function(item) {
//     return item.year <= 2000
// })
// if (oldMovies) {
//     document.querySelector('#oldMovies').innerHTML = "No"
// } else {
//     document.querySelector('#oldMovies').innerHTML = "Yes"
// }
// arrow
obj = document.querySelector('#oldMovies')
const oldMovies = movies.some(item => item.year <= 2000)
if (oldMovies) updateDOM('NO', false)
else updateDOM('Yes', false)
// - - - - - - - - - - NEXT - - - - - - - - - - - - -
// const blockBusters = movies.every(function(item) {
//     return item.gross >= 1500000000
// })
// if (blockBusters) {
//     document.querySelector('#blockbusters').innerText = 'Yes'
// } else {
//     document.querySelector('#blockbusters').innerText = 'No'
// }
// arrow
obj = document.querySelector('#blockbusters')
const blockBusters = movies.every( item => item.gross >= 2000000000)
if (blockBusters) updateDOM('Yes', false)
else updateDOM('NO', false)
// - - - - - - - - - -  NEXT  - - - - - - - - -  -
    // declared
// const totalGross = movies.reduce(function(currentTotal, item) {
//             return item.gross + currentTotal
//     },
// 0)
// document.querySelector('#avgGross').innerText = `$${(totalGross / movies.length).toLocaleString()}`
// arrow
obj = document.querySelector('#avgGross')
const totalGross = movies.reduce( (currentTotal, movie) => movie.gross + currentTotal, 0)
updateDOM(`$${(totalGross / movies.length).toLocaleString()}`, false)
// function taking care of inputing new results into the dom
// obj is the object we refer to
function updateDOM(val, concat){
    if(concat) obj.innerHTML += val
    else obj.innerHTML = val
}
















Message Slackbot








