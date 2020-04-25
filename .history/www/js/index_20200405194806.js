onLoadFunction();

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
        menuBar.classList.remove("sumir");
        menuBar.classList.add("mostrar");

    })

    criarCards();


    var leftBar = document.querySelector(".leftBar");
    leftBar.classList.add("leftBarPos");
    leftBar.classList.add("sumir")

    var menu = document.querySelector(".menu");
    menu.classList.add("menuPos")

    /* 
        addMenuLeft() */

    console.log("Pagina Carregada com Sucesso");

})