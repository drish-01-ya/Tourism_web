let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let phno = document.getElementById("phno");
let error = document.getElementById("error");
let ph_error = document.getElementById("ph_error");


//codeee

//end

function validateForm() {
    
    let emailvalid = validateEmail()
    let passwordd = password_validate()
    let phno =  phonenumber();
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

function password_validate(){
    //  if(pwd.value==""){
    //      alert("Password cannot be empty");
    //      return false;    
    //  }
    //  else{
        var strength = document.getElementById('strength');
        var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        var pwd = document.getElementById("password");
        if (pwd.value.length == 0) {
            strength.innerHTML = 'Type Password';
        } else if (false == enoughRegex.test(pwd.value)) {
            strength.innerHTML = 'More Characters';
        } else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">Weak!</span>';
        }
        
    
}
    
function phonenumber(){
    let RegExp1 = /^([1-9]{3})-([0-9]{3})-([0-9]{4})$/
    let RegExp2 = /^([1-9]{3}).([0-9]{3}).([0-9]{4})$/
    let RegExp3 = /^([1-9]{3})([0-9]{3})([0-9]{4})$/
    let RegExp4 = /^([1-9]{3}) ([0-9]{3}) ([0-9]{4})$/
    if(phno.value==""){
        alert("Phone number cannot be empty");
        return false;
    }
    else if(RegExp1.test(phno.value)){
        ph_error.innerHTML= "Valid";
        ph_error.style.color = "green";
        return true;
    }
    else if(RegExp2.test(phno.value)){
        ph_error.innerHTML= "Valid";
        ph_error.style.color = "green";
        return true;
    }
    else if(RegExp3.test(phno.value)){
        ph_error.innerHTML= "Valid";
        ph_error.style.color = "green";
        return true;
    }
    else if(RegExp4.test(phno.value)){
        ph_error.innerHTML= "Valid";
        ph_error.style.color = "green";
        return true;
    }
    else{
        ph_error.innerHTML = "Invalid";
        ph_error.style.color = "red";
        return false;
    }
    
}