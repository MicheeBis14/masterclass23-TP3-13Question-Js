let a = prompt('Saisissez un nombre pour la première variable please')
let b = prompt('Saisissez un autre nombre pour la deuxième variable')

console.log('La valeur de a est ' + a)
console.log('La veleur de b est ' + b )

a = [b, b = a][0];

console.log('Voici les nouvelles valeurs de a et b après permutation')
console.log('La valeur de a est ' + a)
console.log('La veleur de b est ' + b )

