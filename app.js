function verificarDados() {
    const nome = document.getElementById("nome").value.trim();
    const idade = Number(document.getElementById("idade").value);
    const mensagem = document.getElementById("mensagem");
     const imagem = document.getElementById("imagemUsuario");

    if (nome === "" || isNaN(idade) || idade <= 0) {
        mensagem.innerText = "⚠️ Por favor, preencha o nome e uma idade válida.";
        return;
    }

    // Esconde o formulário
    document.getElementById("formulario").style.display = "none";

    // Mostra a mensagem
    mensagem.innerText = `Olá, seu nome é ${nome} e sua idade é ${idade} anos.`;

    imagem.style.display = "block"; // Mostra a imagem
}
