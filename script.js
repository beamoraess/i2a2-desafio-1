function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) {
        alert('Por favor, preencha todos os campos!');
        return false;
    }
    window.location.href = 'pages/produtos/produtos.html';
}

function validateEmail() {
    const email = document.getElementById('email').value;
    if (!email) {
        alert('Por favor, preencha o campo de e-mail!');
        return false;
    }
    alert(`Um link para redefinição foi enviado para: ${email}`);
    window.location.href = 'index.html';
}