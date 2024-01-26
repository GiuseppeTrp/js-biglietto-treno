let km = prompt("Quanti km devi percorrere?");
let age = prompt("Quanti hanni hai?");
let priceForKm = 0.21;
let finalPrice = priceForKm * km;

let sales20 = ((finalPrice * 20) / 100) ;
let sales40 =  ((finalPrice * 40) / 100) ;


if (age <= 18){
    
document.getElementById("price").innerHTML = ( (finalPrice - sales20).toFixed(2) );
    
} else if ( age >= 65){
    document.getElementById("price").innerHTML =  ( (finalPrice - sales40).toFixed(2) );


} else{

document.getElementById("price").innerHTML = ( finalPrice.toFixed(2) )}







console.log("sales 20% if age < 18:",sales20);

console.log("sales 40% if age > 65:",sales40);
console.log("price withouth sales:",finalPrice);


