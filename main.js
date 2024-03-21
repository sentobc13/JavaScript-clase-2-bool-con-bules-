// Booleanos

let bool1 = true
let bool2 = false

let booleanoAnd = bool1 && bool2;
console.log(booleanoAnd);

let booleanoOR = bool1 || bool2;
console.log(booleanoOR);

let booleanoNot = !bool1;
console.log(booleanoNot);

let booleanomix2 = (bool1 || (!bool1 && !bool2));
let booleanoMix0 = booleanoOR && booleanomix2;
console.log(booleanoMix0);

// Operadores

let valorDivision = 17 / 3;
console.log(valorDivision.toFixed(2));

let valorResto = 17 % 7;
console.log(valorResto);

// Lógica de programación

let a = 9;
let b = "9";

if (a == b) {
    console.log("son iguales");
} else {
    console.log("no son iguales");
}

if (a === b) {
    console.log("son estrictamente iguales");
} else {
    console.log("no son estrictamente iguales");
}

let mochila = ['1', '2', '3', 4, 5];
console.log(mochila.length < 10);
if (mochila.length > 10) {
    console.log("no puedo cargar con tantas cosas")
} else if (mochila.length <= 10 && mochila.length >= 2) {
    console.log("que bien voy con mi mochila");
} else {
    console.log("creo que no necesito mochila");
}

let contarhasta10 = 0

for (let i = 0; i < 10; i++) {
    console.log("Vuelta nº" + i);
    //contarhasta10 = contarhasta10+1 (esto es igual a contarhasta10 += 1)
    contarhasta10 += 1
    console.log(contarhasta10);
}

let diafestivo = true

let trabjo = diafestivo == true ? console.log("hoy no trabajo") : console.log("hoy trabajo");

let arrayBucle = []

for (let i = 4; i <= 18; i++) {
    console.log("nº" + i);
    arrayBucle.push(i);
}
console.log(arrayBucle);

let resultado = 0
/*for (let index = 4; index <=18; arrayBucle.length; index++) {
    const element = array[index];
    console.log(element);

}*/
for (const element of arrayBucle) {
    resultado += element
}
// arrayBucle.forEach(element => {
//     resultado += element
// });
console.log(resultado);

let nuevoarray = ["Con", "Sofia", "aprendiendo", "bucles"];

for (let element of nuevoarray) {
    console.log(element);
}

for (let element in nuevoarray) {
    console.log(nuevoarray[element]);
}

let i = 1

while (i <= 20) {
    if (i % 3 === 0) {
        console.log("patata");
    } else {
        console.log(i);
    }
    i++;

}

// Extras

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

let empiezaporJ = []

for (let i of gente) {
    if (i.nombre[0] == "J") {
        empiezaporJ.push(i)

    }

}
console.log(empiezaporJ);


let personasConJMenoresDe40 = [];

for (let i = 0; i < gente.length; i++) {
  const persona = gente[i];
  if (persona.nombre.startsWith("J") && persona.edad < 40) {
    personasConJMenoresDe40.push(persona);
  }
}

console.log(personasConJMenoresDe40);


