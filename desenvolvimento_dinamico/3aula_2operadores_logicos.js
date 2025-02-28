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