palabra = prompt("Introduce una palabra: ");
var numVocales = 0;

for (i = 0; i < palabra.length; i++) {

    switch (palabra.charAt(i)) {
        case 'a':
            numVocales++;
            break;
        case 'e':
            numVocales++;
            break;
        case 'i':
            numVocales++;
            break;
        case 'o':
            numVocales++;
            break;
        case 'u':
            numVocales++;
            break;
    }
}
document.write("<p>La palabra contiene : " + numVocales + " vocales.</p>");
