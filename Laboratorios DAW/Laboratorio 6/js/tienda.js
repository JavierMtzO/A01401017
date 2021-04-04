var boton = document.getElementById("sudaderas");

function mostrarTienda() {

    boton.classList.remove("invalida");
    boton.classList.add("valida");
}

let x = 0, y = 0, z = 0;
function agregarSudadera01() {
    x += 1;
    document.getElementById("agregar01").innerHTML = x
}
function agregarSudadera02() {
    y += 1;
    document.getElementById("agregar02").innerHTML = y
}
function agregarSudadera03() {
    z += 1;
    document.getElementById("agregar03").innerHTML = z
}

function calcularPrecio() {
    var precio = 0.0, iva = 0.0, total = 0.0;
    precio += x * 250.0;
    precio += y * 450.0;
    precio += z * 350.0;
    iva = precio * 0.15;
    total += precio + iva;
    document.getElementById("precio").innerHTML = "El precio es de: " + precio
    document.getElementById("iva").innerHTML = "El precio del iva es de: " + iva
    document.getElementById("precio-final").innerHTML = "El precio total es de: " + total
}


