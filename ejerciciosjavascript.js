console.log("Ejercicios Angie Martinez Ramirez ada_hack295")
console.log("Inicia el ejercicio 1");

const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ]; 
  for (var i = 0 ; i < ejercicio1.length; i++) {
if(ejercicio1[i]%2==1){
    console.log(`El numero ${ejercicio1[i]} es primo`);
    }
}


console.log("Inicia el ejercicio 2")

const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];

  const admitirPaso = (persona) => {
      if (persona.edad >= 18) {
          if (persona.esFamiliar ==true){
              console.log(`Adelante puedes pasar ${persona.nombre}`);
          }
      }
  }

  ejercicio2.forEach((persona) => {
      admitirPaso(persona);
  });

console.log ("Inicia el ejercicio 3");

function fibonacci(numero)
{
    let numeros= [0, 1];
    for (let i = 2; i < numero; i++){
        numeros[i] = numeros[i -2] + numeros[i-1];
    }
    return numeros;
}

console.log(fibonacci(50));
console.log("Se terminan los ejercicios");
