let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate(){
    if(email.value==""|| pwd.value==""){
        alert("Fields cannot be empty");
        return true;
    }
    else
        //alert("Validation is proper");
        return false;
}