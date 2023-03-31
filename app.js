// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromDollarToYen (num){
    let result = num*(132.81);
    return result;
}

function fromEuroToDollar (num){
    let result = num*(1.2);
    return result;
}
function fromYenToPound (num){
    let result = num*(0.0061);
    return result;
}


module.exports = { 
    fromDollarToYen:fromDollarToYen,
    fromEuroToDollar:fromEuroToDollar,
    fromYenToPound:fromYenToPound,

};
