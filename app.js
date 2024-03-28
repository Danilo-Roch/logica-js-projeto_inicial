alert('Bem vindo ao jogo do número secreto');

let numeroSecreto = math.floor(math.radom() * 5);
let tentativas = 2;

while (tentativas > 0){
let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));
if(numeroDigitado === numeroSecreto){
    alert('Parabéns, você acertou!');
    break; 
} else if(numeroDigitado > numeroSecreto){
    alert('Você digitou um número maior que o número secreto');
} else {
    alert('Você digitou um número menor que o número secreto');
}
    tentativas++;
    if(tentativas === 4){
    alert(`Suas tentativas acabaram`);
    } else if (tentativas <3){
         alert(`Você ainda tem tentativas ${4 - tentativas} tentativas`);
    }else{
        alert(`Você ainda tem tentativas ${4 - tentativas} tentativas`);
    }    
   
} 
  let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
  if (tentaivas < 4){
    alert(`Você acertou com ${tentativas} ${palavraTentativa} `)
  }


