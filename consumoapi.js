function pegarDados() {
    let nome = document.getElementById("usuario");
    let seguidores = document.getElementById("seguidores");
    let foto = document.getElementById("foto");
    let tabela = document.getElementById("tabela-pessoas");

    console.log("começando");
    // let usuario = prompt("Qual usuário você deseja os dados?");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(
        response => response.json()
    )
    .then(
        data => {             
            data.forEach( pessoa => {
                    let linha = tabela.insertRow(-1);
                    // <th>Nome</th> <th>Telefone</th>
                    let nome = linha.insertCell(0);
                    let telefone = linha.insertCell(1);                    
                    //let botao = linha.insertCell(2);                                               
                    nome.innerHTML = pessoa.name;
                    telefone.innerHTML = pessoa.phone;                   
                    //botao.innerHTML = "<button>OI</button>";
                }
            )

            // for (i=0;i<data.length;i++) {
            //     pessoas.innerHTML = pessoas.innerHTML +
            //     "<td>"+data[i].name+"</h1><p>"+data[i].phone+"</p>";
            // }
        }
    )
}