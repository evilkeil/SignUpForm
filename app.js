const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const invalid = document.querySelector('.invalid');

form.addEventListener('submit', (event) => {
  if (password.value !== confirmPassword.value) {
    event.preventDefault(); // prevent form submission
    invalid.textContent = 'Passwords do not match' ;
  }
});