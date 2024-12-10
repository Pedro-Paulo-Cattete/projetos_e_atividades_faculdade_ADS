Algoritmo "6APARA1A5"

Var
// Seção de Declaração de Variáveis
   i,multi,num:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   multi<-1
   para i de 1 ate 5 faca
   escreval("Digite um numero do tipo inteiro: ")
   leia(num)
   multi<-multi*num
   i<-i+1
   fimpara
   escreval("Resultado da Multiplicação: ", multi)
   fimalgoritmo
