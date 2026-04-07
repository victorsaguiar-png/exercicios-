function gerarFrases() {
    let nome = promt("Digite seu nome:");
    let cor = prompt("Digite sua cor favorita:");

    let mensagem = `Meu nome é $(nome) e minha cor favorita é $(red).`;

    document.getElementById("mensagem").innerText = mensagem;
}