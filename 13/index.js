const disjuntores = [false, false, true, false, false, true, false, false];
let contador = 0;

for (let i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i]) {
        console.log(contador);
    }
    contador ++;
}
