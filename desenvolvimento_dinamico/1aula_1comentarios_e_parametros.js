// Exemplo de comentário
/*
Comentários mais extensos, podem utilizar esse formato
*/

/**
 * Dentro desse espaço de comentário serve para criar documentação,
 * Exemplo:
 * 
 * @param {number} a - O numero que ira subtrair
 * @param {number} b - O numero a ser subtraído
 * @return {number} - O resultado da subtração
 * 
 * @example
 * // Exemplo de Uso:
 * let resultado = (10, 4);
 * console.log(resultado); // 6 
 */
function subtrair(a,b) {
    return a - b;
}

let resultadoSubtracao = subtrair(10, 4);
console.log(resultadoSubtracao) //Exibe 6

function somar(a, b){
    return a + b; //Retorna a soma dos dois números
}

let resultadoSoma = somar(40,2)
console.log(resultadoSoma) // Exibe 42


console.log("Hello, World!") // Aparece para o Usuário, Hello World!

