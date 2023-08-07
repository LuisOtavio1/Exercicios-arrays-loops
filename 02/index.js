const letras = ["A", "a", "B", "C", "E", "e"];
let contador = 0;
for(letra of letras) {
    if(letra === "E" || letra === "e") {
        contador++;       
    }
}
if(contador == 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else {
    console.log(`Foram encontradas ${contador} letras "E" ou "e".`);
}
