// Array para almacenar información sobre el estado de los silos


const maizEnBuenEstado = true;
const maizConHumedad = true;
const maizConCuerposExtraños = true;

let maizRecibido = prompt("ingrese la cantidad de maiz en toneladas: ");

const silos = [
    { numero: 1, estado: "Reservado para maiz en buen estado", stock: 0, limpieza: "optima", ventilacion: "optima", },
    { numero: 2, estado: "Reservado para maiz con cuerpos extraños", stock: 0, limpieza: "optima", ventilacion: "optima", },
    { numero: 3, estado: "Reservado para maíz con humedad", stock: 0, limpieza: "optima", ventilacion: "optima",}
];

// Función para verificar el estado de los silos
function verificarEstadoSilos() {
    // Recorrer el array de silos
    for (let i = 0; i < silos.length; i++) {
        const silo = silos[i];
        alert("Silo " + silo.numero + ", " + silo.estado + ": stock " + silo.stock + " toneladas");
    }
}

// Llamada a la función para verificar el estado de los silos
// verificarEstadoSilos();

function recepcionDelMaiz(){
    if(maizRecibido == maizConHumedad){
        alert(`El maiz ingresa al silo 3 porque tiene humedad`)
    } else if(maizRecibido == maizConCuerposExtraños){
        alert(`El maiz ingresa al silo 2 porque tiene cuerpos extraños`)
    } else if(maizRecibido == maizEnBuenEstado){
        alert(`El maiz ingresa al silo 1 porque esta en buen estado`)
    };
}

recepcionDelMaiz();

function salirDeAqui(){
    alert(`Muchas gracias por confiar en nosotros`)
};

    function ingresarEstado(){
        let estadoIngresado = prompt(`Ingresa el numero correspondiente al estado de tu maíz:   
        1 - Maiz en buen estado 
        2 - Maiz con cuerpos extraños   
        3 - Maiz con Humedad 
        4 - No traigo maiz. Salir`);
    
        switch(estadoIngresado){
            case(estadoIngresado != "1" || estadoIngresado != "2" || estadoIngresado != "3" || estadoIngresado != "4"):
            `Ingrese el numero alguna de las opciones`;
                ingresarEstado();            
            break;
            case '1':
                alert(`El maiz ingresa al silo 1. Ahora el stock del silo 1 es de ${actualizacionDeStock()} toneladas`);
                // ingresarEstado();
                recepcionDelMaiz();
                
                break;
            case '2':
                alert(`El maiz ingresa al silo 2. Ahora el stock del silo 2 es de ${actualizacionDeStock()} toneladas`);
                // ingresarEstado();
                recepcionDelMaiz();
               
                break;
            case '3':
                alert(`El maiz ingresa al silo 3. Ahora el stock del silo 3 es de ${actualizacionDeStock()} toneladas`);
                // ingresarEstado();
                recepcionDelMaiz();
            break;
            case '4':
                salirDeAqui();
                break;
            default:
                alert(`Ingrese el numero alguna de las opciones del menú`);
                ingresarEstado();
        };
        
    };
    
    ingresarEstado()

    function  actualizacionDeStock(){

        if(maizRecibido == maizEnBuenEstado){
            alert(`El stock del Silo 1 ahora es de: ${maizEnBuenEstado += maizRecibido} toneladas`);
        } else if(maizRecibido == maizConCuerposExtraños){
            alert(`El stock del Silo 2 ahora es de: ${maizConCuerposExtraños += maizRecibido} toneladas`);
        } else if(maizRecibido == maizConHumedad){
            alert(`El stock del Silo 3 ahora es de: ${maizConHumedad += maizRecibido} toneladas`);
        }
    }
    actualizacionDeStock();

function stockDeSilos(){
    prompt(`ingrese el numero del Silo que desea para ver su stock o el numero 4 si desea salir `)
    switch(stockActual){
        case '1':
            alert(`El stock actual del Silo 1 es de ${silo[0].stock} toneladas`)
        break;
        case '2':
            alert(`El stock actual del Silo 2 es de ${silo[1].stock} toneladas`);
        break;
        case '3':
            alert(`El stock actual del Silo 3 es de ${silo[2].stock} toneladas`);
        break;
        case '4':
            salirDeAqui();
        break;
        default:
            alert(`el numero ingresado no corresponde a ninguna de las opciones`)
            break;

    }
}

stockDeSilos();