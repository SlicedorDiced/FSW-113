// declare each of the variables marked with "**" in the appropriate scope and using the appropriate type

let mean = 0;
let gradeSlice = 0;

// create an event listener that calls the curveGrade() function when the Curve It!! button is clicked
  document.querySelector('#submit').addEventListener('click', curveGrades);
   

// create an event listener that resets the scores and grades to their defaults when the Reset button is clicked
 document.querySelector('#reset').addEventListener('click', () => {
        document.querySelector('#grades').value = "";
        document.querySelector('#scores').value = "";
    } );



function applyBell(grade, index, ary) {
    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
            ary[index] = 'A'
            break
        case grade >= (mean + gradeSlice): 
            ary[index] = 'B'
            break
        case grade >= (mean):
            ary[index] = 'C'
            break
        case grade >= (mean - gradeSlice): 
            ary[index] = 'D'
            break
        default:
            ary[index] = 'F'
            break
    }
}

function convertArray(obj) {
    ary = obj.value.split(',')
    ary = ary.map(function (x) {
        return parseInt(x)
    })
    return ary
}

// Condense the number of lines within the curveGrade() function as much as possible by converting 
// the functions to arrow functions. You can also condense the number of lines by combining some 
// separate lines of code into single lines. It currently has 18 lines of code. Without counting  
// empty lines, can you get the number of lines down to 8?

function curveGrades() {
    // **sum = function (accumulator, currentValue) {
        //return accumulator + currentValue
    //}
    
    //const sum = (accumulator, currentValue) => accumulator + currentValue // instead of assigning  all of this code we moved the function its self insde reduce()

    var sumGrades = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue)

    var aryGrades = convertArray(document.querySelector('#scores'))

    const minGrades = aryGrades.reduce( (a, b) => Math.min(a, b) )

    const maxGrades = aryGrades.reduce( (a, b) => Math.max(a, b) )

    mean = sumGrades(aryGrades) / aryGrades.length;

    // var range = maxGrades - minGrades

    gradeSlice = (maxGrades - minGrades) / 5;

    aryGrades.forEach(applyBell)

    // write the value of aryGrades to the grades div in the HTML document


document.querySelector('#grades').innerHTML = aryGrades.toLocaleString()

}

//input = 66,72,100,88,92,74,72,94,80,78
//output = F,F,A,C,B,F,F,B,D,D