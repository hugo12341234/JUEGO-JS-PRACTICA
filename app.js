
//let parrafo = document.querySelector('.texto__parrafo'); // Select the paragraph element, we can select it by class or label (.class or <p>)
//parrafo.innerHTML = ('Adivina el número secreto entre 1 y 10'); 
let numeroSecreto = 0;
let intentos = 0
let listaNumerosSorteados = []
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //give the option to the user to select the element thtey want to change fromt the HTML
    elementoHTML.innerHTML = texto; // assign the text to the element
    return;
    
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //the same thing than querySelector but is used to for ids
    //console.log(typeof(numeroDeUsuario))
    //console.log(typeof(numeroSecreto))
    console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);    //=== need to be the same type of variable
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`); //We can add a conditional when calling a function using a ternary operator. ? means if and : else
        document.getElementById('reiniciar').removeAttribute('disabled');   //when the game is over the attribute remove the disable from the button 'new game'
            
} else {
        if  (numeroDeUsuario > numeroSecreto ) {
            asignarTextoElemento('p','el numero es menor');
        } else {
            asignarTextoElemento('p','el numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

function limpiarCaja (){
    /*let valorCaja*/ document.querySelector('#valorUsuario').value = '';   //querySelector with # is used to select ids like getElementById
    //valorCaja.value = '';  //assign a value to valor caja
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(listaNumerosSorteados)
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){                          //if the number is in the list we need to generate another to play de game. the metod includees verify if one elements is already in the list or not
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego de numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);  
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
//asignarTextoElemento('h1', 'juego de numero secreto');
//asignarTextoElemento('p','indica un numero del 1 al 10');   



 