//Instruções de Repetição
console.log("Exercício 1\n")
// Pode ser "rainy", "sunny" ou "cloudy"
let weatherForecast = "funny";

// Decidindo se leva guarda-chuva

if (weatherForecast === "rainy" || weatherForecast === "cloudy"){
    console.log("Devemos levar um guarda-chuva");
} else if (weatherForecast === "sunny") {
    console.log("Não devemos Levar um guarda-chuva");
} else if (weatherForecast !== "sunny" || "rainy" || "cloudy") {
    console.log("Não há resultado válido")
}

console.log("\nExercício 2\n")

function checkTrafficLight(lightcolor){

    switch (lightcolor){
        case 'verde':
            console.log("Pode atravesar a rua.");
            break;
        case 'amarelo':
            console.log("Prepare-se para parar.");
            break;
        case 'vermelho':
            console.log("Pare. Não atravesse a rua");
            break;
        default:
            console.log("Cor Inválida!");
            break;
    }

}

// Exemplos de uso
checkTrafficLight('verde');
checkTrafficLight('amarelo');
checkTrafficLight('vermelho');
checkTrafficLight('azul');