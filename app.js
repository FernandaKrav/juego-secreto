let numeroSecreto = generarNumeroSecreto();
let intentos=1;
let listaNumerosSorteados = [] ;
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el Numero en ${intentos} ${(intentos=== 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
         //Si el Usuario no acerto

        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El Numero Secreto es MENOR');
        }else{
            asignarTextoElemento('p', 'El Numero Secreto es MAYOR');
        }
intentos ++;
limpiarCaja();


    }

    return;
}

function limpiarCaja(){
document.querySelector('#valorUsuario').value='';


}

function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;    
   //Si el nro generado esta incluido en la lista

if(listaNumerosSorteados.length == numeroMaximo){
asignarTextoElemento('p', 'Ya se cortearon todos los Numeros posibles');

}else{

   if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();

   }else{
    listaNumerosSorteados.push(numeroGenerado)
    return numeroGenerado;
   }
}
}

asignarTextoElemento('h1', 'Juego del Numero Secreto');
asignarTextoElemento('p', `Escoge un Numero del 1 al ${numeroMaximo}`);