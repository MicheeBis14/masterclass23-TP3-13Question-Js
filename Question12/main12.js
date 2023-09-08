
let greatNb = 0
for (let index = 1; index <= 5; index++) {
    let nombre = prompt('Entrez le nombre n° ' + index)

    console.log(nombre)

    if (nombre > greatNb) {
        greatNb = nombre;
    }
}
console.log('Le plus grand nombre est ' + greatNb)
