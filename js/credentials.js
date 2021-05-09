var nm = document.getElementById('nm');
var pw = document.getElementById('pw');

function store(){
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('pw', pw.value);
    window.location.href = "index.html";
}

function check(){
    var storedName = localStorage.getItem('nm');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('username');
    var userPw = document.getElementById('userpw');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are loged in');
        window.location.href = "index.html";
    }else{
        alert('Error');
    }
}