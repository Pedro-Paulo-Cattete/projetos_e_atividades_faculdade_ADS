/*
Métodos básicos de Array:
push() / pop() / shift()

push: "Empurrar" elementos ao array, irá adicionar na posição definida entre parênteses
pop: "Retira" elementos do array, expele elementos da última posição para a primeira, também podendo ser definido pela posição em parênteses
shift: "Remove a esquerda" elementos do array, expele elementos da primeira posição do array, também podendo ser definido pela posição em parênteses
*/

// Métodos básicos:

let frutas = ["maçã", "banana", "laranja", "uva"]; // pos: 0...3

console.log("Array inicial: " + frutas);
console.log("Comprimento do array: " + frutas.length);

// Push():

let novoComprimento = frutas.push("manga", "abacate");
console.log("\nArray atualizado push: " + frutas);
console.log("Novo comprimento do array: " + novoComprimento);

// Pop():

let ultimaFruta = frutas.pop();
console.log("\nArray atualizado pop: " + frutas);
console.log("Ultima fruta removida: " + ultimaFruta);

// Shift():

let primeiraFruta = frutas.shift();
console.log("\nArray atualizado shift: " + frutas);
console.log("Primeira fruta removida: " + primeiraFruta);
