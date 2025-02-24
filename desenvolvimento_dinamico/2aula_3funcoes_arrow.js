// Funções Arrow - São  uma sintaxe moderna e mais concisa, principalmente para casos de uso simples e call-backs

// Arrow em soma:
let somar = (a,b) => {
    return a+b;
};

console.log(somar(5, 3));

// Arrow em Multiplicação

let dobrar = n => n*2;

console.log(dobrar(5))

// Arrow em Callback de multiplicação

let numeros = [1, 2, 3, 4, 5];

let numerosdobrados = numeros.map( n => n*2 );

console.log(numerosdobrados);

// Arrow function com corpo de função mais complexo

let saudacao1 = (nome, idade) => {
    let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos`;
    return mensagem;
}

console.log(saudacao1("Pedro", 36))