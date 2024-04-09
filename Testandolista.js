let listaNumerosDigitados = [1, 2, 3 ];                     

for(let i = 0; i < 5; i++){
    let numeroDigitado = parseInt(prompt("Digite um número"));
    // listaNumerosDigitados.push(numeroDigitado);
    listaNumerosDigitados[i] = numeroDigitado;
    alert(listaNumerosDigitados[i]);
}