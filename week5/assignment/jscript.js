// Declare any necessary variables.
 let student

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
// a new student object, and another function to print the certificate.
 document.querySelector('#print').addEventListener('click', () => {
     createStudent()
     fillCertificate()
 })


// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector('#reset').addEventListener('click', () => {
  let inputs = document.querySelectorAll('input');
    inputs.textContent = ' '
})

// Create a function that instantiates a new student object with the input from the HTML form.

function createStudent() {
    
            student = new objStudent(
                document.querySelector('#studentName').value,
                document.querySelector('#className').value,
                commaString2Number(document.querySelector('#studentScores').value),
                commaString2Number(document.querySelector('#possibleScores').value)
            )
           
    }
    


// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
   function fillCertificate() {
       document.querySelector('#certStudentName').textContent = student.studentName
       document.querySelector('#certClassName').textContent = student.className
       document.querySelector('#certGrade').textContent = student.gradeAverage()
       

   }

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.


    const commaString2Number = (str) => str.split(',').map( e => parseInt(e))
    
    //  anytime you need to return numeric from string you could use this function