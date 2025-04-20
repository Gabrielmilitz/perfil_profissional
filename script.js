// Inicializar o EmailJS
(function () {
  emailjs.init('uZwYSN8m4f9rgw_v8'); // Substitua por sua Public Key do EmailJS se necessário
})();

// Evento de envio do formulário
document.getElementById('form-contato').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o recarregamento da página

  // Enviar os dados via EmailJS
  emailjs.sendForm('service_erz5qsi', 'template_zpkn9eb', this)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('mensagem-sucesso').textContent = "Mensagem enviada com sucesso!";
    }, function (error) {
      console.error('FAILED...', error);
      document.getElementById('mensagem-sucesso').textContent = "Erro ao enviar mensagem. Tente novamente.";
    });

  // Limpa o formulário após o envio
  this.reset();
});
