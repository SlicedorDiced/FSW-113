const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

let subbtn = document.querySelector('#submit').addEventListener('click', e => {

    // let fullArray = [...allInputs]
    // let inputArry = [input0, input1, input2, input3, input4, input5, input6, input7]
    // console.log(inputArry)
        // let input0 = document.querySelector('#lang0').value
        // let input1 = document.querySelector('#lang1').value
        // let input2 = document.querySelector('#lang2').value
        // let input3 = document.querySelector('#lang3').value
        // let input4 = document.querySelector('#lang4').value
        // let input5 = document.querySelector('#lang5').value
        // let input6 = document.querySelector('#lang6').value
        // let input7 = document.querySelector('#lang7').value    
        
        //  - - - - - - - -  > BELOW WE HAVE EXECUTED THE SAME ORDER WITH OUT SO MANY LINES OF CODE < - - - - - - - -


    let allInputsArray = [...document.querySelectorAll('input')]

    chkLang(allInputsArray.map( input => input.value));
    // chkLang(allInputsArray); 
})

function chkLang(langs) {
    // let result = false- - - - - - - not needed 
    
        // use an array method to check whether the user included 'JavaScript' in their
        // list of languages

    let result = langs.some( input => input.toLowerCase() == lang.toLowerCase())


    // console.log(langs)
    // langs.find(function(item){  
    //     return item.value.toLowerCase() == lang.toLowerCase() ? result = true : false
    // })
    
    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}