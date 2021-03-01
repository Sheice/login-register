// variables
const goToRegister = document.getElementById('register');
const goToLogin = document.getElementById('login');

const boxLogin = document.querySelector('.login');
const boxRegister = document.querySelector('.register');

const formLogin = document.getElementById('formLogin');
const formRegister = document.getElementById('formRegister');

const inputsLogin = formLogin.querySelectorAll('input');
const inputsRegister = formRegister.querySelectorAll('input');

// expressions



inputsLogin.forEach(input =>{
    input.addEventListener('keyup', validateOfLogin);
})



formLogin.addEventListener('submit', (e)=>{
    e.preventDefault()
})