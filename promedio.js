let suma = 0, error;
const nombre = prompt("Ingrese tu nombre: ");
const materias = prompt("¿Cuantas materias tienes? ");

for (var i = 1; i <= materias ; i++)
do {
  let calificacion = parseInt(prompt("Ingresa la calificación " + i+ ": "));

  if(calificacion>10 || calificacion<0){
    error = 1;
  }else
  error=0;
    suma = suma+ calificacion;
} while (error ==1);

let resu = suma / materias;
console.log ("Gracias: " + nombre + ", Tu calificación es de: " + resu);
