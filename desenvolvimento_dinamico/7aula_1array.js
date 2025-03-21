/*
Array é uma estrutura ded dados que armazena uma coleção de elementos
Manipular arrays envolve uma variedade de operações em seus elementos
como adicionar, remover e modificar


Estruturas de dados fundamentas em JavaScript e são amplamente utilizados em praticamente todos os tipos de aplicativos:
Armazenamento de dados
Iteração nos elementos
Adição e remoção de elementos
Filtragem e mapeamento
*/

// ExemploArray.js

// Criar um Array

let array1 = []; //Menos recomendado
let array2 = new Array(); //Mais recomendado
let array3 = ["maçã", "banana", "uva"];

console.log('Array 1', array1);
console.log('Array 2', array2);
console.log('Array 3', array3);

// Adicionando elementos ao array

//array1 = "teste";
//array2 = "teste2";
//array3 = "teste3";

console.log('\nArray antes de adicionar elementos:', array1);
array1.push('el1')
array2.push('el2')
array3.push('el3')


console.log('\nArray após adicionar elementos:', array1);
console.log('Novo Array2', array2);
console.log('Novo Array3', array3);

// Acessar elementos de um array
let primeiroElemento = array1[0]; //0 é a posição no array, no caso primeira posição
let erro = array1[1]; //1 é a posição no array, como tem apenas 1 a segunda posição é inexistente

console.log('\nPrimeiro elemento:', primeiroElemento);
console.log('\nErro:', erro);

//Modificar elementos de um array

array1[0] = "novo elemento"
console.log('\nArray após modificar elementos:', array1);