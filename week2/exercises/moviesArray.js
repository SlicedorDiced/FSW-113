const movies = [ 
    { id: "5RXQ7", name: 'Avatar', year: 2009, gross: 2847246203 },
    { id: "TQY91", name: 'Endgame', year: 2019, gross: 2797501328 },
    { id: "N88TR", name: 'Titanic', year: 1997, gross: 2201647264 },
    { id: "8MVW2", name: 'The Force Awakens', year: 2015, gross: 2068455677 },
    { id: "7XP4Y", name: 'Infinity War', year: 2018, gross: 2048359754 },
    { id: "K0KW1", name: 'Jurassic World', year: 2015, gross: 1670516444 },
    { id: "RBWPX", name: 'The Lion King', year: 2019, gross: 1657870986 },
    { id: "81P99", name: 'The Avengers', year: 2012, gross: 1518815515 },
    { id: "GP35Z", name: 'Furious 7', year: 2015, gross: 1515255622 },
    { id: "99R42", name: 'Frozen II', year: 2019, gross: 1450026933 }
]


// forEach() create a list of the 10 top movies
let top10Movies = '<ol>'
movies.forEach(function(movie){
    top10Movies += `<li>${movie.name} (${movie.year}): $${movie.gross.toLocaleString()}</li>`
});
top10Movies += '</ol>'
document.querySelector('#top10Movies0').innerHTML += top10Movies


// NEXT 
// .filter() print lisT of movies grossing over 2B
const ary2BMovies = movies.filter(function(movie) {
    return movie.gross >= 2000000000
})

let movies2B = '<ol>'
ary2BMovies.forEach(function(movie){
    movies2B += `<li>${movie.name} (${movie.year}) : $${movie.gross.toLocaleString()}</li>`
});
movies2B += '</lo>'
document.querySelector('#top10Movies1').innerHTML = movies2B



//NEXT
//.map() print alphabetic list of top 10 movies
let movieNames = '<ol>'
movies.map(function(movie) {
    movieNames += `<li>${movie.name}</li>`
}).sort()
movieNames += '</ol>'
document.querySelector('#top10Movies2').innerHTML = movieNames


//NEXT
// .find() print the name of my favorite movie
const faveMovie = movies.find(function(item) {
    return item.id === 'RBWPX'
})
document.querySelector('#top10Movies3').innerHTML = faveMovie.name


//NEXT
//.some() print wether all top movies are from the 21st century
const oldMovies = movies.some(function(item){
    return item.year <= 2000
})
if (oldMovies) {
    document.querySelector('#top10Movies4').innerText = 'No'
} else (
    document.querySelector('#top10Movies4').innerText = "Yes"
)


//NEXT
// .every() print wether all top 10 movies were blockbusters
const blockBusters = movies.every(function(item) {
    return item.gross >= 1500000000
})
if (blockBusters) {
    document.querySelector('#top10Movies5').innerText = "Yes"
} else {
    document.querySelector('#top10Movies5').innerText = "No"
}


//NEXT
// .reduce() print average gross rom all top 10 movies
const totalGross = movies.reduce(function(fullTotal, movie) {
        return movie.gross + fullTotal
    },
0)
document.querySelector('#top10Movies6').innerText = 
    `$${(totalGross / movies.length).toLocaleString()}`






// console.log(movies2B)

// const moviesDTL  = movies.forEach(function(movie) {
//     console.log(movie)
// })

// console.log(moviesDTL)

// const movieNames = movies.map(function(item) {
//     return item.name
// })

// console.log(movieNames)

// const faveMovie = movies.find(function(item) {
//     return item.name === 'The Lion King'
// })

// console.log(faveMovie)

// const oldMovies = movies.some(function(item) {
//     return item.year <= 2000
// })

// console.log(oldMovies)

// const blockBusters = movies.every(function(item) {
//     return item.gross >= 1500000000
// })

// console.log(blockBusters)

// const totalGross = movies.reduce(function(currentTotal, item) {
//             return item.gross + currentTotal
//     }, 
// 0)
    
// console.log(totalGross / movies.length)