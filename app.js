//MODIFICAR EL DOM MEDIANTE JAVASCRIPT
let numeroMaximo = 3;
//querySelector() Es un metodo que permite acceder a un elemento del DOM por medio de selectores
//Esta funcion de abajo devuelve un objeto. (titulo es un objeto)
let parrafo = document.querySelector('p');
//el metodo innerHTMl cambia el contenido del elemento u objeto seleccionado. 
parrafo.innerHTML = `Indica un numero del 1 al ${numeroMaximo}`;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
//let numeroMaximo = 3;

/*let numeroSecreto = generarNumeroSecreto();
let intentos = 1;*/

console.log(numeroSecreto);

//Declarar una funcion para automatizar la seleccion del elemento a modificar. 
function asignarTextoElemento(elemento, texto){
    
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//--------------------------------------------------------------------
// EVENTOS CON JAVASCRIPT

//El concepto de Hoisting, permite leer y cargar todas las funciones definidas dentro del  
//archivo JavaScript, de tal forma que puedan ser llamadas en cualquier momento durante la ejecucion secuencial
//las instrucciones del archivo. 

//JavaScript permite la gestion de eventos. (mover cursos, hacer click etc.)
/*function intentoDeUsuario(){

    alert('Çlick desde el boton');
    
    return;
}*/
function verificarIntento(){

    //Estamos forzando a que el dato recibido en el imput sea de tipo numero
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    /*
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    */

    //El triple igual === es una comparacion que tiene en cuenta el tipo de dato y el valor del mismo
    //console.log(numeroDeUsuario === numeroSecreto);

    //console.log(numeroSecreto);
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){

        //Operador ternario
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);

        //removeAttribute sirve para remover atributos del elemento o etiqueta seleccionada del DOM
        document.getElementById('reiniciar').removeAttribute('disabled');
            //El usuario no acerto
    }else if(numeroDeUsuario > numeroSecreto){

                asignarTextoElemento('p','El numero secreto es menor');
                intentos++;
                limpiarCaja();

            }else{

                asignarTextoElemento('p','El numero secreto es mayor');
                intentos++;
                limpiarCaja();
            }

            
    return;
}

function limpiarCaja(){

    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
    //value asigna un nuevo valor al elemento seleccionado del DOM
    document.querySelector('#valorUsuario').value = '';

}

//Esta puede ser una manera de realizarlo
/*
function generarNumeroSecreto(params) {
    
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    
    return numeroSecreto;

}
*/
//Esta es la opcion con buenas practicas
function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }else{

            //si el numero generado esta incluido en la lista
            if(listaNumerosSorteados.includes(numeroGenerado)){

                return generarNumeroSecreto();

            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
    }
}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;

}

// Esta funcion reinicia el juego
function reiniciarJuego() {

    //limpiar caja.
    limpiarCaja();
    //indicar mensaje de intervalo de numeros.
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego.
    //Estudiar setAttribute (espera dos parametros)
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
    
}

condicionesIniciales();






