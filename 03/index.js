const numeros = [54, 22, 14, 87, 10, 284];
let contador = 0;
let encontrado = false;

for(let i = 0; i < numeros.length;i++) {
    if (numeros[i] != 10) {
        contador++;
    } else {
        encontrado = true;
        console.log(contador);
        contador++;
    }
}
if (encontrado == false) {
    console.log('-1');
}