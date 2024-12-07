Algoritmo "5BAtividadeEscolha"

Var
// Seção de Declaração de Variáveis
   OP: Inteiro
   num1, Resultado: Real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("Opções:")
   Escreval("Opção 1: Multiplicar por 2")
   Escreval("Opção 2: Multiplicar por 3")
   Escreval("Digite o número da Opção Desejada:")
   Leia(OP)
   Escreval("Digite o número que deseja multiplicar:")
   Leia(num1)
   Escolha(OP)
       Caso 1
            Resultado <- num1*2
       Caso 2
            Resultado <- num1*3
   FimEscolha
   Escreval(Resultado)
   
Fimalgoritmo