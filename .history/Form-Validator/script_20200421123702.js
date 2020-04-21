const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm');

//show error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success message
function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check if email is valid
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username,'Username is required');
    }else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email,'email is required');
    }else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password,'password is required');
    }else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2,'confirming is required');
    }else{
        showSuccess(password2);
    }

});