Algoritmo "MultiplicacaoComParametro"
procedimento multi(x, y: inteiro)
var
   aux: inteiro
inicio
   aux <- x * y
   res <- aux
fimprocedimento

Var
// Seção de Declaração de Variáveis
res, num1, num2: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("Digite o primeiro número: ")
   leia(num1)
   escreva("Digite o segundo número: ")
   leia(num2)

   multi(num1, num2)

   escreva("O resultado da multiplicação é: ", res)
Fimalgoritmo