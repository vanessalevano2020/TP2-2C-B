
const cantPares = (arr) =>{
    //Declaro  variables a utilizar
    let cantPares=0;
    let num1;
    let num2;
    
    //Ordeno la cadena, en este caso de menor a mayor
    arr.sort((a,b) => a-b);
    //Tomo los dos primeros valores y comparo
    if(arr.length>=2){

        num1 = arr.shift();
        num2 = arr.shift(); 
        do{
            if(num1===num2){
                cantPares ++;

                if(arr.length>=2){
                    num1= arr.shift();
                    num2= arr.shift();
                }
                
            } else{
                num1 = num2;
                if(arr.length>=1){
                    num2= arr.shift();
                }  
            }
        } while(arr.length>=1);
    }
    return cantPares;
}


let sock = [5,10,20,5,1,1,1,1];
console.log(sock);
console.log("Cantidad de Pares: " + cantPares(sock));