const { fromDollarToYen,fromEuroToDollar, fromYenToPound } = require('./app.js');

test ("One euro should be 1.206 dollars", ()=>{
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test ("One dollar should be 132.81 JPY", ()=>{
    expect(fromDollarToYen(2)).toBe(265.62);
});

test ("One yen should be 0.0061 GBP", ()=>{
    expect(fromYenToPound (3.5)).toBe(0.02135);
});