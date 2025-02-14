document.addEventListener('DOMContentLoaded', () => {
    function showAlert(message, type = 'error', duration = 5000) {
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        const alert = document.createElement('div');
        alert.className = `alert ${type} show`;
        alert.innerHTML = message;

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        alert.appendChild(progressBar);

        document.body.appendChild(alert);

        progressBar.style.animation = `shrink ${duration}ms linear forwards`;

        setTimeout(() => {
            alert.classList.add('hide');
            setTimeout(() => alert.remove(), 300);
        }, duration - 300);
    }

    function formatPasswordRequirements(password) {
        const requirements = [
            { test: p => p.length >= 10, text: 'Mínimo de 10 caracteres' },
            { test: p => /[A-Z]/.test(p), text: '1 letra maiúscula' },
            { test: p => /[a-z]/.test(p), text: '1 letra minúscula' },
            { test: p => /[0-9]/.test(p), text: '1 número' },
            { test: p => /[!@#$%^&*(),.?":{}|<>]/.test(p), text: '1 caractere especial' }
        ];

        const results = requirements.map(req => ({
            met: req.test(password),
            text: req.text
        }));

        const message = `A senha deve conter as seguintes condições:\n${
            results.map(r => `- ${r.text} ${r.met ? '🟢' : '🔴'}`).join('\n')
        }`;

        return {
            isValid: results.every(r => r.met),
            message
        };
    }

    function validateEmail(email) {
        const ufbaEmailRegex = /^[^\s@]+@ufba\.br$/;
        return ufbaEmailRegex.test(email);
    }

    const authButton = document.getElementById('signupButton') || document.getElementById('loginButton');
    const isLogin = authButton.id === 'loginButton';

    authButton.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            showAlert('Por favor, preencha todos os campos');
            return;
        }

        if (!validateEmail(email)) {
            showAlert('Por favor, insira um email válido do domínio @ufba.br');
            return;
        }

        const passwordValidation = formatPasswordRequirements(password);
        if (!passwordValidation.isValid) {
            showAlert(passwordValidation.message);
            return;
        }
        
        showAlert(`Tentativa de ${isLogin ? 'login' : 'cadastro'} realizada!`, 'success');
        console.log(`Tentativa de ${isLogin ? 'login' : 'cadastro'} com:`, { email, password });

        setTimeout(() => {
            window.location.href = '../home/home.html';
        }, 1500);
    });

    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });
});
