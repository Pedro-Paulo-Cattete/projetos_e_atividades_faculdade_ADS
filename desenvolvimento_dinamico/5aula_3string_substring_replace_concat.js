// Operações com String: substring, replace e concat
/*
substring:
replace:
concat:
*/

// Criação de Strings com nome de animais
let animal1 = "Elefante";
let animal2 = "Girafa";
let animal3 = "Zebra";

//Exemplo de substring()
// Pega parte da string "Elefante", começando no índice 3 até o índice 7
let parteAnimal1 = animal1.substring(3, 7);
console.log("Resultado da substring(): ", parteAnimal1);

//Exemplo de replace()
//Substitui a substring "ra" por "re" em "girafa"
let parteAnimal2 = animal2.replace("ra", "re");
console.log("Resultado do replace(): ", parteAnimal2);

//Exemplo de concat()
//Concatena as strings "Elefante", "Girafa" e "Zebra" com espaços entre eles.
let animalJuntos = animal1.concat(" ", animal2, " ", animal3);
console.log("Resultado do concat(): ", animalJuntos);