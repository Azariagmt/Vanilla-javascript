const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm');


form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ''){
        showError
        document.querySelector('.form-control> small').textContent='error';
    }
});