let signupBtn = document.getElementById('signupbtn');
let signinBtn = document.getElementById('signinbtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');
signinBtn.onclick = function(){
    nameField.style.maxHeight = '0';
    title.innerHTML = 'sign in';
    signupBtn.classList.add('disable')
    signinBtn.classList.remove('disable')
    
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'sign up';
    signupBtn.classList.remove('disable')
    signinBtn.classList.add('disable')
}
//    window.location.href = 'window.html'

