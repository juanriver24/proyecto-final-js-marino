// ARRAY OBJETOS (PRODUCTOS)

class prenda {
    constructor (nombre,costo,precio) {
        this.nombre = nombre;
        this.costo = costo;
        this.precio = precio ;
    }   

    aumentoAutomatico () {
        this.costo = this.costo * 1.25;
        this.precio = this.precio * 1.25;
    }

}

const prendas = []

prendas.push (new prenda ("Remera River", 2200, 4500)) ;
prendas.push (new prenda ("Remera Nike", 1200, 3000));
prendas.push (new prenda ("Remera Puma", 800,200));

console.log (prendas)

// Calcular costo de envío

let envio = prompt ("Ingrese a cuantos km se encuentra de CABA")

const precioEnvio1 = 350 ;

const precioEnvio2 = 450 ;

function costoEnvio (){

    if (distanciaEnvio <= 100){
        console.log ("El costo de envio es de $" + costoEnvio1);
    } else {
        console.log ("El costo de envio es de $" + costoEnvio2);
    }   
} 

// Carrito