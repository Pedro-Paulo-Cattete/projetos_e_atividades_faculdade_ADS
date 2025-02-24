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

