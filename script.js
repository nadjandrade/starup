document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const form = document.getElementById('loginForm');

    loginButton.addEventListener('click', () => {
        form.submit(); // Submits the form
        window.location.href='https://www.youtube.com/?app=desktop&hl=pt'; // Redirects after submission
    });
});
