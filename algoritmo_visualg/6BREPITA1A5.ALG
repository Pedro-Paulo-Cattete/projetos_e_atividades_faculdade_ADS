Algoritmo "6BREPITA1A5"

Var
// Seção de Declaração de Variáveis
   i,multi,num:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   multi<-1
   repita
   escreval("Digite um numero do tipo inteiro: ")
   leia(num)
   multi<-multi*num
   i<-i+1
   ate i>=5
   escreval("Resultado da Multiplicação: ", multi)
   fimalgoritmo
