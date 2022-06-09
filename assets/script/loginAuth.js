function verificaLogin(){
    const login = "ronaldorichard@email.com";
    const senha = "123456789";
    const loginDigitado = document.getElementById('auth-email').value;
    const senhaDigitada = document.getElementById('auth-pass').value;


    if(login == loginDigitado && senha == senhaDigitada){
        window.location.href = "../../home_client.html"

    }else{
        alert("Login ou Senha incorretos, tente novamente.")
    }
}

function verificaCadastro(){
    const loginDigitado = document.getElementById('auth-email').value;
    const senhaDigitada = document.getElementById('auth-pass').value;

    if(loginDigitado != null && senhaDigitada != null){
        if(loginDigitado != "" && senhaDigitada != ""){
            window.location.href = "../../home_client.html"
        }else{
            alert("Por favor, preencha todos os campos corretamente.")
    }
    }
}