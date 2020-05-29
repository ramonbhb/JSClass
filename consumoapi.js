function pegarDados() {
    let nome = document.getElementById("usuario");
    let seguidores = document.getElementById("seguidores");
    let foto = document.getElementById("foto");
    let pessoas = document.getElementById("pessoas");

    console.log("começando");
    // let usuario = prompt("Qual usuário você deseja os dados?");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(
        response => response.json()
    )
    .then(
        data => {             
            for (i=0;i<data.length;i++) {
                pessoas.innerHTML = pessoas.innerHTML +
                "<h1>"+data[i].name+"</h1><p>"+data[i].phone+"</p>";
            }
        }
    )
}