const passwordBox=document.getElementById("password");

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="~!@#$%^&*()-_+=?></|[]{} ";
const allChars = upperCase+lowerCase+number+symbol;
// Creating Password for given length;
function createPassword(){
    const pwdlength = document.getElementById("passwordlength").value;
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

//Copy input element
function copyElement(){
    var copyText=document.getElementById("password");
    if(copyText.value==""){
        alert("please click Generate password before copy");
    }else{
    copyText.hidden=false;
    copyText.select();
    document.execCommand("copy");
    copyText.text=true;
    alert("copied text is: "+copyText.value);
    }
}