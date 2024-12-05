Algoritmo "4AtividadeExentradaprocessamentosaida"

Var
// Seção de Declaração de Variáveis
   num1: real
   num2: real
   num3: real
   resultadosoma: real
   resultadomedia: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Digite o primeiro número:")
   Leia(num1)
   Escreval("Digite o segundo número:")
   Leia(num2)
   Escreval("Digite o terceiro número:")
   Leia(num3)

resultadosoma <- num1+num2+num3
resultadomedia <- resultadosoma/3

Escreval("Os números escolhidos foram:")
Escreval(num1)
Escreval(num2)
Escreval(num3)
Escreval("A soma deles é:", resultadosoma)
Escreval("A media deles é:", resultadomedia)

Fimalgoritmo