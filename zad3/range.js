numberList = function(a, b){
    const tablica = [];
    if(a <= b){
        for(i = a; i <=b; i++){
            tablica.push(i);
        }
    }
    else{
        for(i = a; i >= b; i--){
            tablica.push(i);
        }
    }
    return tablica;
}

console.log(numberList(1, 10));
console.log(numberList(10, 1));