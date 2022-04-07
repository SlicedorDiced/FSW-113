const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]
// list of each part number and qty for check-off in the "detailsList" element with forEach instead of for loop
parts.forEach((item) => {
    item = `<div class=items"><input type="checkbox"></input>${item.qty}  (${item.partNbr}) - ${item.partDescr}<br/></div>` 
    document.querySelector('#detailsList').innerHTML += item
});

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element
const specialPackaging = parts.filter((item) => {
    return item.aisle === 'B3'
})
if (specialPackaging.length > 0) {
    let specialLabel = 'Special Packaging required<br /><br /> '
    specialPackaging.map((item) => {
        specialLabel += `Item: ${item.partNbr} / Qty: ${item.qty}<br />`
    })
    document.querySelector('#specialPackaging').innerHTML = specialLabel
} else document.querySelector('#specialPackaging').remove()

// // if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// // element and remind them to get gloves, else remove element
const hazardousMaterials = parts.filter((item) => {
    return item.aisle === 'J4'
})
if (hazardousMaterials.length > 0) {
    let hazardLabel = 'Hazardous Materials<br /><br /> '
    // hazardousMaterials.map((item) => {
    //     // hazardLabel += `Item: ${item.partNbr} / Qty: ${item.qty}<br /><br />`
    // })
    document.querySelector('#hazardousMaterials').innerHTML = hazardLabel + " Get Gloves"
} 


// // if all items in the order are small parts (aisle H1), then let employee know that they should take 
// // a basket and go dirctly to aisle H1
const smallItems = parts.every((item) => {
    return item.aisle === 'H1'
})
if (smallItems.length > 0) {
    let smallLabel = 'Small Parts<br /><br /> '
    // smallItems.map((item) => {
    //     smallLabel += `Item: ${item.partNbr} / Qty: ${item.qty}<br /><br />`
    // })
    document.querySelector('#smallItemsOnly').innerHTML = smallLabel + "Grab a basket, and go directly to aisle H1"
} else document.querySelector('#smallItemsOnly').remove()

// // if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// // element that they will need to reserve a forklift, else remove the element
const forklift = parts.some((item) => {
    return item.aisle === 'S' || 'T' || 'U'
})
if (forklift.length > 0) {
    let smallLabel = 'Forklift Needed<br /><br /> '
    forklift.map((item) => {
        smallLabel += `Item: ${item.partNbr} / Qty: ${item.qty}<br /><br />`
    })
    document.querySelector('#forkiftNeeded').innerHTML = smallLabel + "You will need to reserve a fork lift"
} else document.querySelector('#forkiftNeeded').remove()

// // sum up the total number of parts and append that number to the text already in "totalItems" element

const totalPrice = parts.reduce((Total, item) => {
    return item.qty + Total
}, 0)

document.querySelector('#totalItems').innerHTML += ` : ${totalPrice}`