alert('Bem vindo ao jogo do número secreto');

let numeroSecreto = math.floor(math.radom() * 5);
alert(`O número secreto é ${numeroSecreto}`);

let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));

if(numeroDigitado === numeroSecreto){
    alert('Parabéns, você acertou!');
} else if(numeroDigitado > numeroSecreto){
    alert('Você digitou um número maior que o número secreto');
} else {
    alert('Você digitou um número menor que o número secreto');
}
