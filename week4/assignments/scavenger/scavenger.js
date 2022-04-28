// Create an event listenter for the 'submit' button that calls the combineLists() function

document.querySelector('#submit').addEventListener('click', combineLists);

// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

function combineLists() {


    let textarea0 = document.querySelector('#scavenger-0').value;
    let textarea1 = document.querySelector('#scavenger-1').value;
    let textarea2 = document.querySelector('#scavenger-2').value;
    let textarea3 = document.querySelector('#scavenger-3').value;
 
    let textareaArr0 = textarea0.split(',')
    let textareaArr1 = textarea1.split(',')
    let textareaArr2 = textarea2.split(',')
    let textareaArr3 = textarea3.split(',')

    console.log(textareaArr0)
    console.log(textareaArr1)
    console.log(textareaArr2)
    console.log(textareaArr3)
   
    let arrMaster = [...textareaArr0, ...textareaArr1, ...textareaArr2, ...textareaArr3].sort()

        document.querySelector('#AllItems').innerHTML = arrMaster

    
        console.log(arrMaster)


   
    // var textareaValue = textarea.value; // 'bob\ntim\nsally';
    // var arr = textareValue.split('\n');

}

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}