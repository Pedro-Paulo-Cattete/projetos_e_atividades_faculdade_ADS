Algoritmo "5BAtividadeEscolha"

Var
// Se��o de Declara��o de Vari�veis
   OP: Inteiro
   num1, Resultado: Real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   Escreval("Op��es:")
   Escreval("Op��o 1: Multiplicar por 2")
   Escreval("Op��o 2: Multiplicar por 3")
   Escreval("Digite o n�mero da Op��o Desejada:")
   Leia(OP)
   Escreval("Digite o n�mero que deseja multiplicar:")
   Leia(num1)
   Escolha(OP)
       Caso 1
            Resultado <- num1*2
       Caso 2
            Resultado <- num1*3
   FimEscolha
   Escreval(Resultado)
   
Fimalgoritmo