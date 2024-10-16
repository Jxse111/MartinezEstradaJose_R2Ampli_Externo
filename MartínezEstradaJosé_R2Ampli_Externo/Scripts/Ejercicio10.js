palabra = prompt("Introduce una palabra: ");
var numLetras = 0;

for (i = 0; i < palabra.length; i++) {

    switch (palabra.charAt(i)) {
        case 'a': case 'A': case 'á': case 'Á':
        case 'b': case 'B':
        case 'c': case 'C':
        case 'd': case 'D':
        case 'e': case 'E': case 'é': case 'É':
        case 'f': case 'F':
        case 'g': case 'G':
        case 'h': case 'H':
        case 'i': case 'I': case 'í': case 'Í':
        case 'j': case 'J':
        case 'k': case 'K':
        case 'l': case 'L':
        case 'm': case 'M':
        case 'n': case 'N': case 'ñ': case 'Ñ':
        case 'o': case 'O': case 'ó': case 'Ó':
        case 'p': case 'P':
        case 'q': case 'Q':
        case 'r': case 'R':
        case 's': case 'S':
        case 't': case 'T':
        case 'u': case 'U': case 'ú': case 'Ú':
        case 'v': case 'V':
        case 'w': case 'W':
        case 'x': case 'X':
        case 'y': case 'Y':
        case 'z': case 'Z':
            numLetras++;
            break;
        default:
            // Si no es una letra, no hacemos nada
            break;
    }
}
document.write("<p>La palabra contiene : " + numLetras + " letras.</p>");
