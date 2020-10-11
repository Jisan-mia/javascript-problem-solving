//inch to foot/feet
let feet;

function inToFeet(inch) {
    feet = inch / 12;
    let decimalPart = feet % 1;

    console.log(Math.floor(feet) + " feet " + decimalPart.toFixed(2) + " inch");
}

//console.log(inToFeet(inch));
inToFeet(10);
inToFeet(156);
inToFeet(36);



//centemeter to meter
let meter;

function centToMeter(cent) {
    meter = cent / 100;
    meterInt = Math.floor(meter);
    meterDecimal = ((meter % 1).toFixed(2)).replace('0.', '');

    meterResult = meterInt + ' meter ' + meterDecimal + ' centemeter';
    return meterResult;
}
let first = centToMeter(65);
console.log(first)




//meter to kilometer
let kilo;

function meterToKilo(meter) {
    kilo = meter / 1000;
    let kiloIntpart = Math.floor(kilo);
    let kiloDeciPart = ((kilo % 1).toFixed(3)).replace('0.', '');

    let kiloResult = kiloIntpart + ' kilo ' + kiloDeciPart + ' meter';
    return kiloResult;
}
let kilometer = meterToKilo(650);
console.log(kilometer)
