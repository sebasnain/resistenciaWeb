
let negro = "0";
let marron = "1";
let rojo = "2";
let naranja="3";
let amarrillo = "4";
let verde = "5";
let azul = "6";
let violeta = "7";
let gris = "8";
let blanco = "9";



function valorPorCodigo(banda1 ,banda2 ,banda3){
    let resultado1 = banda1 + banda2 ;
    let resultado2 = Number(resultado1)
    let resultado3 = resultado2 * banda3;
    console.log(resultado3)
    document.getElementById("texDisplay").textContent = resultado3 + "-ohm";
}

let prueba = valorPorCodigo(verde,blanco,10);





