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
    
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username,'Username is required');
       // document.querySelector('.form-control> small').textContent='error';
    }else{
        showSuccess(username);
    }
});