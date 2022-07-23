// Calcular costo de envío

 let envio =    prompt ("Ingrese a cuantos km se encuentra de CABA")

const precioEnvio1 = 350 ;

const precioEnvio2 = 450 ;

function costoEnvio (){

    if (distanciaEnvio <= 100){
        console.log ("El costo de envio es de $" + costoEnvio1);
    } 
    
    if (distanciaEnvio >100) {
        console.log ("El costo de envio es de $" + costoEnvio2);
    }   
} 

// ARRAY OBJETOS (PRODUCTOS)

class prenda {
    constructor (nombre,costo,precio) {
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
        this.precio = precio ;
    }  
}

const prendas = []

prendas.push (new prenda (id= 1,"Remera River", 2200, 4500)) ;
prendas.push (new prenda (id= 2,"Remera Nike", 1200, 3000));
prendas.push (new prenda (id= 3,"Remera Puma", 800,200));

console.log (prendas)


// Carrito

const carritoCompras = []

function agregarAlCarrito (prenda){
    carritoCompras.push (prenda)
    console.log (carritoCompras)
}

agregarAlCarrito (prendas)


function eliminarDelCarrito (prenda) {

    const prendaAEliminar = carritoCompras.findIndex ((prenda) = prenda.id = id)

    if (prendaAEliminar !== -1)


  carritoCompras.splice (prendaAEliminar,1);
}

eliminarDelCarrito (1)

console.log (carritoCompras)

