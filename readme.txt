
//variables

//let nombre = "joaquin" //string
//console.log(nombre)
//let edad = 18 //number
//console.log(edad)
//let estudiante = true; //boolean
//console.log(estudiante)
//const apellido = "garcia"
//console.log(apellido)
    //dif let const//
    //puede ser inicializadas vacias//
    //pueden ser redeclaradas//
    //las variables ponerlas en MAY es buena practica//
//let nombrecompleto = nombre + " " + apellido
//console.log(nombrecompleto)

//let numero1 = 35
//let numero2 = -20

//let resultado = numero1 + " " + numero2
//console.log(resultado)

//let primernombre = prompt ("ingrese su nombre")
//alert ("!Hola Joaquin")

//let numero4 = Number(prompt("ingresa el primer number"))
//let numero5 = Number(prompt("ingresa el segundo number"))

//let resultado3 = numero4 + numero5 
//alert(resultado3)

//CLASE 2
/*
OPERADORES LOGICOS
>mayor
<menor
>= mayor o igual
<= menor o igual
!not
&& and
*/

/*
const dinero5 = 600;
const totalapagar = 500;
if (dinero >= totalapagar) {
    console.log("podemos pagar")
} else {
     console.log("fondos insuficientes")
}
*/

/*
//switch

/*
const metodopago = "efectivo";

switch (metodopago) {
    case "efectivo":
        console.log("pagaste en efectivo")
        break;
    case "cheque":
        console.log("pagaste con un cheque")
        break;
    case "tarjeta":
            console.log("pagaste con tarjeta")
        break; 
    default:
         console.log("lo siento no tenemos ese metodo de pago")
}   
alt 96 atajo/ let ropa = prompt
pedido: ropa{}
*/

const dinero = 300;
const totalapagar = 500;
const tarjeta = false;

if (dinero >= totalapagar) {
    console.log("podemos pagar");
} else if (tarjeta) {
    console.log("puedo pagar porque tengo tarjeta")
} else{
    console.log("fondos insuficientes")
}

let option = prompt(elija una opcion:
1:garra
2:batman
case "1";
 console.log("garra")
 break
 case "2";
 console.log("batman")
 break


 const usuario = false;
const puedopagar = false;

if (usuario && puedopagar) {
    console.log("no puedes comprar");
}else if (!usuario && !puedopagar) {
    console.log("puedes pagar")
}else{
    console.log("")
}

do while

for (let i = 0 i > 10; i++){
     alert(`el valor de i es ${i}`)
}