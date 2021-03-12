// variables
const goToRegister = document.getElementById('register');
const goToLogin = document.getElementById('login');

const boxLogin = document.querySelector('.login');
const boxRegister = document.querySelector('.register');

const formLogin = document.getElementById('formLogin');
const formRegister = document.getElementById('formRegister');

const inputsLogin = formLogin.querySelectorAll('input');
const inputsRegister = formRegister.querySelectorAll('input');

const btnOfLogin = document.getElementById('login');
const btnOfRegister = document.getElementById('register');



// animation of boxs

goToRegister.addEventListener('click', ()=>{
    boxLogin.style.display = 'none';
    boxRegister.style.display = 'block';
    document.title = 'Register';
})

goToLogin.addEventListener('click', ()=>{
    boxRegister.style.display = 'none';
    boxLogin.style.display = 'block';
    document.title = 'Login';
})

// validation of login 

let validationOfLogins = {
    email: false,
    password: false
}

const validateOfLogin = (e) => {
    switch(e.target.name){
        case "emaillogin":
            if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.value)){
                document.querySelector('.error__email-login').style.display = 'none';
                validationOfLogins.email = true;
            } else{
                document.querySelector('.error__email-login').style.display = 'block';
                validationOfLogins.email = false;
            }
        break
        case "passwordlogin":
            if(/^.{4,12}$/.test(e.target.value)){
                document.querySelector('.error__password-login').style.display = 'none';
                validationOfLogins.password = true;
            } else {
                document.querySelector('.error__password-login').style.display = 'block';
                validationOfLogins.password = false;
            }
        break
    }
}

inputsLogin.forEach(input => {
    input.addEventListener('keyup', validateOfLogin);
    input.addEventListener('blur',validateOfLogin)
});

btnOfLogin.addEventListener('click', (e)=>{
    e.preventDefault()
    if(validationOfLogins.email && validationOfLogins.password){
        document.querySelector('.login-form').style.display = 'block';
        document.querySelector('.login-error-form').style.display = 'none';

        inputsLogin.forEach(input => {
            input.value = "";
        })
    } else {
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.login-error-form').style.display = 'block';
        
    }
})


// validation of register



let validationOfRegister = {
    fullName: false,
    email: false,
    password: false,
    password2: false,
}

const validateOfRegister = (e) => {
    switch(e.target.name){
        case "fullname":
            if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(e.target.value)){
               document.querySelector('.error__name-register').style.display = "none";
               validationOfRegister.fullName = true;

            } else{    
                document.querySelector('.error__name-register').style.display = "block";
                validationOfRegister.fullName = false;
            }
        break
        case "emailregister":
                if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.value)){
                    document.querySelector('.error__email-register').style.display = 'none';
                    validationOfRegister.email = true;
                } else {
                    document.querySelector('.error__email-register').style.display = 'block';
                    validationOfRegister.email = false; 
                }
        break
        case "passwordregister":
                if(/^.{4,12}$/.test(e.target.value)){
                    document.querySelector('.error__password-register').style.display = 'none';
                    validationOfRegister.password = true;
                } else {
                    document.querySelector('.error__password-register').style.display = 'block';
                    validationOfRegister.password = false;
                }
        break
        case "passwordregister2":
                if(document.getElementById('passwordRegister').value == e.target.value){
                    document.querySelector('.error__password2-register').style.display = 'none';
                    validationOfRegister.password2 = true;
                } else {
                    document.querySelector('.error__password2-register').style.display = 'block';
                    validationOfRegister.password2 = false;
                }
        break
    }
}



inputsRegister.forEach(input => {
    input.addEventListener('keyup', validateOfRegister);
    input.addEventListener('blur',validateOfRegister)
});

formRegister.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(validationOfRegister.fullName && validationOfRegister.email && validationOfRegister.password && validationOfRegister.password2){
        document.querySelector('.post-form').style.display = 'block';
        document.querySelector('.post-error-form').style.display = 'none';

        inputsRegister.forEach(input => {
            input.value = "";
        })

        

    } else {
        document.querySelector('.post-form').style.display = 'none';
        document.querySelector('.post-error-form').style.display = 'block';


        
        
    }
})
