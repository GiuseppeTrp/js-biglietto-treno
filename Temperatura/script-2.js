let Celsius = Number(prompt("Quanti gradi Celsius ci sono?"));
let fahrenheit = Celsius * 9/5 + 32 ;





console.log(Celsius);
console.log(fahrenheit);


document.getElementById("celsius").innerHTML = Celsius;
document.getElementById("fahrenheit").innerHTML =  ( Math.round(fahrenheit * 100) / 100 );