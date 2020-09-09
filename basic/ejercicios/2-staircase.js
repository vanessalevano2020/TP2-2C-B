const concatNCaracter = (c,n) => {
    cadena = "";

    for(let i = 0; i<n ; i++){
        cadena = cadena + c;
    }

    return cadena;
}

const printStaircase = (c1,c2,n) =>{
    linea=n;
    for (let i = 0; i < n; i++){ 
        linea--;
        console.log(concatNCaracter(c1,linea) + concatNCaracter(c2,n-linea));
        
    };
};

printStaircase(" ","#",6);