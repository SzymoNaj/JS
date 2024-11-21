

palindrom = function(text){
    if(text == text.split("").reverse().join("")){
        return("tekst jest palindromem");
    }
    else{
        return("tekst nie jest palindromem");
    }

}

console.log(palindrom("kajak"));
console.log(palindrom("aaasabasaaa"));
console.log(palindrom("aaadddd"));