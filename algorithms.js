function convertFahrToCelsius(fahrenheit) {
    var fahrenheit= (5/9) *(fahrenheit -32);
    var n = fahrenheit.toFixed(4)
    console.log(n);
    
}
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp:0});
convertFahrToCelsius(32);
convertFahrToCelsius("32");

