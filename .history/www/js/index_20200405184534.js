onLoadFunction();

function addMenuLeft() {
    var body = document.querySelector("body");

    var leftBar = document.createElement("div");
    leftBar.classList.add("leftBar");
    leftBar.classList.add("sumir")

    var menu = document.createElement("div");
    menu.classList.add("menu");

    leftBar.appendChild(menu);
    body.appendChild(leftBar);

    var menuHamburger = document.querySelector(".menuHamburger");
    menuHamburger.addEventListener("click", () => {

        var leftBar = document.querySelector(".leftBar");
        leftBar.classList.remove("sumir")
        leftBar.classList.add("mostrar");

        console.log("função adicionanda");
    })

}

document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelector(".divLocalizacao").style.display = "none";

    var cesta = document.querySelector("#cesta");
    cesta.addEventListener("click", () => {
        window.location.href = "cesta.html";
    })

    var localiza = document.querySelector(".localizacao");
    localiza.addEventListener("click", () => {
        var divLocalizacao = document.querySelector(".divLocalizacao").style.display;

        if (divLocalizacao == "none") {
            document.querySelector(".divLocalizacao").style.display = "block";
        } else {
            document.querySelector(".divLocalizacao").style.display = "none";
        }

    });

    var menu = document.querySelector(".menuHamburger");
    menu.addEventListener("click", () => {
        var menuBar = document.querySelector(".leftBar")
        menuBar.classList.add("mostrar");
    })

    var pesquisar = document.querySelector(".pesquisa");
    pesquisar.addEventListener("click", () => {

        var divPesquisa = document.querySelector(".divPesquisa");
        divPesquisa.classList.add("mostrar");

        var topBar = document.querySelector(".topBar");
        topBar.classList.add("sumir");

        var inputPesquisa = document.querySelector("#pesquisa");
        inputPesquisa.focus();

    })

    criarCards();

    addMenuLeft()

    console.log("Pagina Carregada com Sucesso");

})