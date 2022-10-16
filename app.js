/* let black = "0";
let brown = "1";
let red = "2";
let orange="3";
let yellow = "4";
let green= "5";
let blue = "6";
let purple = "7";
let grey = "8";
let white = "9"; */

/* Me traigo los seleccionadores para saber qué opción selecciona el usuario */
let seleccionador1 = document.getElementById("seleccionador1");
let seleccionador2 = document.getElementById("seleccionador2");
let seleccionador3 = document.getElementById("seleccionador3");
let seleccionador4 = document.getElementById("seleccionador3");

/* Me busco el botón de calcular el valor, que va a ejecutar la función valorPorCodigo */
let botonCalcularResistencia = document.getElementById("boton-calcular-valor");

/* Llamo a la función valor por código cuando toco el botón. */
botonCalcularResistencia.addEventListener('click', ()=> {
    valorPorCodigo(seleccionador1.value, seleccionador2.value, seleccionador3.value, seleccionador4.value);
})


function valorPorCodigo(banda1 ,banda2 ,banda3){
    let resultado1 = banda1 + banda2 ;
    let resultado2 = resultado1 * banda3;
    document.getElementById("texDisplay").textContent = resultado2 + "-ohm";
}

function modificarColorB1(colorSeleccionado1){
    let banda_1 = document.querySelector(".banda-1");
    let seleccionarColor = Number(colorSeleccionado1.value) + 1;
    banda_1.style.background = colorSeleccionado1.options[seleccionarColor].dataset.hex;
}

function modificarColorB2(colorSeleccionado2){
    let banda_2 = document.querySelector(".banda-2");
    let seleccionarColor = Number(colorSeleccionado2.value) + 1;
    banda_2.style.background = colorSeleccionado2.options[seleccionarColor].dataset.hex;
}

function modificarColorB3(colorSeleccionado3){
    let banda_3 = document.querySelector(".banda-3");
    let seleccionarColor = Number(colorSeleccionado3.value) + 1;
    banda_3.style.background = colorSeleccionado3.options[seleccionarColor].dataset.hex;
}

function modificarColorB4(colorSeleccionado4){
    let banda_4 = document.querySelector(".banda-4");
    let seleccionarColor = Number(colorSeleccionado4.value) + 1;
    banda_4.style.background = colorSeleccionado4.options[seleccionarColor].dataset.hex;
}

        



/* 

- Cambiar los value en formato string por los numeros para evitar las variables (negro, marron, rojo, naranja, etc) en el js
- Agregarle ids a los select (ej. seleccionador1, seleccionador2, seleccionador3)
- Almacenar en 3 variables cada uno de los seleccionadores con document.getElementById()
- valorPorCodigo(seleccionador1.value, seleccionador2.value, seleccionador3.value);
- Armar un boton para ejecutar la función valorPorCodigo()
- EXTRA:
-- Agregar una opcion extra para que aparezca "seleccionar un color" en vez de que aparezca el texto "negro";
-- Hacer dinámico el texto "el valor de tu resistencia es" para que diga "seleccioná los colores de la resistencia"
   si todavia no se apretó el boton de que ejecuta la funcion.

*/



