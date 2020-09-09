
// Complete the isBalanced function below.
function isBalanced(s) {

    //Caracteres de Apertura y Cierre
    const PARENTESIS_A = '(';
    const PARENTESIS_C = ')';
    const LLAVE_A = '{';
    const LLAVE_C = '}';
    const CORCHETE_A = '[';
    const CORCHETE_C = ']';
    const YES = 'YES';
    const NO = 'NO'; 
    let i=0;                //Para recorrer la cadena
    let isBalanced = YES;  //indica si la cadena está balanceada
    var pila = [];         //para apilar los caracteres de apertura
    let c;                  //caracter leido de la cadena
    let a;                  //elemento top de la pila

    while(i<s.length && isBalanced){
        c = s.charAt(i); //Leo un caracter del string arranca desde la posición
        if(c == PARENTESIS_A || c == LLAVE_A || c == CORCHETE_A){
            pila.push(c);
            
        }else {
            if(c == PARENTESIS_C || c == LLAVE_C ||c == CORCHETE_C){
                a = pila[pila.length-1]; 

                switch (c) {
                    case PARENTESIS_C:
                        if(a == PARENTESIS_A){
                            pila.pop();
                        }else{
                            isBalanced = NO;
                        }
                        break;
                    case CORCHETE_C:
                        if(a == CORCHETE_A){
                            pila.pop();
                        }else{
                            isBalanced = NO;
                        }
                        break;    
                        
                    case LLAVE_C:
                        if(a == LLAVE_A){
                            pila.pop();
                        }else{
                             isBalanced = NO;
                        }
                        break;
                    default:
                        break;
                }
            }         
        }
        i++;
    }

    //Para asegurarme que la pila esté vacía
    if(pila.length>0){
        isBalanced = NO; 
    }
    return isBalanced;
}

// TESTS
console.log(isBalanced('') == 'YES' )
console.log(isBalanced('([') == 'NO' )
console.log(isBalanced(']]]]}') == 'NO');
console.log(isBalanced('[[]()()]') == 'YES');
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES')
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
