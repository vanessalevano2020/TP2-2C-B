const sumaN = (arr,N) =>{
    let suma=0;
    for(let i=0; i<N; i++){
        suma =suma + arr[i];
    }

    return suma;
}

let arr = [1,3,5,7,9];
console.log ("La suma de los valores  del array = " + sumaN(arr, arr.length));