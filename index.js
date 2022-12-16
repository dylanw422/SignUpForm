const fname = document.querySelector('#first_name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const pass = document.querySelector('#confirm');
const button = document.querySelector('.continue');
const form = document.querySelector('form');
const inputs = document.querySelector('input')

button.disabled = true;
console.log(button.disabled)

form.addEventListener('input', () => {
    if(fname.checkValidity() && email.checkValidity() && password.checkValidity() && pass.checkValidity()) {
        button.classList.add('newColor');
        button.disabled = false;
    }
})

form.addEventListener('input', () => {
    if (!(fname.checkValidity() && email.checkValidity() && password.checkValidity() && pass.checkValidity())) {
        button.classList.remove('newColor');
        button.disabled = true;
    }
})

button.addEventListener('click', () => {
    fname.value = ''
    email.value = ''
    password.value = ''
    pass.value = ''
    button.textContent = 'Thank You!'
})