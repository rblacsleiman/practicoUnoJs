//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let num = parseInt(prompt("Ingrese numero"));

if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {

    document.write("Es divisible por 2, 3 , 5 y 7");
}

else {
    document.write("El numero NO es divisible por 2 ni 3 ni 5 ni 7");
}
