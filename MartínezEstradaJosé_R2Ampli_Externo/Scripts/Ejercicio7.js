palabraDelReves = " ";
palabra = prompt("Introduce una palabra: ");
document.write("<h2>Veamos si es un palíndromo.<h2>");
document.write("<h3>La palabra introducida es " + palabra + "</h3>");

for (i = palabra.length - 1; i >= 0; i--) {
    palabraDelReves += palabra[i];
}

if (palabra = palabraDelReves) {
    document.write("<p>La palabra introducida es un palíndromo</p><br>")
    document.write("<p>Palabra dada la vuelta: " + palabraDelReves + "</p>");
}