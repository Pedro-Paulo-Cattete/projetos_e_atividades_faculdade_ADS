// Operações com String: toLowerCase e toUpperCase
/*
toLowerCase(): Converte todos os caracteres alfabéticos de uma string para minúsculas, mantendo os cacarateres não alfabéticos inalterados.
toUpperCase(): Converte todos os caracteres alfabéticos de uma string para maiúsculas, mantendo os cacarateres não alfabéticos inalterados.
*/

//String para usar de Exemplo:

let nome = "Pedro Paulo";
//toLowerCase
let nomeMinusculo = nome.toLowerCase();
console.log("Nome em minúsculo: " + nomeMinusculo);
//toUpperCase
let nomeMaiusculo = nome.toUpperCase();
console.log("Nome em maiúsculo: " + nomeMaiusculo);

//Exemplo com simbolos:
let stringComSimbolos = "Pedro Paulo, 2306!";
let minusculoSimbolos = stringComSimbolos.toLowerCase();
console.log("String com símbolos em minúsculo: ", minusculoSimbolos);

