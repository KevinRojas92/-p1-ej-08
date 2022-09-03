"use strict";

function calcular() {
    let precio = pedirPrecio();
    let iva = pedirIva();
    let total = calcularTotal(precio, iva);

    alert(`Precio: ${precio} - IVA: ${iva}% - Total: ${total}`);
}

function pedirPrecio() {
    let precio;

    do {
        precio = parseFloat(prompt("Ingresa el precio del producto"));

        if (isNaN(precio)){
            alert("Ingresa solo valores numéricos");
        } else if (precio <= 0){
          alert("Ingra un precio válido. Mayores a 0");  
        }
    } while (isNaN(precio) || precio <= 0);

    return precio;
}

function pedirIva() {
    let iva = parseFloat(prompt("Ingrese el IVA. De lo contrario este será por defecto 21%"));
    
    if (isNaN(iva)){
         iva = 21;
    } else if (iva <= 0 || iva >= 100){
        iva = 21;
    }

    return iva;
}

function calcularTotal(precio, iva) {
    let valorIva = (precio*iva)/100;
    let total = valorIva + precio;

    return total;
}