//Problema 1
// Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
function primeraFuncion() {
    var numero = prompt("Inserte un número", "Aquí su número");
    var cuadrado = numero * numero;
    var cubo = cuadrado * numero;
    if (numero != null) {
        document.getElementById("primerRespuesta").innerHTML =
            document.write("Respuesta: ");
        for (i = 1; i <= numero; i++) {
            document.write(i, " ");
        }
        document.write("Cuadrado: ")
        document.write(cuadrado, " ");
        document.write("Cubo: ")
        document.write(cubo, " ")
    }
}
//Problema2
//Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.

function segundaFuncion() {
    var suma = prompt("Cuál es la respuesta de 8 + 8", "Aquí su respuesta");
    var respuesta = 16;
    if (suma != null) {
        document.getElementById("segundaRespuesta").innerHTML =
            document.write("Respuesta ");
        if (suma === respuesta) {
            document.write("Correcta");
        } else {
            document.write("Incorrecta");
        }
    };
}

//Problema 3
//Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.

function terceraFuncion() {
    var negativos = 0, positivos = 0, ceros = 0;
    for (i = 1; i <= arguments.length; i++) {
        if (arguments[i] === 0) {
            ceros++;
        } else if (arguments[i] < 0) {
            negativos++;
        } else if (arguments[i] > 0) {
            positivos++;
        }
    }
    document.getElementById("terceraRespuesta").innerHTML =
        document.write("Respuesta: ");
    document.write("La cantidad de numeros negativos es: " + negativos);
    document.write("\n");
    document.write("La cantidad de numeros ceros es: " + ceros);
    document.write("\n");
    document.write("La cantidad de numeros positivos es: " + positivos);
}

//Problema 4
//Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

function cuartaFuncion() {
    var matriz = [[1.0, 2.0, 3.0], [4.0, 5.0, 6.0], [7.0, 8.0, 9.0]];
    var promedio = 0.0, suma = 0.0;
    document.getElementById("cuartaRespuesta").innerHTML =
        document.write("Respuesta: ");
    for (i = 0; i < 3; i++) {
        suma = 0;
        for (j = 0; j < 3; j++) {
            suma += matriz[i][j];
        }
        promedio = suma / 3;
        document.write("El promedio de la fila " + (i + 1) + " es de: " + promedio + " ");
    }

}

//Problema 5
//Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.

function quintaFuncion(x) {
    var numero = String(x);
    var contador = numero.length - 1;

    document.getElementById("quintaRespuesta").innerHTML =
        document.write("Respuesta: ");

    for (i = 0; i < numero.length; i++) {
        document.write(numero[contador]);
        contador--;
    }

}