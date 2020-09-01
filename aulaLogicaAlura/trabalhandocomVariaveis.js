console.log("Meu Primeiro Programa: Trabalhando com variáveis");

const idade = 26;
console.log(idade);

const idadeSomada = idade+2;
console.log(idadeSomada);
console.log(idade / 2);
console.log(idade - 2);
let primeiroNome = "Júlia";

//const = diz para o interpretador que ele deve reservar um espaço para aquela informação (variável)
//let também é usado para isso.
//Não programar sem declarar a varável.

console.log("Operações Aritméticas");
console.log((10+8)*2);
console.log("ano " + 2020);

//-----------------------------------------
console.log("Conversão de Tipos");
console.log("2" +"2");
console.log(parseInt("2")+ parseInt("2"));

console.log("10"/"2");
//Dá certo, mesmo usando string, pq quando usamos a operação de divisão, o interpretador converte o texto em número automaticamente.
//exemplo de erro: console.log("10" + "Ricardo"); vai dar erro, pois tem uma string de texto.

//-----------------------------------------
console.log("Trabalhando com atribuição de variáveis");
let sobrenome = "Souza";

//console.log (nome+""+sobrenome); <<<<Mesma função da vírgula.
console.log(primeiroNome, sobrenome, idade);
//nome= nome + sobrenome; (vai dar erro, pois usamos o "const" para definir o tipo da variável, desta forma ele será constante e não poderá variar)
const nomeCompleto = primeiroNome + sobrenome; //troca de "const" por "let" na definição do tipo da variável permite a execução deste teste;
console.log(nomeCompleto); //Não é indicado ficar mudando a variável, o ideal é ter o maior número de constantes possível, para dar menos erro;

//-------------------------------
