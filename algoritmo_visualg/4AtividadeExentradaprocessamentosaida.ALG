Algoritmo "4AtividadeExentradaprocessamentosaida"

Var
// Se��o de Declara��o de Vari�veis
   num1: real
   num2: real
   num3: real
   resultadosoma: real
   resultadomedia: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   Escreval("Digite o primeiro n�mero:")
   Leia(num1)
   Escreval("Digite o segundo n�mero:")
   Leia(num2)
   Escreval("Digite o terceiro n�mero:")
   Leia(num3)

resultadosoma <- num1+num2+num3
resultadomedia <- resultadosoma/3

Escreval("Os n�meros escolhidos foram:")
Escreval(num1)
Escreval(num2)
Escreval(num3)
Escreval("A soma deles �:", resultadosoma)
Escreval("A media deles �:", resultadomedia)

Fimalgoritmo