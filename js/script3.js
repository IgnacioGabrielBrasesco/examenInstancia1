let proveedor = prompt("Ingrese el nombre de su distribuidora: ")
let maizIngresado = parseInt(prompt(`Hola ${proveedor} ingrese la cantidad de toneladas de maiz que trae:`));

// const silos = [
//     {
//         nombre: "Silo 1",
//         stock: 0,
//     },
//     {
//         nombre: "Silo 2",
//         stock: 0,
//     },
//     {
//         nombre: "Silo 3",
//         stock: 0,
//     }
//    ];
let silo1 = 0;
let silo2 = 0;
let silo3 = 0;

function estadoMaiz(){
   let estadoMaiz = prompt(`Ahora ingrese el numero del estado de su maiz: 
    1- Maiz en buen estado
    2- Maiz con humedad
    3- Maiz con cuerpos extraños
    4- Salir`)
    switch(estadoMaiz){
        case '1':
            alert(`El maiz debe ingresarse al Silo 1 antes debe corroborar el estado del silo`);
            corroborarEstadoSilo();
            actualizacionDeStock();
        break;
        case '2':
            alert(`El maiz debe ingresarse al Silo 2 antes debe corroborar el estado del silo`);
            corroborarEstadoSilo();
            actualizacionDeStock();
        break;
        case '3':
            alert(`El maiz debe ingresarse al Silo 3 antes debe corroborar el estado del silo`);
            corroborarEstadoSilo();
            actualizacionDeStock();
        break;
        case '4':

        break;
    }
} 

estadoMaiz()

function corroborarEstadoSilo(){
    let estadoDelSilo = parseInt(prompt("ingrese '1' si esta limpio o '2' si esta sucio o '4' para salir"));
    if(isNaN(estadoDelSilo) || estadoDelSilo != 1 && estadoDelSilo !=2 && estadoDelSilo != 4){
        alert(`ups no ingresaste un caracter valido. Por favor ingresa "1" si el silo esta limpio o "2" si esta sucio`);
        corroborarEstadoSilo()
    } else if(estadoDelSilo == 2){
        alert(`limpiar silo antes de ingresar el maiz`);
        corroborarEstadoSilo();
    } else if(estadoDelSilo == 1){
        alert(`Genial. Ya puede ingresar el maiz!`)
        actualizacionDeStock();
    } else if(estadoDelSilo == 4){
        alert(`Gracias por trabajar con nostros.`)
    } else{
        alert(`ups debes ingresar un numero valido. Por favor ingrese "1" si esta limpio o "2" si esta sucio`)
        corroborarEstadoSilo();
    }
};


function actualizacionDeStock(){
    let tipoDeGrano = prompt(`ingrese el numero del silo correspondiente: 
    1- Silo 1
    2- Silo 2
    3- Silo 3
    4- Salir`)
    
    switch(estadoMaiz){
        case '1':
            alert(`el silo 1 tiene un stock actuàl de: ${silo1 += maizIngresado} toneladas`);
            
        break;
        case '2':
            alert(`El maiz debe ingresarse al Silo 2 antes debe corroborar el estado del silo`);
            
            actualizacionDeStock();
        break;
        case '3':
            alert(`El maiz debe ingresarse al Silo 3 antes debe corroborar el estado del silo`);
            
            actualizacionDeStock();
        break;
        case '4':

        break;
    }
}
