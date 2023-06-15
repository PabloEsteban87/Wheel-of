let alumnos = [
  "Ana",
  "Pablo",
  "Dulce",
  "Ivan",
  "Maria Elena",
  "Jorge",
  "Maria",
  "Cristina",
  "Txema",
  "Giacomo",
  "Rocio",
  "Laura",
  "Maria Fernandez",
  "Irene",
  "Natalia",
  "Mario",
  "Guillermo",
  "Maria Espartero",
  "Maria Victoria",
  "Jose luis",
  "Cristian",
  "Sidi",
  "Samuel",
  "Antonio",
  "Carlos",
  "Josep",
  "Jesus",
  "Javier",
];

function seleccionarCartas() {
  const cartas = document.getElementsByClassName("cartas");
  return cartas;
}

function añadirAlumnos(carta1, alumnos, indice) {
  let alumno = prompt("Pon el nuevo alumno:", "");
  alumnos.pop();
  if (indice == 0) {
    alumnos.splice(0, 0, alumno);
    carta1[indice].innerHTML = alumnos[indice];
  } else {
    console.log(indice);
    alumnos.splice(indice, 0, alumno);
    carta1[indice].innerHTML = alumnos[indice];
  }
}

function modificarAlumnos(carta1, alumnos) {
  let alumno = prompt("Pon el alumno a modificar:", "");
  let alumno2 = prompt("Pon el alumno nuevo:", "");
  let modificaralumno = alumnos.indexOf(alumno);
  carta1[modificaralumno].innerHTML = alumno2;
}

function borrarAlumnos(carta1, alumnos) {
  let alumno = prompt("Pon el alumno a borrar:", "");
  let modificar_alumno = alumnos.indexOf(alumno);
  alert("Alumno borrado");
  carta1[modificar_alumno].innerHTML = "";
}

function numeroAleatorio() {
  let numero = Math.floor(Math.random() * 28);
  return numero;
}

function numeroAleatoriaCasas() {
  let array = [28];
  for (let numero = 0; numero <= 28; numero++) {
    let j = parseInt(Math.floor(Math.random() * 28));
    array.push(j);

    const indice = array.indexOf(j);
    array[indice] = numero;
    if (array[indice] != j && array.length == 28) {
      console.log(array);
      return array;
    } else {
      continue;
    }
  }
}

function recorrerAlumnos(alumnos, carta1) {
  for (let i = 0; i < alumnos.length; i++) {
    carta1[i].innerHTML = alumnos[i];
    carta1[i].classList.add("estilos-array-alumnos");
  }
}

function cartasDirector(carta1, alumnos, numero) {
  for (let i = 0; i <= alumnos.length; i++) {
    let numeroint = parseInt(numero);
    if (i == numeroint) {
      carta1[i].animate(
        [
          { transform: "scale(0.2)" },
          { transform: "scale(1.6)" },
          { transform: "scale(1)" },
        ],
        {
          easing: "linear",
          iterations: 1,
          duration: 5000,
        }
      );

      carta1[i].classList.remove("display-none");
      carta1[i].innerHTML = "Director: " + alumnos[i];
      carta1[i].classList.add("director");
      setTimeout(() => {
        alert("Director: " + alumnos[i]);
      }, "7000");
      eleccionDirector(alumnos, numero);
    }
  }
}

function cartasGryffindor(carta1, alumnos, numero2) {
  const texto = document.getElementsByClassName("alumnos-gryffindor");
  let numeros = numero2.slice(0, 7);
  console.log(numeros);
  for (let i = 0; i <= 6; i++) {
    let j = numeros[i];
    carta1[j].innerHTML = "Gryffindor: " + alumnos[j];
    carta1[j].classList.add("estilos-array-alumnos");
    texto[i].innerHTML = alumnos[j];
    carta1[j].animate(
      [
        { transform: "scale(1.1)" },
        { transform: "scale(1)" },
        { transform: "scale(0.1)" },
      ],
      {
        easing: "linear",
        iterations: 1,
        duration: 5000,
      }
    );
    setTimeout(() => {
      carta1[j].classList.add("display-none");
      carta1[j].classList.add("estilos-carta-Gryffindor");
    }, "5000");
  }
}

function cartasRavenclaw(carta1, alumnos, numero2) {
  const texto = document.getElementsByClassName("alumnos-Ravenclaw");
  let numeros2 = [];
  numeros2 = numero2.slice(7, 14);
  console.log(numeros2);
  let y = 0;
  for (let i = 0; i <= 6; i++) {
    let j = numeros2[i];
    carta1[j].innerHTML = "Ravenclaw: " + alumnos[j];
    carta1[j].classList.add("estilos-array-alumnos");
    texto[y++].innerHTML = alumnos[j];
    carta1[j].animate(
      [
        { transform: "scale(1.1)" },
        { transform: "scale(1)" },
        { transform: "scale(0.1)" },
      ],
      {
        easing: "linear",
        iterations: 1,
        duration: 5000,
      }
    );
    setTimeout(() => {
      carta1[j].classList.add("display-none");
      carta1[j].classList.add("estilos-carta-Ravenclaw");
    }, "5000");
  }
}

function cartasHufflepuff(carta1, alumnos, numero2) {
  let numeros3 = [];
  const texto = document.getElementsByClassName("alumnos-HUFFLEPUFF");
  numeros3 = numero2.slice(14, 21);
  console.log(numeros3);
  let y = 0;
  for (let i = 0; i <= 6; i++) {
    let j = numeros3[i];
    carta1[j].innerHTML = "Hufflepuff: " + alumnos[j];
    carta1[j].classList.add("estilos-array-alumnos");
    texto[y++].innerHTML = alumnos[j];
    carta1[j].animate(
      [
        { transform: "scale(1.1)" },
        { transform: "scale(1)" },
        { transform: "scale(0.1)" },
      ],
      {
        easing: "linear",
        iterations: 1,
        duration: 5000,
      }
    );
    setTimeout(() => {
      carta1[j].classList.add("display-none");
      carta1[j].classList.add("estilos-carta-Hufflepuff");
    }, "5000");
  }
}

function cartasSlytherin(carta1, alumnos, numero2) {
  let numeros4 = [];
  const texto = document.getElementsByClassName("alumnos-SLYTHERIN");
  numeros4 = numero2.slice(21, 29);
  console.log(numeros4);
  let y = 0;
  for (let i = 0; i <= 6; i++) {
    let j = numeros4[i];
    carta1[j].innerHTML = "Slytherin: " + alumnos[j];
    carta1[j].classList.add("estilos-array-alumnos");
    texto[y++].innerHTML = alumnos[j];
    carta1[j].animate(
      [
        { transform: "scale(1.1)" },
        { transform: "scale(1)" },
        { transform: "scale(0.1)" },
      ],
      {
        easing: "linear",
        iterations: 1,
        duration: 5000,
      }
    );
    setTimeout(() => {
      carta1[j].classList.add("display-none");
      carta1[j].classList.add("estilos-carta-Slytherin");
    }, "5000");
  }
}

function ejecucion() {
  let f = 0;

  const carta1 = seleccionarCartas();
  console.log(carta1);
  let numero = numeroAleatorio();
  let numero2 = numeroAleatoriaCasas();

  setTimeout(() => {
    recorrerAlumnos(alumnos, carta1);
    cartasGryffindor(carta1, alumnos, numero2);
    cartasRavenclaw(carta1, alumnos, numero2);
    cartasHufflepuff(carta1, alumnos, numero2);
    cartasSlytherin(carta1, alumnos, numero2);
    cartasDirector(carta1, alumnos, numero);
  }, "5000");
  const anadir = document.getElementById("anadir");
  anadir.addEventListener("click", function () {
    añadirAlumnos(carta1, alumnos, f++);
  });
  const modificar = document.getElementById("modificar");
  modificar.addEventListener("click", function () {
    modificarAlumnos(carta1, alumnos);
  });
  const borrar = document.getElementById("borrar");
  borrar.addEventListener("click", function () {
    borrarAlumnos(carta1, alumnos);
  });
}

ejecucion();
