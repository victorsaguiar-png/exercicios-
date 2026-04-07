function mostarNome () {
    let nome = document.getElementById("nomeCompleto").ariaValueMax;

    if (nome === ""){
        alert("Digite Seu Nome!");
    } else{
        alert("Seu Nome é: " + nome);
    }
}