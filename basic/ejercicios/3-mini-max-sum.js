let arr = [1,3,5,7,9];

const sumaN = (arr,N) =>{
    let suma=0;
    for(let i=0; i<N; i++){
        suma =suma + arr[i];
    }

    return suma;
}

const sumaNMin =(arr,N) =>{
    arr.sort((a,b) => a-b)
    return sumaN(arr,N);
}

const sumaNMax =(arr,N) =>{
    arr.sort((a,b) => b-a)
    return sumaN(arr,N);
}

console.log("La suma minima es " + sumaNMin(arr,4));
console.log("La suma maxima es " + sumaNMax(arr,4));