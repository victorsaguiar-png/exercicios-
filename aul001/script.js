function formatar() {
    let v = prompt("Digite um valor");

    document.getElementById("res").innerHTML = Number(v).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}