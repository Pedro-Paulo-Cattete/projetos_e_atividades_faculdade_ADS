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

console.log("\n")

//Funções Anônimas não possuem um nome diretamente associado a elas

let somarParametros = function(parametro1, parametro2) {
    console.log("Parâmetro 1: " + parametro1);
    console.log("Parâmetro 2: " + parametro2);

    let resultado = parametro1 + parametro2;

    console.log("resultado: " + resultado);

    return resultado;
};

// Chamada da função anônima através da variável
let resultadosomar = somarParametros(5, 10);
console.log("Resultado da chamada da função somarParametros: " + resultadosomar);

//Definindo uma função que aceita outra função como argumento
function executarFuncao(funcao, valor1, valor2){
    console.log("\nExecutando a função como argumento ou parâmetro: ")
    return funcao(valor1, valor2);
}
let resultadoExecucao = executarFuncao(somarParametros, 7, 3)
    console.log("Resultado da função passada como argumento: " + resultadoExecucao);

console.log("\n")

// Funções Arrow - São  uma sintaxe moderna e mais concisa, principalmente para casos de uso simples e call-backs

// Arrow em soma:
let somar = (a,b) => {
    return a+b;
};

console.log(somar(5, 3));

// Arrow em Multiplicação

let dobrar = n => n*2;

console.log(dobrar(5))

// Arrow em Callback de multiplicação

let numeros = [1, 2, 3, 4, 5];

let numerosdobrados = numeros.map( n => n*2 );

console.log(numerosdobrados);

// Arrow function com corpo de função mais complexo

let saudacao1 = (nome, idade) => {
    let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos`;
    return mensagem;
}

console.log(saudacao1("Pedro", 36))