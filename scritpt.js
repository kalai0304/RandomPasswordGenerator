const passwordBox=document.getElementById("password");
const pwdlength = 8;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="~!@#$%^&*()-_+=?></|[]{}";
const allChars = upperCase+lowerCase+number+symbol;
function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random() * upperCase.length)];
    password+=lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password+=number[Math.floor(Math.random() * number.length)];
    password+=symbol[Math.floor(Math.random() * symbol.length)];
    while(pwdlength > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }   
    passwordBox.value=password;
}
// console.log("12"+"15");
// console.log(12+15);