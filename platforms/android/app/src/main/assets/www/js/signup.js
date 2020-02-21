var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function () {
        onLoadFunction();
    }
};

document.addEventListener("DOMContentLoaded", function (event) {
    let estilo = document.getElementsByClassName('load');
    estilo[0].style.visibility = "hidden";
});

var voltar = document.querySelector("i");
voltar.addEventListener('click', function () {
    window.location.href = "index.html";
})

var cadastrar = document.querySelector("#btnCadastrar");
cadastrar.addEventListener("click", function () {
    let nome = document.querySelector("#nome");
    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha");
    let senhaC = document.querySelector("#senhaC");

    let emailValue = email.value;
    let senhaValue = senha.value;
    let senhaCValue = senhaC.value;
    let nomeValue = nome.value;

    if (nomeValue.length == 0) {
        document.querySelector(".name").classList.add("elementoInvalido");
        nome.placeholder = "Elemento Obrigatorio";
    } else {
        document.querySelector(".name").classList.remove("elementoInvalido");
        nome.placeholder = "Nome";;
        return false;
    }

    if (emailValue.length == 0) {
        document.querySelector(".email").classList.add("elementoInvalido");
        email.placeholder = "Elemento Obrigatorio"
    } else {
        document.querySelector(".email").classList.remove("elementoInvalido");
        email.placeholder = "E-mail"
        return false;
    }

    if (senhaValue.length == 0) {
        document.querySelector(".password").classList.add("elementoInvalido");
        senha.placeholder = "Elemento Invalido";
    } else {
        document.querySelector(".password").classList.remove("elementoInvalido");
        senha.placeholder = "Crie sua senha";
        return false;
    }

    if (senhaCValue.length == 0) {
        document.querySelector(".passwordC").classList.add("elementoInvalido");
        senhaC.placeholder = "Elemento Obrigatorio"
    } else if (senhaValue != senhaCValue) {
        document.querySelector(".passwordC").classList.add("elementoInvalido");
        document.querySelector(".password").classList.add("elementoInvalido");
        senha.value = "";
        senhaC.value = "";
        senhaC.placeholder = "As senhas não são iguais";
        return false;
    } else {
        document.querySelector(".passwordC").classList.remove("elementoInvalido");
        senhaC.placeholder = "Confirme sua Senha";
        return false;
    }
})

app.initialize();