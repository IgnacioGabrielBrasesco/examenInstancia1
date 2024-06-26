// Caso de estudio:
// Proceso de Recepción y Actualización del Stock de Maíz
// Introducción:
// La Cooperativa La Perdedora está a punto de iniciar la cosecha de maíz. El recibidor de granos
// tiene la responsabilidad de recibir un ingreso inicial de 3000 toneladas de maíz y actualizar el stock
// en el silo correspondiente. Para garantizar un proceso eficiente y seguro, es necesario seguir una
// serie de pasos específicos.
// Objetivos:
//  Verificar el stock actual de maíz en el silo designado.
//  Recibir 3000 toneladas de maíz del camión transportador.
//  Actualizar el stock de maíz en el sistema de gestión de inventarios.
//  Informar al personal de la cooperativa sobre el stock actualizado de maíz.
// Procedimiento:
// 1. Verificación del stock actual:
//  Consultar el stock actual del silo correspondiente a cereal maíz.
// 2. Recepción del maíz:
//  Asegurarse de que el maíz descargado cumpla con los estándares de calidad
// establecidos por la cooperativa:
//  Verificar el estado del maíz y dirigirlo al silo correspondiente:
//  Si tiene cuerpos extraños, debe ir a un silo dos (2) reservado para este fin.
//  Si tiene humedad, debe ir a silo tres (3) reservado para tal fin.

// 3. Actualización del stock:
//  Sumar la cantidad de maíz descargado al stock actual.

//  Informar el estado actual del silo a los usuarios.
//  Comunicar el nuevo stock de maíz al personal de la cooperativa, incluyendo
// gerentes, supervisores y operadores del silo.

// Consideraciones adicionales:
//  Antes de la recepción del maíz, verificar que el silo se encuentre en condiciones óptimas
// de almacenamiento, incluyendo limpieza y ventilación.
//  En caso de detectar alguna irregularidad durante la recepción o el almacenamiento del
// maíz, informar de inmediato al personal superior.

let cooperativa = "La Perdedora";
let cosechaMaiz;
let recibidorDeGranos = 3000;

const silos = [
    {nombre = "Silo1",
    estado = "disponible",
    stockActual = 0,
},


    {nombre = "silo2",
    estado = "Reservado para maiz con cuerpos extraños",
    stockActual = 0,
},

    {nombre = "silo3";
    estado = "Maiz con humedad",
    stockActual = 0,
}
];
    
   

const maizBuenEstado = true;
const maizConHumedad = true;
const maizConCuerposExtraños = true;


// 1. Verificación del stock actual:
//  Consultar el stock actual del silo correspondiente a cereal maíz.
function verificarStockActual(){
    for (let i = 0; i < silos.length; i++) {
        const silo = silos[i];
        alert(`Silo ${silo.numero}: ${silo.estado} ${silo.stockActual}`)
        console.log(`Silo ${silo.numero}: ${silo.estado} ${silo.stockActual}`);
    }
};

verificarStockActual();

// 2. Recepción del maíz:
//  Asegurarse de que el maíz descargado cumpla con los estándares de calidad
// establecidos por la cooperativa:
//  Verificar el estado del maíz y dirigirlo al silo correspondiente:
//  Si tiene cuerpos extraños, debe ir a un silo dos (2) reservado para este fin.
//  Si tiene humedad, debe ir a silo tres (3) reservado para tal fin.
function recepcionDelMaiz(){
    if(recibidorDeGranos == "Maiz con Cuerpos extraños"){
        alert(`El maiz del silo 2 cuenta con ${siloConCuerpoExtraño += recibidorDeGranos} toneladas de maiz`);
    } else if(recibidorDeGranos == maizConHumedad){
        alert(`El maiz del silo 2 cuenta con ${siloConCuerpoExtraño += siloConCuerpoExtraño} toneladas de maiz`);
    }
}