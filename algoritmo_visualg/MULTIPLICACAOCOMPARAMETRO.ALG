Algoritmo "MultiplicacaoComParametro"
procedimento multi(x, y: inteiro)
var
   aux: inteiro
inicio
   aux <- x * y
   res <- aux
fimprocedimento

Var
// Se��o de Declara��o de Vari�veis
res, num1, num2: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreva("Digite o primeiro n�mero: ")
   leia(num1)
   escreva("Digite o segundo n�mero: ")
   leia(num2)

   multi(num1, num2)

   escreva("O resultado da multiplica��o �: ", res)
Fimalgoritmo