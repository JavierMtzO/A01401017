console.log("Hola desde node");


function promedio() {
    var suma = 0;
    for (i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    var promedio = suma / arguments.length;
    console.log(promedio);
}

function escribirArreglo(miArreglo) {
    fs = require('fs');
    fs.writeFile('helloworld.txt', miArreglo, function (err) {
        if (err) return console.log(err);
        console.log(miArreglo + ' > helloworld.txt');
    });
}

// A. Watermelon
// time limit per test1 second
// memory limit per test64 megabytes
// inputstandard input
// outputstandard output
// One hot summer day Pete and his friend Billy decided to buy a watermelon. They chose the biggest and the ripest one, in their opinion. After that the watermelon was weighed, and the scales showed w kilos. They rushed home, dying of thirst, and decided to divide the berry, however they faced a hard problem.
// Pete and Billy are great fans of even numbers, that's why they want to divide the watermelon in such a way that each of the two parts weighs even number of kilos, at the same time it is not obligatory that the parts are equal. The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, if they can divide the watermelon in the way they want. For sure, each of them should get a part of positive weight.

// Input
// The first (and the only) input line contains integer number w (1 ≤ w ≤ 100) — the weight of the watermelon bought by the boys.

// Output
// Print YES, if the boys can divide the watermelon into two parts, each of them weighing even number of kilos; and NO in the opposite case.
function sandia(n) {
    if (n % 2 == 0 && n != 2) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

promedio(1, 2, 3, 4, 5, 6, 7, 8);
// escribirArreglo("Hola Mundo");
sandia(16);

const http = require('http');
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>')
    response.write('Laboratorio 9')
    response.write('</html>')
    response.end();
});
server.listen(3000);