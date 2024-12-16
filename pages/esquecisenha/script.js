function handlePasswordReset() {
    const emailField = document.getElementById("email");
    const email = emailField.value.trim();

    if (!email) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Exibe mensagem de sucesso
    alert(`Um link para redefinição foi enviado para o endereço: ${email}`);

    // Redireciona para a página de login
    window.location.href = "index.html"; // Substitua por seu arquivo de login
}