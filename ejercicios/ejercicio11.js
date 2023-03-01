//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let num = parseInt( prompt("Ingrese un número") );
if (num % 2 === 0 || n1 % 3 === 0 || num % 5 === 0 || num % 7 === 0) {

if (num % 2 === 0) {
document.write("Es divisible por 2");
}
if (num % 3 === 0) {
document.write("Es divisible por 3");
}
if (num % 5 === 0) {
document.write("Es divisible por 5");
}
if (num % 7 === 0) {
document.write("Es divisible por 7");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}