// Pedir al usuario que ingrese una lista de números separados por comas
var numerosStr = prompt("Ingresa una lista de números separados por comas:");

// Convertir la cadena a un array de números
var numeros = numerosStr.split(",").map(Number);

// Calcular la suma
var suma = 0;
for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

// Mostrar el resultado
document.write("<p>La suma de los números es: " + suma + "</p>");