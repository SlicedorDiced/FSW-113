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
        let studentGrade = this.studentScores.reduce((total, grade) => grade + total , 0)
        return studentGrade
    }

// - a method that adds up all the possible scores
    sumAllScores() {
        let allScores = this.allPossibleScores.reduce((total, grade) => grade + total , 0)
        return allScores
    }

// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
    gradeAverage() {
        let gradePA = (this.sumStudentScores() / this.sumAllScores()) * 100

        if (gradePA == 100) return 'A+'
        if (gradePA >= 90) return 'A'
        if (gradePA >= 80) return 'B'
        if (gradePA >= 70) return 'C'
        if (gradePA >= 60) return 'D'
        if (gradePA <= 50) return 'F'
    } ;
};