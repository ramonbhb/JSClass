alert("Hello World");
confirm("Deseja confirmar?");
var time = prompt("Qual o melhor time de MG?");
melhorTime(time);
var titulos = prompt("Digite o nome do time para ver qual é o melhor?");
melhorTime(titulos);

var pessoa = {
    nome: "Joao",
    idade: 50,
    peso: 50,
    altura: 1.90
}

var pessoa2 = {
    nome: "Maria",
    idade: 50,
    peso: 90,
    altura: 1.55
}
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa2.nome);
console.log(pessoa2.idade);
pessoa.nome = "José";

document.getElementById("nomedapessoa").innerText = pessoa.nome;

var nome = prompt("Digite o seu nome completo separado por espaço");
nomes = nome.split(" ");
console.log(nomes);

function melhorTime(resposta) {
    if ( resposta == "CRUZEIRO") {
        console.log("Resposta Correta");
    }
    else {
        console.log("Você errou :)");
    }
}

var cpf = "10340513400";
var respostacpf = verificaCpf(cpf);

function verificaCpf(_cpf) {
    let evalido;
    let tamanho = _cpf.length;    
    if (tamanho == 11) 
        evalido = true;
    else 
        evalido = false;
    return(evalido);
}

function exibirMensagem() {  
    let a = 1;
    let b = 2;
    let soma = a + b;
    alert(soma);
}

function acenderLampada() {    
    document.getElementById("imglampada").src = "https://i.stack.imgur.com/ybxlO.jpg";    
}

function apagarLampada() {
    document.getElementById("imglampada").src = "https://i.stack.imgur.com/b983w.jpg";
}

