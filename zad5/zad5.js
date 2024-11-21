fibbonacci = function(n){
    if(n == 1 || n == 2){
        return 1;
    }
    else{
        return fibbonacci(n-2) + fibbonacci(n-1);
    }
}

console.log(fibbonacci(11));