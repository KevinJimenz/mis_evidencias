const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

//En estas variables se guardan los valores que tienen 
//por determinado los input
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//Se muestran los valores en pantalla
//es decir, los valores que tienen los input
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

//Esta funcion recibe 3 valores
//los cuales reprensentan cada valor de los colores RGB
//Con base a esos valores se cambia el color de fondo en tiempo real
function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Para actualizar Red (Rojo).

//Se les agrega un evento (change) al input
//Este evento llama a una funcion callback la cual guarda el valor
//que se obtiene del evento change en una variale, luego se muestra en la pantalla 
//en tiempo real y para finalizar se llama la funcion actualizarColor y se le pasa como parametro
//el valor que se guardo en la variable
inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.textContent = rojo;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Green (Verde).
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul).
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});
