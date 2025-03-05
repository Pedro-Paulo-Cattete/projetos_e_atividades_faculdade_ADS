console.log("Exercício 3\n")

//Laços de Repetição - For (Para) / While (Enquanto) / Do-while (Faça enquanto)

// Exemplo para uso do "For"
/*
Um entregador de pizza precisa entregar pizzas em ruas de 1 a 10
Você tem de entregar pizzas em cada rua da rua 1 até a rua 10.
(No "For" tem ínicio, condições e fins bem definidos. "Para" esses parâmetros acontececr isso.)
*/

for (let rua = 1; rua <=10; rua++){
    console.log("Entrega feita na rua: ", rua);
}

console.log("\nExercício 4\n")

// Exemplo para uso de "While"
/*
Uma pessoa vai fazer exercícios físicos até ficar cansada.
A pessoa deve decidir quantas flexões até ela ficar cansada.
(No "While" até chegar ao limite estipulado, vai continuar fazendo "Enquanto" não chega nesse limite)
*/

let quantidadeFlexoes = 0;
let cansaco = false

while (!cansaco) {
    quantidadeFlexoes++;
    console.log("Eu fiz", quantidadeFlexoes, "flexões!");
    if (quantidadeFlexoes === 5) {
        cansaco = true
    }
}

console.log("\nExercício 5\n")

// Exemplo para "Do While"
/*
Uma pessoa está tentando aprender a andar de bicicleta
Você decide praticar até conseguir andar pelo menos 10 segundos sem cair
(No "Do While" ele continua fazendo a mesma ação enquanto não chega num ponto específico, "Faça Enquanto" um parâmetro não for alterado)
Diferente do While o Do While fará a ação pelo menos 1 vez.
*/

let tempoDeAndar = 0;
let caiu = false;

do {
    tempoDeAndar++;
    console.log("Andei de bicicleta por ", tempoDeAndar, "minutos...");

    if (tempoDeAndar === 3){
        caiu = true;
    }

} while (!caiu && tempoDeAndar <10);
