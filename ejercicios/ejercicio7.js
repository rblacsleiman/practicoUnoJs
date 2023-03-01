//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numeroA = parseInt(prompt("Ingrese el primer numero"));

let numeroB = parseInt(prompt("Ingrese el segundo numero"));

let numeroC = parseInt(prompt("Ingrese el tercer numero"));

if (numeroA>numeroB && numeroA>numeroC) {
                                document.write(`El numero ${numeroA} es mayor`);
                             }
else if (numeroB>numeroC)  {
                                    document.write (`El numero ${numeroB} es mayor`);
                                  }    
else {
          document.write (`El numero ${numeroC} es mayor`);
      }    

