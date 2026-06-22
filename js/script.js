// Seleciona o botão de alternar tema pelo ID
const btnTema = document.getElementById('btn-tema');

// Adiciona um ouvinte para o evento de clique no botão
btnTema.addEventListener('click', function () {
    // Alterna a classe 'dark-theme' no elemento body
    document.body.classList.toggle('dark-theme');

    // Atualiza o texto do botão de acordo com o tema ativo
    if (document.body.classList.contains('dark-theme')) {
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        btnTema.textContent = '🌙 Modo Escuro';
    }
});

//Validação do formulário

// Seleciona o formulário de contato pelo ID
const formContato = document.getElementById('form-contato');

// Adiciona um ouvinte para o evento de envio (submit)
formContato.addEventListener('submit', function (event) {
    // Evita o comportamento padrão do formulário (que seria recarregar a página)
    event.preventDefault();

    // Captura os valores digitados nos inputs e remove espaços extras
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // 1. Validação básica: verificar se há campos vazios
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário antes de enviar.');
        return; // Interrompe o envio
    }

    // 2. Validação avançada: formato do e-mail com Expressão Regular (Regex)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido (ex: usuario@dominio.com).');
        return; // Interrompe o envio
    }

    // 3. Simulação de sucesso no envio
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // Limpa todos os campos do formulário após o sucesso
    formContato.reset();
});
