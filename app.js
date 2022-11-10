let black = "0";
let brown = "1";
let red = "2";
let orange="3";
let yellow = "4";
let green= "5";
let blue = "6";
let purple = "7";
let grey = "8";
let white = "9";

let seleccionador1 = document.getElementById("seleccionador1");


function valorPorCodigo(banda1 ,banda2 ,banda3){
    let resultado1 = banda1 + banda2 ;
    let resultado2 = Number(resultado1)
    let resultado3 = resultado2 * banda3;
    console.log(resultado3)
    document.getElementById("texDisplay").textContent = resultado3 + "-ohm";
}

function modificarColorB1(colorSeleccionado1){
    let banda_1 = document.querySelector(".banda-1");
   let seleccionarColor = colorSeleccionado1.value;
   banda_1.style.background = seleccionarColor;
}

function modificarColorB2(colorSeleccionado2){
    let banda_1 = document.querySelector(".banda-2");
    var seleccionarColor = colorSeleccionado2.value;
   banda_1.style.background = seleccionarColor;
}

function modificarColorB3(colorSeleccionado3){ 
    let banda_1 = document.querySelector(".banda-3");
    let seleccionarColor = colorSeleccionado3.value;
   banda_1.style.background = seleccionarColor;
}
function modificarColorB4(colorSeleccionado4){
    let banda_1 = document.querySelector(".banda-4");
    let seleccionarColor = colorSeleccionado4.value;
   banda_1.style.background = seleccionarColor;
    
    
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



