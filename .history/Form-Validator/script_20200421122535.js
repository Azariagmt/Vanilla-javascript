const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm');

function showError(input, message){
    const formControl
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username,'Username is required');
        document.querySelector('.form-control> small').textContent='error';
    }else{
        showSuccess(username);
    }
});