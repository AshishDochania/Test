const userName = document.getElementById('Username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmedPassword = document.getElementById('Confirm-password');
const button=document.querySelector("button");


let nameConfirm=false;
let passwordLengthConfirm=false;


userName.addEventListener('input', function(e) {
    // console.log(e.target.value);
    let input=e.target.value;
    if(input.length>15){
        nameConfirm=false;
        e.target.classList.add("is-wrong");
    } else if(input.length<3){
        nameConfirm=false;
        e.target.classList.add("is-wrong");
    }else{
        nameConfirm=true;
        e.target.classList.remove("is-wrong");
    }
});

password.addEventListener('input', function(e) {
    let input=e.target.value;
    if(input.length<8){
        passwordLengthConfirm=false;
        e.target.classList.add("is-wrong");
    }else{
        passwordLengthConfirm=true;
        e.target.classList.remove("is-wrong");
    }
});

button.addEventListener('mouseover',function(e){
    if(nameConfirm && passwordLengthConfirm){
        button.removeAttribute('disabled');
    } else{
        button.setAttribute('disabled','');
    }
});
button.addEventListener('mouseout',function(e){
    button.removeAttribute('disabled');
});

const form= document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const isValidEmail = emailPattern.test(email.value); 
    let pasCon=false;
    if(password.value===confirmedPassword.value){
        pasCon=true;
    }
    if(isValidEmail && pasCon){
        alert("Logged in Successfully!!");
        location.reload();
    }else{
        if(!isValidEmail) alert("enter valid email");
        if(!pasCon) alert("confirm password do not match the original password")
    }
});
