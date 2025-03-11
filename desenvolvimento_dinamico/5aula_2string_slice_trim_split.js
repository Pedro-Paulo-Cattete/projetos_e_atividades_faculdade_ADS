//String: Slice, trim, split
/*
Slice: Fatiar (Extrai uma parte de uma nova string e a retorna como uma nova string, sem modificar a string original)
Trim: Cortar (Remove os espaços em branco do início e do final da string)
Split: Separar (Divide uma string de acordo com um separador específico e retorna uma nova string)
*/

// Exemplos de Uso:

//Slice:
let frutas = "maçã, banana, laranja, uva, abacaxi";
console.log("Tamanho da String frutas: ", frutas.length);
// Queremos apenas uma parte da string frutas, por exemplo, "banana, laranja"
let parteFrutas = frutas.slice(5, 21);
console.log("Resultado do  slice(): ", parteFrutas);

//Trim:
let frutaComEspaco = "              abacate              ";
// Remover os espaços do inicio e do fim
let frutaSemEspaco = frutaComEspaco.trim();
console.log(frutaSemEspaco);

//Split
let listadeFrutas = "maçã,banana,laranja,uva,abacaxi";
// Dividir a string em um array de substrings, nesse caso usando a vírgula como separador
let arraydeFrutas = listadeFrutas.split(",");
console.log("Resultado do split(): ", arraydeFrutas);