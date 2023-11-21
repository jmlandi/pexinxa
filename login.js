
function cadastro(){
    alert('Usuario cadastrado com sucesso!!')
}
function validar_cadastro(){
 
    var nickname = document.getElementById("name.cadastro-id").value
    var email = document.getElementById("cadastro.email-id").value
    var confirmed_email = document.getElementById("cadastro.email.confirmed-id").value
    var senha = document.getElementById("senha.cadastro-id").value
    var confirmed_senha = document.getElementById("cadastro.confirmar.senha-id" ).value
    var validacao = document.getElementById("validacao_cadastro")
    var data_nasc = document.getElementById("data_nasc-id").value

    //verificando se os campos estão vazios
    if(email != confirmed_email){
        validacao.innerHTML = "os e-mails precisam ser iguais!!"
        return false
    }
    else if(senha != confirmed_senha){
        validacao.innerHTML = "As senhas precisam ser iguais!!"
        return false
    }
    
    else if (nickname.trim() === "" || email.trim() ==="" || confirmed_email.trim() ==="" || senha.trim()==="" || confirmed_senha.trim() ==="" || data_nasc.trim() ===""){
        validacao.innerHTML = "Preencha todos os campos obrigatorios!!"
        return false
    }
  
     else{
        cadastro()
        return true
     }
}
function validar_login(){
    var nickname_login = document.getElementById("login.nickname-id").value
    var senha_login = document.getElementById("login.senha-id" ).value
    var validacao_login = document.getElementById("validacao_login")

    if(nickname_login.trim() === "" || senha_login.trim()===""){
        validacao_login.innerHTML = "login e/ou senha inválidos !!"
        return false
    }
    else if(!nickname_login.trim() === "" , !senha_login.trim()===""){
        validacao_login.innerHTML = "Servidores OFF, tente novamente mais tarde!!"
        return false
    }
    else{
        validacao_login.innerHTML = " Servidores OFF, tente novamente mais tarde!!"
        return false
    }

    
}
