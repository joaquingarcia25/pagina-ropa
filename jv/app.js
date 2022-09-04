let primeranota = 0;
let segundanota = 0;

function notas (primeranota, segundanota, operacion) {
        switch (operacion) {
          case "+":
            return resultado = primeranota + segundanota;
          break;
          case "/":
            return resultado / 2;
          break;
            default:
              return 0;
          break;
        }} 
        console.log(notas(7, 8, "+"))
        console.log(notas(7, 8, "/"))

    for (let i = 2;i <= 15; i++){
     let resultado = number * i;
     alert(`${number} x ${i} = ${resultado}`)
         }

         let precio = prompt("Ingrese el precio del producto: ");
         if (precio > 150) {
           alert("El producto es muy costoso");
         } else if (precio >= 70) alert("El producto es caro");
         else {
           alert("El precio del producto es accesible");
         }