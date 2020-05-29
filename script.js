idade1 = 30;
idade2 = 40;
idade3 = 50;
//         0   1   2
idades = [10, 20, 30];
//idades[0] = 30;
//idades[2] = 50;

for (i=0;i<receita.ingredientes.length;i++) {
    console.log(idades[i]);
}

user.perfisinst[3];

let user = {
    nome: "José",
    idade: 50,
    peso: 50,
    perfisinsta: ["@neymarjr","@bolsonaro","@lula","@zedirceu"],
    carteira: { 
        dinheiro: 5.00,
        documento: "identidade",
        foto: "3x4",
        cartao: "mastercard"
    },
    foto: {
        titulo: "Cachorro feliz",
        endereco: "https://aaaaa/cachorrofeliz",
        tamanho: 24,        
    },
    geolocalizacao: {
        latitude: -10.20,
        longitude: 10
    },
    amigos: ["pao","dois copos com agua"]
}

console.log(user.geolocalizacao.latitude);
console.log(user.geolocalizacao.longitude);
console.log(user);

let noticias = [
    {
        id: 1,
        foto: 'https://avaliacaopresidente.jpg',
        subtitulo: "Pesquisa de opinião",
        titulo: "Bolsonaro é reprovado por 43% e aprovado por 33%, diz Datafolha",
        descricao: "22% dos entrevistados consideram o governo regular. Em abril, reprovação era de 38%.",
        tema: "Politica",
        data_hora: "2020-05-28 18:00"
    },
    {
        id: 2,
        foto: 'https://avaliacaopresidente.jpg',
        subtitulo: "Pesquisa de opinião",
        titulo: "Bolsonaro é reprovado por 43% e aprovado por 33%, diz Datafolha",
        descricao: "22% dos entrevistados consideram o governo regular. Em abril, reprovação era de 38%.",
        tema: "Politica",
        data_hora: "2020-05-28 18:00"

    },
    {
        id: 3,
        foto: 'https://avaliacaopresidente.jpg',
        subtitulo: "Pesquisa de opinião",
        titulo: "Bolsonaro é reprovado por 43% e aprovado por 33%, diz Datafolha",
        descricao: "22% dos entrevistados consideram o governo regular. Em abril, reprovação era de 38%.",
        tema: "Politica",
        data_hora: "2020-05-28 18:00"
    }
]

// user.nome = "JOAO";
// user['nome'] = "JOAO";

// var chave = "idade";
// user[chave] = "JOAO";

// user.chave = "JOAO";


// let posts = {
//     title = "meu primeiro post",
//     descricao = "minha primeira descricao",
//     user_id = { 
//         id = 10,
//         nome = "josé",
//         pagina = "pagina1"
//     },
//     comments = {
//         titulo = "comentario",
//         comentario = "comentario",
//         user = {
//             user_id = 20,
//             nome = "joao",
//             idade = 10,
//         }
//     }
// }


// user.carteira.dinheiro 
// user.carteira.foto 
// user.carteira.cartao 



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
    nome: "",
    idade: "",
    peso: "",
    altura: "",
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