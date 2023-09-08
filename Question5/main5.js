let a = prompt('Entrez la valeur de a')
let b = prompt('Entrez la valeur de b')
let c = prompt('Entrez la valeur de c')


console.log('Voici l\'equation du segond dégre que nous devons resoudre')
console.log(a+'x² + ' + b+'x + ' + c )

console.log('LA SOLUTION EST ')

let delta = ''
 delta = (b*b) - 4*c
console.log('La valeur de delta est ' + delta);

if(delta > 0 ){

    let x1, x2, racine

    racine = Math.sqrt(delta)
    console.log(racine)
    x1 = -b + racine
    x2 = -b - racine

    console.log('La valeur de x1 vaut ' + x1)
    console.log('La valeur de x2 vaur ' + x2)

} else if(delta == 0){
    let x = ''
    console.log('x1 = x2  Car delta vaut ' + delta)
    x = (-b)/2*a

    console.log('La valeur de x est ' + x )
}else{
    console.log('La solution est egale à l\'ensemble vide car delta est negatif')
}

