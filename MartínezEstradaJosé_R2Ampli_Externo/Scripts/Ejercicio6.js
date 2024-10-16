numero = parseInt(prompt("Introduce un número"));
document.write("<p>EL número introducido es: " + numero + "</p>");
document.write("<p>Y los números pares hasta este son: </p>");
for (i = 0; i < numero; i = i + 2) {
    document.write("<p>Numero: " + i + "</p><br>");
}