let name = (name) => {
    let fullName = name + 'ary';
    return 'Quinn';
}

let myNameIs = name();
console.log(myNameIs);

/*
    Challenge:
    - Make a tip calculator using a function
    -Have it RETURN the value
    - Capture that returned value in a VARIABLE
    - Print that variable
*/

function tipCalc(bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.84);
console.log(totalTip);

//

let tipCalc = bill => bill * 0.2;
let totalTip = tipCalc (19.84);
console.log(totalTip);