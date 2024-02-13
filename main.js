
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    if (name === '') {
      showError('name', 'Por favor, insira seu nome');
      valid = false;
    } else {
      removeError('name');
    }

    if (email === '') {
      showError('email', 'Por favor, insira seu email');
      valid = false;
    } else if (!isValidEmail(email)) {
      showError('email', 'Por favor, insira um email válido');
      valid = false;
    } else {
      removeError('email');
    }

    if (message === '') {
      showError('message', 'Por favor, insira sua mensagem');
      valid = false;
    } else {
      removeError('message');
    }

    if (valid) {
      // Simulação do envio do formulário
      alert('Formulário enviado com sucesso!');
      form.reset();
    }
  });

  function showError(field, message) {
    const inputField = document.getElementById(field);
    const errorMessage = document.createElement('span');
    errorMessage.className = 'error';
    errorMessage.textContent = message;
    inputField.classList.add('error-input');
    inputField.parentNode.appendChild(errorMessage);
  }

  function removeError(field) {
    const inputField = document.getElementById(field);
    const error = inputField.parentNode.querySelector('.error');
    if (error) {
      inputField.parentNode.removeChild(error);
      inputField.classList.remove('error-input');
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }