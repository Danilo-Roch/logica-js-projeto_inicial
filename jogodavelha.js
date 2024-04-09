// Definindo variáveis para representar o jogo da velha
let tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let jogadorAtual = 'X';
let jogoEncerrado = false;

// Função para imprimir o tabuleiro atual
function imprimirTabuleiro() {
    console.log("  0 1 2");
    for (let i = 0; i < 3; i++) {
        let linha = i + " ";
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '') {
                linha += "- ";
            } else {
                linha += tabuleiro[i][j] + " ";
            }
        }
        console.log(linha);
    }
}

// Função para verificar se houve um vencedor
function verificarVencedor() {
    // Verifica linhas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== '' && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][0] === tabuleiro[i][2]) {
            return true;
        }
    }
    // Verifica colunas
    for (let j = 0; j < 3; j++) {
        if (tabuleiro[0][j] !== '' && tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[0][j] === tabuleiro[2][j]) {
            return true;
        }
    }
    // Verifica diagonais
    if (tabuleiro[0][0] !== '' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[0][0] === tabuleiro[2][2]) {
        return true;
    }
    if (tabuleiro[0][2] !== '' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[0][2] === tabuleiro[2][0]) {
        return true;
    }
    return false;
}

// Função para verificar se houve empate
function verificarEmpate() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

// Função para processar a jogada do jogador
function jogar(linha, coluna) {
    if (!jogoEncerrado && tabuleiro[linha][coluna] === '') {
        tabuleiro[linha][coluna] = jogadorAtual;
        imprimirTabuleiro();
        if (verificarVencedor()) {
            console.log(`O jogador ${jogadorAtual} venceu!`);
            jogoEncerrado = true;
        } else if (verificarEmpate()) {
            console.log("Empate!");
            jogoEncerrado = true;
        } else {
            jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
        }
    } else {
        console.log("Jogada inválida. Por favor, tente novamente.");
    }
}
