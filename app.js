/*  Variables: nombre que le damos a las cosas que gusradan info para no volver a escribir cosas muchas veces.
no se pueden poner numeros ni espacios adelante de las variables, no se escribe con espacios entre las palabras del nombre de las variables.
con:
 let
 const


*/


// en la seleccion de los elementos : si hay dos elementos que cumplen la misma definicion, agarra al primero que aparece, de arriba para abajo

let puntajesUsuaria = document.querySelector(".puntaje-usuaria p");
let puntajesComputadora = document.querySelector(".puntaje-computadora p")

let puntosUsuaria = 0;
let puntosComputadora = 0;

let eleccionComputadora = "";
let eleccionUsuaria = "";

let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel")
let botonTijera = document.querySelector(".tijera")

let resultadoTexto = document.querySelector(".resultado")

let manoUsuaria = document.querySelector(".mano-usuaria")
let manoComputadora = document.querySelector(".mano-computadora")
let tablero = document.querySelector(".tablero")

botonPiedra.onclick = () => {
  tablero.classList.add("jugando");
  setTimeout(() => {
    tablero.classList.remove("jugando")
    eleccionUsuaria = "piedra";
    manoUsuaria.src = "./assets/piedra_ada.png"
    obtenerEleccionComputadora();
    decidirPuntaje();
  }, 2000)
}

botonPapel.onclick = () => {
  tablero.classList.add("jugando");
  setTimeout(() => {
    tablero.classList.remove("jugando")
    eleccionUsuaria = "papel";
    manoUsuaria.src = "./assets/papel_ada.png"
    obtenerEleccionComputadora();
    decidirPuntaje();
  }, 2000)
}

botonTijera.onclick = () => {
  tablero.classList.add("jugando");
  setTimeout(() => {
    tablero.classList.remove("jugando")
    eleccionUsuaria = "tijera";
    manoUsuaria.src = "./assets/tijera_ada.png"
    obtenerEleccionComputadora();
    decidirPuntaje();
  }, 2000)
}

const obtenerEleccionComputadora = () => {
  let numeroAlAzar = Math.floor(Math.random() * 3)
  if (numeroAlAzar == 0) {
    eleccionComputadora = "piedra"
    manoComputadora.src = "./assets/piedra_computadora.png"
  }
  else if (numeroAlAzar == 1) {
    eleccionComputadora = "papel"
    manoComputadora.src = "./assets/papel_computadora.png"
  }
  else {
    eleccionComputadora = "tijera"
    manoComputadora.src = "./assets/tijera_computadora.png"
  }
}

const decidirPuntaje = () => {
  if (eleccionComputadora == "piedra") {
    if (eleccionUsuaria == "piedra") {
      resultadoTexto.textContent = "Empate!"
    }
    else if (eleccionUsuaria == "papel") {
      resultadoTexto.textContent = "Ganaste :)"
      puntosUsuaria++
      puntajesUsuaria.textContent = puntosUsuaria;
    }
    else {
      puntosComputadora++
      puntajesComputadora.textContent = puntosComputadora;
      resultadoTexto.textContent = "Perdiste :("
    }
  }
  else if (eleccionComputadora == "papel") {
    if (eleccionUsuaria == "papel") {
      resultadoTexto.textContent = "Empate!"
    }
    else if (eleccionUsuaria == "tijera") {
      resultadoTexto.textContent = "Ganaste :)"
      puntosUsuaria++
      puntajesUsuaria.textContent = puntosUsuaria;
    }
    else {
      puntosComputadora++
      puntajesComputadora.textContent = puntosComputadora;
      resultadoTexto.textContent = "Perdiste :("
    }
  }
  else if (eleccionComputadora == "tijera") {
    if (eleccionUsuaria == "tijera") {
      resultadoTexto.textContent = "Empate!"
    }
    else if (eleccionUsuaria == "piedra") {
      resultadoTexto.textContent = "Ganaste :)"
      puntosUsuaria++
      puntajesUsuaria.textContent = puntosUsuaria;
    }
    else {
      puntosComputadora++
      puntajesComputadora.textContent = puntosComputadora;
      resultadoTexto.textContent = "Perdiste :("
    }
  }
}
