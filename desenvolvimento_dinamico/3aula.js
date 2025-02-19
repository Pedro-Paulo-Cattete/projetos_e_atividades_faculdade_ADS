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

console.log("\n")

// Operadores Lógicos
/*
&& (E lógico)
|| (OU lógico)
! (NÃO lógico)
*/

// Operadores de Comparação
/*
== (igual a)
!= (diferente)

=== (mesmo valor e tipo)
!== (diferente em valor e tipo)

< (menor que)
> (maior que)

<= (menor ou igual a)
>= (maior ou igual a)
*/

// Tabela Verdade
/*
    X           Y        X&&Y
Verdadeiro Verdadeiro Verdadeiro
Verdadeiro   Falso      Falso
    Falso  Verdadeiro   Falso
    Falso    Falso      Falso
*/

//Exemplos de Operadores Lógicos:

//Operador E lógico
const a = true;
const b = false;

// Operador E lógico (&&)
const resultadoE1 = a && b; //false
const resultadoE2 = a && true; //true
// Operador OU lógico (||)
const resultadoE3 = a || b; //true
const resultadoE4 = b || false; //false
// Operador Não lógico (!)
const resultadoNao1 = !a; //false
const resultadoNao2 = !b; //true

//Combinação de Operadores Lógicos
const resultadoComb1 = (a || b) && !b; //(true) e true = true
const resultadoComb2 = (a && b) || a; //(false) ou true = true

// Operador de Atribuição
/*
Exemplos:
+=
-=
*=
/=
*/

// Valor de Atribuição básico:
let x = 10;
console.log(`Valor inicial de x: ${x}`);

// Operador de Atribuição de Adição
x += 5; //Equivalente x = x + 5
console.log(`Após x += 5, valor de x: ${x}`)

// Operador de Atribuição de Subtração
x -= 3; //Equivalente x = x - 3
console.log(`Após x -= 3, valor de x: ${x}`)

// Operador de Atribuição de Multiplicação
x *= 2; //Equivalente x = x * 2
console.log(`Após x *= 2, valor de x: ${x}`)

// Operador de Atribuição de Divisão
x /= 4; //Equivalente x = x / 4
console.log(`Após x /= 4, valor de x: ${x}`)

// Operador de Atribuição de Módulo/Resto
x %= 4; //Equivalente x = x % 4
console.log(`Após x %= 4, valor de x: ${x}`)

// Operador de Atribuição de Exponecial
x **= 3; //Equivalente x = x ** 3
console.log(`Após x **= 3, valor de x: ${x}`)