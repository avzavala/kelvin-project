// declaring a variable that sill stay constant that's why I use const instead of var
const kelvin = 293;
//declaring a second variable for celsius that is 273 - the origunal variable 
const celsius = (kelvin - 273);
// declared farenheit variable using the formula provided using var so I can later change it's value
var farenheit = (celsius * (9/5) + 32);
//used mathfloor to round up to the smallest digit the result for the new variable farenheit
var farenheitNew = Math.floor(farenheit);
var TEMPETURE = (farenheitNew);
console.log(`the tempeture is ${TEMPETURE} degrees farenheit.`);



var newton = (celsius * (33/100));
var newNewton = Math.floor(newton);
console.log(`the tempeture is ${newNewton} degrees Newton`);
