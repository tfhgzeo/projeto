onLoadFunction();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "index.html"
    }
})


var voltar = document.querySelector("#voltar");
voltar.addEventListener("click", function() {
    window.location.href = "opcoesLogin.html";
});

document.querySelector("#btnLogar").addEventListener("click", (e) => {
    e.preventDefault();

    var user = document.querySelector("#email").value;

    var password = document.querySelector("#senha").value;

    console.log("Usuario: " + user);


    console.log("Senha: " + password);


    /* login(user, password); */
})