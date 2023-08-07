const numeros = [8, 11, 4, 1];
let maior = 0;
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {    
    if (maior < numeros[i]) {
        maior = numeros[i];
    }
    if (menor > numeros[i]) {
        menor = numeros[i];
    }
}

console.log(`A diferença é ${maior - menor}`);
