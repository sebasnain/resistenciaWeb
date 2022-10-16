
let seleccionador1 = document.getElementById("seleccionador1");
let seleccionador2 = document.getElementById("seleccionador2");
let seleccionador3 = document.getElementById("seleccionador3");
let seleccionador4 = document.getElementById("seleccionador4");


function valorPorCodigo(banda1 ,banda2 ,banda3){
    let resultado1 = banda1 + banda2 ;
    let resultado2 = Number(resultado1)
    let resultado3 = resultado2 * banda3;
    console.log(resultado3)
    document.getElementById("texDisplay").textContent = resultado3 + "-ohm";
}

console.log(seleccionador1.value)
console.log(seleccionador2.value)
console.log(seleccionador3.value)

let prueba = valorPorCodigo(seleccionador1.value,seleccionador2.value,seleccionador3.value);

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



