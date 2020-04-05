onLoadFunction();

firebase.auth().onAuthStateChanged(function (user) {
    if(user){
        window.location.href = "index.html"
    }
})


var voltar = document.querySelector("#voltar");
voltar.addEventListener("click", function () {
    window.location.href = "opcoesLogin.html";
});

document.querySelector("#btnLogar").addEventListener("click", (e) => {
    e.preventDefault();

    var form = document.querySelector("#form");

    var user = form["email"].value;
    var senha = form["senha"].value;

    verificaLogin(user);
})
