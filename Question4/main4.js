let year = prompt('Entrez une annee')

if( year % 4 == 0 && year % 100 != 0){

    console.log('OUI ' + year +  ' est une année bissextile')
    
}else{
    console.log(' NON ' + year +  ' n\'est pas une année bissextile')
}