var numAdivinar, numIntento, intentos//Variables de numeros enteros.
var acierto//Variables booleanas
numAdivinar = 0;//Número aleatorio
intentos = 3;//Número dei intentos

numAdivinar = Math.floor(Math.random() * 101);
acierto = false;

//Realizamos un bucle que mientras no te quedes sin intentos podrás adivinar el número aleatorio.
do {
    entrada = prompt("Introduce un número entre el 0 y el 100", "Nada");
    numIntento = entrada;
    if (numIntento == numAdivinar) {
        alert("ENHORABUENA HAS ACERTADO EL NUMERO!!!");
        document.write("<p>El número acertado es: " + numAdivinar + "</p>");
        acierto = true;

    } else if (numIntento < numAdivinar) {
        alert("EL NUMERO INTRODUCIDO DEBE SER MAYOR");
        intentos--;
        alert("Te quedan " + intentos + " intentos.");
    } else {
        alert("EL NÚMERO INTRODUCIDO DEBE SER MENOR");
        intentos--;
        alert("Te quedan " + intentos + " intentos.");
    }
} while (!acierto && intentos > 0);

//Si no aciertas se te devolverá este mensaje por pantalla.
if (!acierto && intentos == 0) {
    document.write("<p>Te quedaste sin intentos :C, " + " el número era: " + numAdivinar + ".</p>");
}
