var cesta = document.querySelector("#cesta");
cesta.addEventListener("click", () => {
    window.location.href = "cesta.html";
})

var menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    window.location.href = "opcoesLogin.html";
})

onLoadFunction();

criarCards();