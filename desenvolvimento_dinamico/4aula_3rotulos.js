console.log("Exercício 6\n")

// Rótulos (Etiquetas)

/*
Imagine que você está organizando uma festa de aniversário
Os blocos de código são como diferentes áreas da festa, onde diferentes atividades acontecem
Por exemplo, você pode ter uma área para dançar, uma área para jogos e uma área para comer.
 */

{
// Área de Dançar
console.log("Hora de dançar!");
// Aqui vão as instruções para a pista de dança
}

{
    // Área de Jogos
    console.log("Vamos Jogar!");
    // Aqui vão as instruções para os jogos
}

{
    // Área de Comer
    console.log("Hora de comer!");
    // Aqui vão as instruções para o buffet
}

// Os rótulos são como etiquetas que você coloca em diferentes atividades durante a festa, para identifica-las

console.log("")

// Imagine que você tem uma competição de dança e uma competição de jogos acontecendo ao mesmo tempo.

danca:
for (let i = 0; i < 3; i++) {
    jogos:
    for (let j = 0; j < 3; j++){
        if (i === 1 && j === 1) {
            console.log("A competição de dança foi interrompida."); //Sai da competição de dança.
            break danca;
        }
        console.log("Competidor " + (i+1) + " está dançando enquanto o competidor " + (j+1) + " está jogando!")
    }
}
