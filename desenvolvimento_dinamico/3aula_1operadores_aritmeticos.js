// Operadores aritméticos
/*
Adição(+)
Subtração (-)
Multiplicação (*)
Divisão (/)

Módulo (%) - Resto da Divisão
Exponencial (**)
Incrementar (**) - Acrescentar uma unidade no valor que está trabalhando
Decrementar (--) - Diminuir uma unidade no valor que está trabalhando
*/

// Calculadora:

// Função que simula a operação de uma calculadora em JS
function calculadora(num1, num2) {

    // Operações Aritméticas Básicas:
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;

    //Incrementar e Decrementar
    // Incrementar o num1
    let incrementar = num1;
    incrementar++;
    // Decrementar o num2
    let decrementar = num2;
    decrementar--;

    // Exibindo resultados no console:
    console.log(`Adição (${num1} + ${num2}) = ${adicao}`);
    console.log(`Subtração (${num1} - ${num2}) = ${subtracao}`);
    console.log(`Multiplicação (${num1} * ${num2}) = ${multiplicacao}`);
    console.log(`Divisão (${num1} / ${num2}) = ${divisao}`);
    console.log(`Módulo (${num1} % ${num2}) = ${modulo}`);
    console.log(`Exponencial (${num1} ** ${num2}) = ${exponencial}`);
    console.log(`Incrementar (${num1})++ = ${incrementar}`);
    console.log(`Decrementar (${num1})-- = ${decrementar}`);
}
// Parâmetros para calculadora:
calculadora(5, 10)
// Caso esteja vazio será retornado com Undefined ou NaN (Not a Number)