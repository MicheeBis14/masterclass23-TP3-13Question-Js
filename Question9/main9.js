let multi = prompt("Entrez le multiplicateur ")
let nombre = prompt("Entrez le plagia ")


let maxMulti = parseInt(multi)
let int = parseInt(nombre)

console.log('La table de multiplication par ' + maxMulti + ' vaut :')
for (let index = 1; index <= int; index++) {

        let result = 0 
        result = index * maxMulti
        console.log(index + ' * ' + maxMulti + ' = ' + result)

     

        
    
    
}

