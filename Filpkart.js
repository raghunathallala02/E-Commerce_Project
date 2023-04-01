function formValidation() {
    var username = document.getElementById("userid");
    var password = document.getElementById("userpassword");
    if(username.value==null || username.value ==""){
        document.getElementById("invaliduser").innerHTML="Invalid User";
        return false;
    }
    else if(password.value==""||password.value<6){
        document.getElementById("invalidpassword").innerHTML="Invalid password";
        return false;
    }
    else{
        return true;
    }
}
function Showpassword(){
    var password = document.getElementById("userpassword");
    if(password.type=="password"){
      password.type="text";
       }
    else{
        password.type="password";
    }
}
function CartIncrement(){
    document.getElementById("IncrementCart").stepUp();
}
function CartDecrement(){
    document.getElementById("IncrementCart").stepDown();
}
function CreateAccount(){
    var firstname = document.getElementById("fid");
    var surname = document.getElementById("sid");
    var password = document.getElementById("password");
    var cpassword = document.getElementById("Cpassword");
    if(firstname.value==null || firstname.value ==""){
        document.getElementById("invalidfirstname").innerHTML="Invalid firstname";
        return false;
    }else if(surname.value==null||surname.value==""){
        document.getElementById("invalidSurname").innerHTML="Invalid Surname";
        return false;
    }
    else if(password.value==null||password.value==""||password.value<6){
        document.getElementById("invalidpassword").innerHTML="Invalid password";
        return false;
    }
    else if(password!=cpassword){
        document.getElementById("mustmatch").innerHTML="password and confirm password is not matched";
        return false;
    }
    else{
        return true;
    }
}