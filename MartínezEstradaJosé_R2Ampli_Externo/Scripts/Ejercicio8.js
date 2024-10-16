dado1 = 0;
dado2 = 0;
document.write("<h1>Resultado de los lanzamientos: </h2>");
do {
    alert("LANZAMIENTO DE DADOS!!");
    dado1 = Math.floor(Math.random() * 7);
    dado2 = Math.floor(Math.random() * 7);
    if (dado1 == dado2) {
        document.write("<p>Las dos caras son iguales.</p>");
        document.write("<p>Dado 1 : " + dado1 + "</p>");
        document.write("<p>Dado 2 : " + dado2 + "</p>")
    } else {
        document.write("<p>Las caras de los dados no son iguales, Dado 1:  " + dado1 + ",  Dado 2: " + dado2 + "</p>");
    }
} while (dado1 != dado2);