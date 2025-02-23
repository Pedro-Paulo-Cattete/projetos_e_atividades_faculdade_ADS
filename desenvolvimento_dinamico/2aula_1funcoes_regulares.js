// Funções Regulares são Funções comuns

// Definindo funções regulares com 2 parametros:
function soma(a, b) {
    return a + b;
}

//Chamando a função soma e armazenando resultado em uma variável
let resultado = soma(13,29);

//Exibindo o resultado da função soma
console.log("O resultado da soma é: " + resultado);
//.log também é uma função regular


saudacao("Pedro");

function saudacao(nome){
    console.log("Olá, " + nome + "!")
}

mensagem();

function mensagem() {
    console.log("Esta é uma mensagem de boas vindas!")
}