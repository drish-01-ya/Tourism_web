let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");

function validateForm() {
    
    let emailvalid = validateEmail()
    let password = password();
}

function validateEmail(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/

    
    if(email.value==""){
        alert("Email cannot be empty");
        return false;
    }
    else if(regexp.test(email.value)){
        error.innerHTML= "Valid";
        error.style.color = "green";
        return true;
    }
    else {
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
}

function password(){
    if(pwd.value==""){
        alert("Password cannot be empty");
        return false;    
    }
    else 
    return true;
}