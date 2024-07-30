var email="info@rampex.in";
var pwd="123456"
var userTypingEmail="";
var userTypingPwd="";
if(userTypingEmail===email){
    if(userTypingPwd === pwd){
        console.log("Login Successful");
    }
    else{
        console.log("Password is wrong");
    }
}
else{
    console.log("Email is not in the DB");
}