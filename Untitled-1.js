/*
    Este é o seu arquivo JavaScript.
    Ele vai adicionar interatividade à sua página.
    
    Abaixo, vamos fazer uma validação simples do formulário.
    Isso garante que o usuário não envie os campos vazios.
*/

// A função abaixo é executada quando a página é totalmente carregada.
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona o formulário de contato pelo seu ID 'contato'.
    const form = document.querySelector('#contato form');

    // Adiciona um "ouvinte de evento" para o envio do formulário.
    form.addEventListener('submit', function(event) {
        
        // Impede que o formulário seja enviado automaticamente.
        event.preventDefault();

        // Seleciona os campos do formulário para verificar seus valores.
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        // Verifica se algum dos campos está vazio.
        if (nome === '' || email === '' || mensagem === '') {
            // Se estiver, exibe um alerta para o usuário.
            alert('Por favor, preencha todos os campos!');
        } else {
            // Se todos os campos estiverem preenchidos, exibe uma mensagem de sucesso.
            alert('Mensagem enviada com sucesso!');
            // Aqui você pode adicionar o código para realmente enviar o formulário,
            // como um fetch() para uma API ou um back-end.
            
            // Limpa os campos do formulário para o próximo uso.
            form.reset();
        }
    });
});
