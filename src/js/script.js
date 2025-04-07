// //DECLARAÇÕES E VARIAVEIS

// var nome = 'fiap';
// console.log(nome);

// let idade = 19;
// console.log(idade);

// const sobrenome = 'Fiapinho';
// console.log(sobrenome);

// //DECLARANDO VARIAVEIS INDEFINIDAS
// let nome1;
// console.log(nome1);

// //DECLARAÇÃO DE VARIAVEL NULA
// let nome2 = null;
// console.log(nome2);

// //DECLARAÇÕES E VARIAVEIS
// let exemplo1 = 10;
// console.log(typeof exemplo1);

// let exemplo2 = 'Tecnologia';
// console.log(typeof exemplo2);

// let exemplo3 = true;
// console.log(typeof exemplo3);

// let exemplo4 = {};
// console.log(typeof exemplo4);

// let exemplo5 = [];
// console.log(typeof exemplo5);

// //CONVERCAO DE VARIAVEIS
// let numFloat = 123.456;
// console.log(parseInt(numFloat));

// let numString = '123.456';
// console.log(parseFloat(numString));


// //METODOS

// //LENGTH = VERIFICA O TAMANHO DA STRING
// let frase = 'O mundo da tecnologia';
// console.log(frase.length);

// //INDEXOF = RETORNA UM TRECHO DE TEXTO
// let texto = 'A programação indomável e sustrntavel';
// console.log(texto.indexOf('ão'));

// //SLICE = RETORNA UM TRECHO DE TEXTO COM INICIO E FINAL
// let info = 'Processamento de ponta';
// console.log(info.slice(16, 25));

// //OPERADORES ARITIMETICOS
// const num1 = 10;
// const num2 = 20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// //OPERADORES LOGICOS
// const num3 = 20;
// const num4 = 30;

// console.log(num3 < num4);
// console.log(num3 > num4 && num4 < num3);
// console.log(num3 < num4 ||  num4 < num3);

// //OPERADORES COMPARATIVOS
// console.log(num3 == num4);
// console.log(num3 === num4);

// // ESTRUTURA CONDICIONAL
// let logado = 'fiap';
// if (logado == 'fiap') {
//     console.log('é verdade')
// }

// // IF ELSE
// let usuario = 'teste'
// if(usuario == 'teste') {
//     console.log('Usuario correto!')
// }else{
//     console.log('Usuario errado!')
// }

// // IF ENCADEADO/ALINHADO
// let idade = 15;
// if (idade <= 15) {
//     console.log('menor de idade')
// } else if (idade > 15 && idade < 18) {
//     console.log('não é maior de idade, mas pode entrar')
// } else {
//     console.log('pode entrar, é maior de idade')
// }

// // SWITCH
// let time = 'Corinthians'
// switch(time){
//     case "Corinthians":
//         console.log('Melhor time')
//         break;
//     case "São Paulo":
//         console.log('Não é o melhor')
//         break;
//     case "Palmeiras":
//         console.log("Não tem mundial")
//         break;
//     default:
//         console.log('Nenhuma das opções')
// }

// // TERNARIO
// let valor = 100;
// let resultado = valor == 100 ? "Certo" : "Errado";
// console.log(resultado)

// // TERNARIO ENCADEADO
// let produto = 'mouse';
// let desconto = true;
// const preco = produto == 'notebook' ? desconto ? 100 : 200 : produto == 'mouse' ? 30 : 100
// console.log(preco)

// ESTRUTURA DE REPETIÇÃO
// FOR
for(let i = 0 ; i <= 10 ; i++) {
    console.log('O valor de i é: ',i)
}