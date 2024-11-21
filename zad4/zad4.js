const tab = [];
sum = function(tab){
    let suma = 0;
    for(i = 0; i < tab.length; i++){
        suma += tab[i];
    }
    return suma;
}

console.log(sum([3, 7, 30]));