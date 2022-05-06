// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:

class objStudent {
    constructor (stName,clName,stScores,allScores) {
        this.studentName = stName,
        this.className = clName,
        this.studentScores = stScores,
        this.allPossibleScores = allScores
    }

    setstudentName(stName) {
        this.studentName = stName
    }

    getstudentName() {
        return this.studentName
    }

    setclassName(clName) {
        this.className = clName
    }

    getclassName() {
        return this.className
    
    }

    setstudentScores(stScores) {
        this.studentScores = stScores
    }

    getstudentScores(){
        return this.studentScores
    }

    setAllScores(allScores) {
        this.allPossibleScores = allScores
    }

    getAllScores(){
        return this.allPossibleScores
    };


// - a method that adds up all the student's scores
    sumStudentScores() {
        let studentGrade = this.studentScores.reduce((counter, i) => {
            return i.grade + counter
        },
        0)
        return studentGrade
    }

// - a method that adds up all the possible scores
    sumAllScores(
    ) {
        let allScores = this.allPossibleScores.reduce((counter, i) => {
            return i.allScores + counter
        },
        0)
        return allScores
    }

// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
    gradeAverage() {
        return this.sumStudentScores() / this.sumAllScores()

    } ;
};